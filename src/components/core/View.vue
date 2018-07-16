<template>
<div>
	<template v-for="component in components">
		<keep-alive>
			<RTVCoreComponentProxy
				:name="component.name"
				:key="component.name"
				:data="$copyObject(component.data)"/>
		</keep-alive>
	</template>
</div>
</template>
<script>
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
	props: ['menuItems'],
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
			this.menuItems.splice(0);
			this.components.splice(0);
			if (path === '/') {
				const resp = await this.$fetchJSON('/api/view/_landing_');
				resp.data.menu.forEach((ele) => {
					this.menuItems.push(ele);
				});
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
			} else {
				const resp = await this.$fetchJSON('/api/view' + this.$store.state.route.path);
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
