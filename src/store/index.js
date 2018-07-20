import Vue from 'vue';
import Vuex from 'vuex';
import { ajv } from '@/plugins/Utils.js';
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
		formValidationObject: {}
	},
	mutations: {
		setFormSaveObject (state, obj) {
			state.formSaveObject = obj;
			state.formBaseObject = JSON.parse(JSON.stringify(obj));
		},
		setFormValidationObject (state, obj) {
			state.formValidationObject = obj;
		},
		setFormSaveObjectProperty (state, payload) {
			let saveObject = state.formSaveObject;
			let validObject = state.formValidationObject;

			const props = payload.property.split('.');
			// can't use the base property since only objects are mutable.
			// need the object so the change also gets updated in the state.formSaveObject
			for (let i = 0; i < props.length - 1; ++i) {
				saveObject = saveObject[props[i]];
				validObject = validObject.properties[props[i]];
			}
			validObject = validObject.properties[props[props.length - 1]];
			if (validObject.type === 'number') payload.value = parseFloat(payload.float);
			saveObject[props[props.length - 1]] = payload.value;
			// actually add form state validation in the future?
			if (ajv.validate(validObject, saveObject[props[props.length - 1]])) {
				console.log('value validated');
			} else {
				console.error('value failed to validate');
				console.log('value: ' + JSON.stringify(saveObject));
				console.log('validator: ' + JSON.stringify(validObject));
				ajv.errors.forEach((ele) => {
					console.log(ele.message);
				});
			}
		},
		setLoading (state, loading) {
			state.loading = loading;
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
