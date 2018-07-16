import AJV from 'ajv';
import DraftSix from 'ajv/lib/refs/json-schema-draft-06.json';

async function fetchJSON (url, method = 'GET', json = '', stringify = true) {
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
}

function filterUnchangedData (newObj, oldObj) {
	const json = {};
	for (let prop in newObj) {
		if (newObj.hasOwnProperty(prop)) {
			if (newObj[prop] !== null && typeof newObj[prop] === 'object') {
				const obj = filterUnchangedData(newObj[prop], oldObj[prop]);
				if (Object.keys(obj).length > 0) json[prop] = obj;
				continue;
			}
			console.log(prop);
			if (newObj[prop] !== oldObj[prop]) {
				json[prop] = newObj[prop];
			}
		}
	}
	return json;
}
function round (n, digits) {
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
}
const copyObject = (obj) => JSON.parse(JSON.stringify(obj));

export default {
	install: (Vue, options) => {
		Vue.prototype.$copyObject = copyObject;
		Vue.prototype.$round = round;
		Vue.prototype.$fetchJSON = fetchJSON;
		Vue.prototype.$filterUnchangedData = filterUnchangedData;
		Vue.prototype.$ajv = new AJV();
		Vue.prototype.$ajv.addMetaSchema(DraftSix);
	}
};
