import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	actions,
	getters,
	state: {
		loading: true,
		uniqueId: 1,
		menuItems: {},
		formSaveObject: {},
		formBaseObject: {},
		formValidationObject: {},
		// frontend should have no concept of "roles", backend will serve out the correct data
		// for the current role of the user. This object will need to be wiped everytime this role would change
		// which should only happen when the user logs in or manually calls the endpoint to drop roles.
		views: {
			data: null,
			// only define if for some reason doesn't match the current URL
			apiEndpoint: '/_landing_',
			login: {
				data: {
					menu: {
						name: 'homeMenu'
					},
					components: [{
						name: 'rtv-core-login',
						data: {
							redirect: null
						}
					}]
				}
			},
			// special object under views, keeps track of all named menus
			menus: {}
		},
		options: {},
		data: {},
		// using state variable since getter that returns a function won't be cached by view
		// so just caching the result here instead via loadResources
		currentViewData: null
	},
	mutations: {
		setFormSaveObject (state, obj) {
			state.formSaveObject = obj;
			state.formBaseObject = JSON.parse(JSON.stringify(obj));
		},
		setFormValidationObject (state, obj) {
			state.formValidationObject = obj;
		},
		setFormSaveSubObjectProperty (state, { subObject, prop, value }) {
			subObject[prop] = value;
		},
		setCurrentViewData (state, view) {
			state.currentViewData = view;
		},
		setViewData (state, { subObject, prop, value }) {
			subObject[prop] = value;
		},
		setLoading (state, loading) {
			state.loading = loading;
		},
		setNamedMenu (state, { data, name }) {
			state.views.menus[name] = data;
		},
		incrementUniqueId (state) {
			++state.uniqueId;
		},
		updateMenu (state, newMenu) {
			state.menuItems = newMenu;
		}
	},
	strict: debug
});
