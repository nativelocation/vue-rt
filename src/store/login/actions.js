import Vue from 'vue'
import * as type from './types'

const actions = {
	getLogin({ commit }) {
        commit(type.REQUEST_LOGIN_SUCCESS, {
            payload: 'Test Login'
        })
	}
}

export default actions
