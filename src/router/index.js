import Vue from 'vue';
import Router from 'vue-router';
import RTVCoreView from '@/components/core/View';

Vue.use(Router);
export default new Router({
	routes: [
		{
			path: '/:url*',
			name: 'home',
			component: RTVCoreView
		}
	]
});
