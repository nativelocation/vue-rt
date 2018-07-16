<template>
<b-container fluid>
	<b-form-row :key="input.key" v-for="input in inputs">
		<b-col md="1">
			<label> {{ input.label }}: </label>
		</b-col>
		<b-col md="*">
			<b-form-input :type="inputTypeLookup(input.type)" @input="addToObject($event, input)"></b-form-input>
		</b-col>
	</b-form-row>
	<b-form-row>
		<b-btn class="btn-success" @click="submitForm">Save</b-btn>
		<b-link class="btn btn-secondary btn-sm ml-3" :to="backLink">Back</b-link>
	</b-form-row>
</b-container>
</template>
<script>
export default {
	name: 'RTVCoreForm',
	data: function () {
		return {
			apiPath: null,
			inputs: [],
			baseObject: {},
			saveObject: {},
			schema: null
		};
	},
	created: async function () {
		this.apiPath = this.$store.state.route.path.replace('form', 'api');
		this.schema = await this.$fetchJSON(this.apiPath, 'OPTIONS');
		if (typeof this.schema.post !== 'undefined') this.parseSchema(this.$copyObject(this.schema.post.expects));
		else if (typeof this.schema.put !== 'undefined') this.parseSchema(this.$copyObject(this.schema.put.expects));
	},
	props: {
		backLink: {
			type: String,
			default: '/'
		}
	},
	methods: {
		parseSchema (options, parent = '') {
			for (let prop in options.properties) {
				if (options.properties.hasOwnProperty(prop) && prop === '$ref') {
					options.properties = this.resolveReference(options.properties);
				}
			}
			for (let prop in options.properties) {
				if (options.properties.hasOwnProperty(prop)) {
					if (options.properties[prop].hasOwnProperty('properties')) {
						this.baseObject[prop] = {};
						this.parseSchema(options.properties[prop], prop);
						continue;
					}
					let key = prop;
					if (parent !== '') {
						key = parent + '.' + prop;
						this.baseObject[parent][prop] = null;
					} else {
						this.baseObject[prop] = null;
					}
					this.inputs.push({key: key, ...options.properties[prop]});
				}
			}
			this.saveObject = this.$copyObject(this.baseObject);
		},
		resolveReference (obj) {
			const keys = obj.$ref.split('/');
			keys.forEach((key) => {
				if (key === '#') {
					obj = this.schema;
				} else {
					obj = obj[key];
				}
			});
			return obj;
		},
		addToObject (value, opts) {
			const keys = opts.key.split('.');
			let obj = this.saveObject;
			for (let i = 0; i < keys.length; ++i) {
				if (i === keys.length - 1) {
					obj[keys[i]] = opts.type === 'integer' ? Number(value) : value;
				} else {
					obj = obj[keys[i]];
				}
			}
		},
		inputTypeLookup (dbType) {
			switch (dbType) {
				case 'integer':
					return 'number';
				case 'string':
					return 'text';
				default:
					return '';
			}
		},
		submitForm () {
			const json = this.$filterUnchangedData(this.saveObject, this.baseObject);
			const schema = this.schema.post.expects;
			schema.definitions = this.schema.defintions;
			if (this.$ajv.validate(schema, json)) {
				this.$fetchJSON(this.apiPath, 'POST', json);
			}
		}
	}
};
</script>
<style>
</style>
