import moment from 'moment';
async function fetchJSON (url, method = 'GET', json = '', stringify = true) {
	if (process.env.NODE_ENV === 'development') {
		let origin = window.location.protocol + '//';
		// hard coding backend API port
		// maybe add port to process.env with webpack instead?
		origin += window.location.hostname + ':8000';
		url = origin + url;
	}
	const options = {
		method: method,
		mode: 'cors',
		credentials: 'include'
	};
	if (method !== 'GET') {
		let body = json;
		if (stringify) body = JSON.stringify(json);
		options.body = body;
	}
	const response = await fetch(url, options);
	if (!response.ok) {
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
// Limit should be at most 6, but if dataset is known do half of the data set rounded up only if data set is sub 12 requests.
function parallelLimit (promiseFactories, limit) {
	let result = [];
	let cnt = 0;

	function chain (promiseFactories) {
		if (!promiseFactories.length) return;
		let i = cnt++; // preserve order in result
		return promiseFactories.shift()().then((res) => {
			result[i] = res; // save result
			return chain(promiseFactories); // append next promise
		});
	}

	let arrChains = [];
	while (limit-- > 0 && promiseFactories.length > 0) {
		// create `limit` chains which run in parallel
		arrChains.push(chain(promiseFactories));
	}
	// return when all arrChains are finished
	return Promise.all(arrChains).then(() => result);
}

function optionsRequest (url) {
	fetchJSON(url, 'OPTIONS').then((rsp) => {
		console.log(rsp.body);
	});
	return 'Waiting on Promise';
}
function groupChildArrayByParentId (childArray, parentArray, parentProp, childProp = parentProp) {
	return parentArray.reduce((accum, ele) => {
		accum.push(childArray.filter((child) => {
			return ele[parentProp] === child[childProp];
		}));
		return accum;
	}, []);
}
window.RTV = window.RTV || {};
window.RTV.optionsRequest = optionsRequest;
function handleError (err, component) {
	const error = { timestamp: moment().format('h:mm:ss a') };
	if (err.code === 401) {
		component.$emit('login');
		error.id = component.alertCounter;
		error.body = 'Need to Login to Access this Page';
		error.variant = 'danger';
		error.header = 'Redirecting To Login page';
		error.dismissible = true;
		return error;
	}
	error.header = 'Whoops: Something Broke';
	if (err.hasOwnProperty('url')) {
		if (err.hasOwnProperty('code')) {
			error.body = '<b>Path:</b> ' + err.url + '<br><b>Status:</b> ' + err.code + (err.body ? ' ' + err.body : '');
		} else if (err.hasOwnProperty('message')) {
			error.body = '<b>Path:</b> ' + err.url + '<br><b>Message:</b> ' + err.body;
		} else {
			error.body = '<b>Path:</b> ' + err.url + '<br><b>Status: 500</b>';
		}
	} else {
		if (typeof err.body !== 'undefined') {
			error.body = '<b>Error:</b> ' + err.body;
		} else {
			error.body = '<b>Error:</b> ' + err.message;
		}
	}
	error.variant = 'danger';
	error.dismissible = true;
	return error;
}
function buildOptions (array, id, options, value = 'name', sort = true) {
	array.forEach((obj) => {
		let name = obj[value];
		options.push({text: name, value: obj[id], sortable: true});
	});
	if (sort === true) sortOptionsArray(options);
}
function filterUnchangedData (newObj, oldObj) {
	const json = {};
	for (let prop in newObj) {
		if (newObj.hasOwnProperty(prop)) {
			if (newObj[prop] !== oldObj[prop]) {
				json[prop] = newObj[prop];
			}
		}
	}
	return json;
}
function sortOptionsArray (arr) {
	arr.sort(function (a, b) {
		if (a.sortable !== true || b.sortable !== true) return 0;
		var nameA = a.text.toUpperCase(); // ignore upper and lowercase
		var nameB = b.text.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		// names must be equal
		return 0;
	});
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
export { fetchJSON, handleError, buildOptions, parallelLimit, groupChildArrayByParentId, filterUnchangedData, round };
