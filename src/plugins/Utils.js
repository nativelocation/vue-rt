import AJV from 'ajv';
import DraftSix from 'ajv/lib/refs/json-schema-draft-06.json';

const utils = {
	$fetchJSON: async (url, method = 'GET', json = '', stringify = true) => {
		/* if (process.env.NODE_ENV === 'development') {
			let origin = window.location.protocol + '//';
			// hard coding backend API port
			// maybe add port to process.env with webpack instead?
			origin += window.location.hostname + ':8000';
			url = origin + url;
		} */
		const options = {
			method: method,
			credentials: 'include'
		};
		if (method !== 'GET') {
			let body = json;
			if (stringify) body = JSON.stringify(json);
			options.body = body;
			options.headers = {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			};
		}
		const response = await fetch(url, options);
		if (!response.ok) {
			console.log(response);
			var err = new Error(response.statusText);
			err.code = response.status;
			err.url = response.url;
			throw err;
		}
		try {
			return await response.json();
		} catch (error) {
			console.log(error);
			err = new Error('JSON parse Error');
			err.url = response.url;
			throw err;
		}
	},
	$filterUnchangedData: function (newObj, oldObj) {
		const json = {};
		for (let prop in newObj) {
			if (newObj.hasOwnProperty(prop)) {
				if (newObj[prop] !== null && typeof newObj[prop] === 'object') {
					const obj = this.$filterUnchangedData(newObj[prop], oldObj[prop]);
					if (Object.keys(obj).length > 0) json[prop] = obj;
					continue;
				}
				if (newObj[prop] !== oldObj[prop]) {
					json[prop] = newObj[prop];
				}
			}
		}
		return json;
	},
	$round: (n, digits) => {
		var negative = false;
		if (digits === undefined) {
			digits = 0;
		}
		if (n < 0) {
			negative = true;
			n = n * -1;
		}
		var multiplicator = Math.pow(10, digits);
		n = parseFloat((n * multiplicator).toFixed(11));
		n = (Math.round(n) / multiplicator).toFixed(2);
		if (negative) {
			n = (n * -1).toFixed(2);
		}
		return n;
	},
	$copyObject: obj => JSON.parse(JSON.stringify(obj)),
	$ajv: new AJV(),
	/*
	 * Parses schema object and resolves any references
	 * schemaObj = JSON schema object being parsed
	 * baseSchema = the whole options request made to get the schemaObj, used to resolve references
	 */
	$parseSchemaObject: function (schemaObj, baseSchema) {
		const parsedSchema = {};
		if (this.$isDefined(schemaObj.$ref)) {
			schemaObj = this.$resolveReference(schemaObj, baseSchema);
		}
		if (this.$isDefined(schemaObj.properties.$ref)) {
			schemaObj.properties = this.$resolveReference(schemaObj.properties, baseSchema);
		}
		for (let prop in schemaObj.properties) {
			if (schemaObj.properties.hasOwnProperty(prop)) {
				if (this.$isDefined(schemaObj.properties[prop].$ref)) {
					schemaObj.properties[prop] = this.$resolveReference(schemaObj.properties[prop], baseSchema);
				}
				if (schemaObj.properties[prop].type === 'object') {
					parsedSchema[prop] = this.$parseSchemaObject(schemaObj.properties[prop], baseSchema);
				} else if (schemaObj.properties[prop].type === 'array') {
					parsedSchema[prop] = schemaObj.properties[prop];
					if (this.$isDefined(schemaObj.properties[prop].items.$ref)) {
						schemaObj.properties[prop].items = this.$resolveReference(schemaObj.properties[prop].items, baseSchema);
					}
					if (schemaObj.properties[prop].items.type === 'object') {
						parsedSchema[prop].items = this.$parseSchemaObject(schemaObj.properties[prop].items, baseSchema);
					}
				} else {
					parsedSchema[prop] = schemaObj.properties[prop];
				}
			}
		}
		if (this.$isDefined(schemaObj.required)) parsedSchema.required = schemaObj.required;
		return parsedSchema;
	},
	$resolveReference: (obj, baseSchema) => {
		const keys = obj.$ref.split('/');
		keys.forEach((key) => {
			if (key === '#') {
				obj = baseSchema;
			} else {
				obj = obj[key];
			}
		});
		return obj;
	},
	$addToObject: (value, opts, obj) => {
		const keys = opts.key.split('.');
		for (let i = 0; i < keys.length; ++i) {
			if (i === keys.length - 1) {
				if (this.$isDefined(opts.type) && opts.type === 'integer') value = Number(value);
				obj[keys[i]] = value;
			} else {
				obj = obj[keys[i]];
			}
		}
	},
	$isDefined: value => typeof value !== 'undefined'
};
export default {
	install: (Vue, options) => {
		utils.$ajv.addMetaSchema(DraftSix);
		Object.assign(Vue.prototype, utils);
	}
};
