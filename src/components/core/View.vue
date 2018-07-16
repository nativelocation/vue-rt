<template>
<div>
	<template v-for="widget in widgets">
		<keep-alive>
			<RTVCoreComponentProxy
				:name="widget.component"
				:key="widget.component"
				:data="$copyObject(widget.data)"/>
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
			widgets: [],
			currentPath: ''
		};
	},
	props: ['menuItems'],
	methods: {
		async updatePage (path, oldPath) {
			if (typeof oldPath === 'undefined') oldPath = '/';
			this.$store.commit('setLoading', true);
			if (path === '/login') {
				this.widgets.push({
					component: 'rtv-core-login',
					data: {
						redirect: oldPath
					}
				});
				this.$store.commit('setLoading', false);
				return;
			}
			this.menuItems.splice(0);
			this.widgets.splice(0);
			if (path === '/') {
				const resp = await this.$fetchJSON('/api/view/_landing_');
				resp.data.menu.forEach((ele) => {
					this.menuItems.push(ele);
				});
				this.widgets = resp.data.widget;
			} else if (path.includes('/form/')) {
				this.widgets.push({
					component: 'rtv-core-form',
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
				this.widgets = resp.data.widget;
			}
			this.$store.commit('setLoading', false);
		}
	}
};
</script>
<style lang="sass">
</style>
