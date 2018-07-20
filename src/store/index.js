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
		menuItems: {}
	},
	mutations: {
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
