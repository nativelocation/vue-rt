<template>
<div>
	<template v-for="component in components">
		<keep-alive :key="component.type">
			<RTVCoreComponentProxy
				:name="component.type"
				:data="component.data ? $copyObject(component.data) : {}"/>
		</keep-alive>
	</template>
</div>
</template>
<script>
import dashboardData from '@/assets/json/dashboard.json';
import homeData from '@/assets/json/home.json';
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
		'menuItems',
		'updateMenu'
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
			// this.menuItems = {};
			this.components.splice(0);
			if (path === '/') {
				const resp = await this.$fetchJSON('/api/view/_landing_');
				resp.data.menu.forEach((ele) => {
					this.menuItems.push(ele);
				});
				this.components = resp.data.components;
			} else if (path.includes('/form/')) {
				console.log('pushing form');
				this.components.push({
					name: 'rtv-core-form',
					data: {
						props: {
							backLink: oldPath
						}
					}
				});
			} else if (path.includes('/example/home')) {
				const resp = homeData;
				if (typeof resp.data.menu !== 'undefined') {
					this.updateMenu(resp.data.menu);
					// resp.data.menu.forEach((ele) => {
					// 	this.menuItems.push(ele);
					// });
				}
				this.components = resp.data.components;
			} else if (path.includes('/example/dashboard')) {
				const resp = dashboardData;
				if (typeof resp.data.menu !== 'undefined') {
					this.updateMenu(resp.data.menu);
					// resp.data.menu.forEach((ele) => {
					// 	this.menuItems.push(ele);
					// });
				}
				this.components = resp.data.components;
			} else {
				const resp = await this.$fetchJSON('/api/view' + this.$store.state.route.path);
				console.log('pushing components');
				if (typeof resp.data.menu !== 'undefined') {
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
