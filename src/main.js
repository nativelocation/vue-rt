import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import store from './store/index'
import router from './router/index'

sync(store, router)

new Vue({
    el: '#app',
    store,
    router,
    render: hoc => hoc(App)
})
