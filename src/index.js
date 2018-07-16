// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Fetch from 'whatwg-fetch';
import Promise from 'promise-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import { sync } from 'vuex-router-sync';
import store from '@/store';
import { fetchJSON, copyObject } from '@/utils.js';
import BootstrapVue from 'bootstrap-vue';
import RTVCoreComponentProxy from '@/components/core/ComponentProxy.js';
import Icon from 'vue-awesome/components/Icon';

// icons
// probably want to build this into dynamic loading
import 'vue-awesome/icons';

// styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// IE 11 specific polyfills that babel doesn't cover
if (!window.Promise) {
	window.Promise = Promise;
}

if (!window.fetch) {
	window.fetch = Fetch;
}
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('RTVCoreComponentProxy', RTVCoreComponentProxy);
Vue.component('icon', Icon);

sync(store, router);

// register widely used util functions
Vue.prototype.$copyObject = copyObject;
Vue.prototype.$fetchJSON = fetchJSON;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: {
		App

	}
});
