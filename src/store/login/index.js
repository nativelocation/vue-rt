import * as type from './types'
import actions from './actions'

const state = {
	isLoading: false,
	error: null,
	token: ''
}

const mutations = {
	[type.REQUEST_LOGIN](state) {
		state.isLoading = true
		state.error = null
	},

	[type.REQUEST_LOGIN_SUCCESS](state, action) {
		state.isLoading = false
		state.token = action.payload
		state.error = null
	},

	[type.REQUEST_LOGIN_ERROR](state, action) {
		state.isLoading = false
		state.error = action.error
	}
}

export default {
	state,
	mutations,
	actions
}
