<template>
<div>
	<template v-for="component in components">
		<keep-alive>
			<RTVCoreComponentProxy
				:key="component.name"
				:name="component.name"
				:data="component.data ? $copyObject(component.data) : {}"/>
		</keep-alive>
	</template>
</div>
</template>
<script>
import dashboardMenuPublic from '@/assets/json/dashboardMenuPublic.json';
import dashboardMenuAuth from '@/assets/json/dashboardMenuAuth.json';
import dashboardPublic from '@/assets/json/dashboardPublic.json';
import dashboardAuth from '@/assets/json/dashboardAuth.json';
import homeMenuPublic from '@/assets/json/homeMenuPublic.json';
import homeMenuAuth from '@/assets/json/homeMenuAuth.json';
import homePublic from '@/assets/json/homePublic.json';
import homeAuth from '@/assets/json/homeAuth.json';
import login from '@/assets/json/login.json';
import planning from '@/assets/json/planning.json';
import profile from '@/assets/json/profile.json';
import security from '@/assets/json/security.json';
import settings from '@/assets/json/settings.json';
import dashboardData from '@/assets/json/dashboard.json';

export default {
	name: 'RTVCoreView',
	created: function () {
		document.title = 'View';
		this.updatePage(this.$store.state.route.path);
	},
	watch: {
		'$store.state.route': function (newRoute, oldRoute) {
			this.updatePage(newRoute.path, oldRoute.path);
		}
	},
	data: function () {
		return {
			components: [],
			currentPath: ''
		};
	},
	props: [
		'menuItems'
	],
	methods: {
		async updatePage (path, oldPath) {
			if (typeof oldPath === 'undefined') oldPath = '/';
			this.$store.commit('setLoading', true);
			if (path === '/login') {
				this.components.push({
					name: 'rtv-core-login',
					data: {
						redirect: oldPath
					}
				});
				this.$store.commit('setLoading', false);
				return;
			}
			// this.menuItems.splice(0);
			// this.components.splice(0);
			this.components.splice(0);
			if (path === '/') {
				const resp = await this.$fetchJSON('/api/view/_landing_');
				this.components = resp.data.components;
			} else if (path.includes('/form/')) {
				this.components.push({
					name: 'rtv-core-form',
					data: {
						props: {
							backLink: oldPath
						}
					}
				});
			} else if (path.includes('/example/login')) {
				this.$store.commit('updateMenu', login);
				this.components = login.data.components;
			} else if (path.includes('/example/home_public')) {
				this.$store.commit('updateMenu', homeMenuPublic);
				this.components = homePublic.data.components;
			} else if (path.includes('/example/home_auth')) {
				this.$store.commit('updateMenu', homeMenuAuth);
				this.components = homeAuth.data.components;
			} else if (path.includes('/example/dashboard_public')) {
				this.$store.commit('updateMenu', dashboardMenuPublic);
				this.components = dashboardPublic.data.components;
			} else if (path.includes('/example/dashboard_auth')) {
				this.$store.commit('updateMenu', dashboardMenuAuth);
				this.components = dashboardAuth.data.components;
			} else if (path.includes('/example/contract/planning')) {
				this.$store.commit('updateMenu', homeMenuPublic);
				this.components = planning.data.components;
			} else if (path.includes('/example/dashboard/profile')) {
				this.$store.commit('updateMenu', dashboardMenuAuth);
				this.components = profile.data.components;
			} else if (path.includes('/example/dashboard/security')) {
				this.$store.commit('updateMenu', dashboardMenuAuth);
				this.components = security.data.components;
			} else if (path.includes('/example/dashboard/settings')) {
				this.$store.commit('updateMenu', dashboardMenuAuth);
				this.components = settings.data.components;
			} else if (path.includes('/example/home')) {
				/* const resp = homeData;
				if (typeof resp.data.menu !== 'undefined') {
					this.$store.commit('updateMenu', resp.data.menu);
				}
				this.components = resp.data.components; */
			} else if (path.includes('/example/dashboard')) {
				const resp = dashboardData;
				if (typeof resp.data.menu !== 'undefined') {
					this.$store.commit('updateMenu', resp.data.menu);
				}
				this.components = resp.data.components;
			} else {
				const resp = await this.$fetchJSON('/api/view' + path);
				if (resp.data !== null && Array.isArray(resp.data.menu) && Array.isArray(this.menuItems)) {
					resp.data.menu.forEach((ele) => {
						this.menuItems.push(ele);
					});
				}
				this.components = resp.data.components;
			}
			this.$store.commit('setLoading', false);
		}
	}
};
</script>
<style lang="sass">
</style>
