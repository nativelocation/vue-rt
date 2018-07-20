import { fetchJSON, ajv } from '@/plugins/Utils.js';

export async function loadTempViewJSON ({ commit, dispatch }) {
	// endpoint = endpoint this view data should show on
	// endpoint can be left undefined for menu JSON
	// only need menu set to true for menu JSON otherwise assuming it will be
	// view JSON.
	const json = [
		{
			menu: true,
			name: 'dashboard',
			filename: 'dashboardMenuAuth'
		},
		{
			endpoint: 'examples/dashboard-public',
			filename: 'dashboardPublic'
		},
		{
			endpoint: 'examples/dashboard-auth',
			filename: 'dashboardAuth'
		},
		{
			menu: true,
			name: 'home',
			filename: 'homeMenuAuth'
		},
		{
			endpoint: 'examples/home-public',
			filename: 'homePublic'
		},
		{
			endpoint: 'examples/home-auth',
			filename: 'homeAuth'
		},
		{
			endpoint: 'examples/contract/planning',
			filename: 'planning'
		},
		{
			endpoint: 'examples/dashboard/profile',
			filename: 'profile'
		},
		{
			endpoint: 'examples/dashboard/security',
			filename: 'security'
		},
		{
			endpoint: 'examples/dashboard/settings',
			filename: 'settings'
		}
	];

	const promises = [];
	json.forEach((ele) => {
		promises.push(import(
			/* webpackChunkName: "devViewJSON",
			   webpackMode: "lazy-once" */
			`@/assets/json/${ele.filename}.json`
		).then((module) => {
			if (ele.menu === true) {
				commit({
					type: 'setNamedMenu',
					data: module.default,
					name: ele.name
				});
			} else {
				dispatch({
					type: 'setViewData',
					data: module.default.data,
					endpoint: ele.endpoint
				});
			}
		}).catch((e) => {
			console.error(e);
		}));
	});
	await Promise.all(promises);
}

export async function loadResources ({ commit, state, getters, dispatch }) {
	if (state.loading === false) commit('setLoading', true);
	let viewObject = getters.getViewObject();

	if (typeof viewObject === 'undefined') {
		await dispatch('requestViewData');
		viewObject = getters.getViewObject();
	} else if (viewObject.data === null || typeof viewObject.data === 'undefined') {
		let path = null;
		if (typeof viewObject.apiEndpoint !== 'undefined') {
			path = viewObject.apiEndpoint;
		}
		await dispatch('requestViewData', path);
	}

	commit('updateMenu', state.views.menus[viewObject.data.menu.name]);
	commit('setCurrentViewData', viewObject.data);
	commit('setLoading', false);
};

export async function requestViewData ({ commit, state, dispatch }, path = null) {
	try {
		if (path === null) path = state.route.path;
		const resp = await fetchJSON('/api/view' + path);
		if (resp.data !== null) {
			dispatch('setViewData', { data: resp.data });
		} else {
			// TODO some type of error page/notice should be shown to the user?
			console.error('response contained null data');
		}
	} catch (e) {
		// TODO check status and show error to user?
		console.error(e);
	}
}

export function setViewData ({ commit, state, dispatch }, { data, endpoint = null }) {
	if (endpoint === null) endpoint = state.route.path;

	dispatch('parseViewData', data);

	let subObject = state.views;
	const props = endpoint.split('/').filter(prop => prop !== '');
	for (let i = 0; i < props.length; ++i) {
		if (typeof subObject[props[i]] === 'undefined') {
			subObject[props[i]] = { data: null };
		}
		subObject = subObject[props[i]];
	}

	commit({
		type: 'setViewData',
		subObject,
		prop: 'data',
		value: data
	});
}

export function parseViewData ({ commit, state }, data) {

}

export function validateUserInput ({ state, commit }, { prop, value }) {
	let saveObject = state.formSaveObject;
	let validObject = state.formValidationObject;

	const props = prop.split('.');
	// can't use the base property since only objects are mutable.
	// need the object so the change also gets updated in the state.formSaveObject
	for (let i = 0; i < props.length - 1; ++i) {
		saveObject = saveObject[props[i]];
		validObject = validObject.properties[props[i]];
	}
	validObject = validObject.properties[props[props.length - 1]];
	if (validObject.type === 'number') value = parseFloat(value);

	commit({
		type: 'setFormSaveSubObjectProperty',
		subObject: saveObject,
		prop: props[props.length - 1],
		value: value
	});

	// TODO actually add form state validation in the future?
	if (ajv.validate(validObject, saveObject[props[props.length - 1]])) {
		console.log('value validated');
	} else {
		console.error('value failed to validate');
		console.log('value is');
		console.log(saveObject);
		console.log('validator is');
		console.log(validObject);
		console.log('errors from validator are');
		ajv.errors.forEach((ele) => {
			console.log(ele.message);
		});
	}
}
