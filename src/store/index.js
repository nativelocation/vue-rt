import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import login from './login/index'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
	modules: {
		login
	},
	strict: false,
	middlewares: [createLogger()]
})
