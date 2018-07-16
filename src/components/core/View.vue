<template>
<div>
	<template v-for="component in components">
		<keep-alive :key="component.name">
			<RTVCoreComponentProxy
				:name="component.name"
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
				// const resp = await this.$fetchJSON('/api/view/_landing_');
				// resp.data.menu.forEach((ele) => {
				// 	this.menuItems.push(ele);
				// });
				// this.components = resp.data.components;
				const menuData = {
					name: 'dashboardMenu',
					role: 'authenticated',
					menus: [
						{
							type: 'rtv-modal-add',
							name: 'addModal',
							iconName: 'add',
							sub: [
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'New Contract',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Ad for Bid (Long Form)',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Daily Journal',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'New Contract Template',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Ad for Bid (Short)',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Transaction',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Project Items',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Contract Changes',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Material on Hand',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Funding Sources',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Consultants',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Encumbrance',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Funding Splits',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'State Aid Payment Requests',
											href: '/oneoffice/create/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Weekly Diary',
											href: '/oneoffice/create/**'
										}
									}
								}
							]
						},
						{
							type: 'rtv-modal-search',
							name: 'searchModal',
							iconName: 'search'
						},
						{
							type: 'rtv-modal-settings',
							name: 'settingsModal',
							iconName: 'settings',
							sub: [
								{
									type: 'rtv-core-action',
									data: {
										props: {
											label: 'Hennepin County',
											click: 'openHennepinCounty'
										}
									}
								},
								{
									type: 'rtv-core-action',
									data: {
										props: {
											label: 'Your County',
											click: 'openYourCounty'
										}
									}
								},
								{
									type: 'rtv-core-action',
									data: {
										props: {
											label: 'New Organization',
											click: 'openOrganization'
										}
									}
								},
								{
									type: 'rtv-core-action',
									data: {
										props: {
											label: 'New Contact',
											click: 'openContact'
										}
									}
								},
								{
									type: 'rtv-core-action',
									data: {
										props: {
											label: 'New Employee',
											click: 'openEmployee'
										}
									}
								},
								{
									type: 'rtv-core-action',
									data: {
										props: {
											label: 'NewUserAccount',
											click: 'openUserAccount'
										}
									}
								},
								{
									name: 'rtv-core-action',
									data: {
										props: {
											label: 'New Item',
											click: 'openItem'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'My Account',
											href: '/oneOffice/profile/**'
										}
									}
								},
								{
									type: 'rtv-core-link',
									data: {
										props: {
											label: 'Settings',
											href: '/oneOffice/profile/**'
										}
									}
								},
								{
									type: 'rtv-core-action',
									data: {
										props: {
											label: 'Sign Out',
											click: 'openSignOut'
										}
									}
								}
							]
						},
						{
							type: 'rtv-modal-help',
							name: 'helpModal',
							iconName: 'help'
						}
					]
				};
				this.components = menuData.components;
				this.updateMenu(menuData);
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
			} else {
				const resp = await this.$fetchJSON('/api/view' + this.$store.state.route.path);
				console.log('pushing components');
				if (typeof resp.data.menu !== 'undefined') {
					// resp.data.menu.forEach((ele) => {
					// 	this.menuItems.push(ele);
					// });
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
