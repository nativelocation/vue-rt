<template>
<div>
	<template v-for="widget in widgets">
		<keep-alive>
			<RTVCoreComponentProxy
				:name="widget.component"
				 :data="$copyObject(widget.data)"/>
		</keep-alive>
	</template>
</div>
</banner>
</template>
<script>
export default {
	name: 'RTVCoreView',
	created: function () {
		document.title = 'View';
	},
	mounted: async function () {
		const resp = await this.$fetchJSON('/view/_landing_', 'GET');
		resp.data.menu.forEach((ele) => {
			this.menuItems.push(ele);
		});
		this.widgets = resp.data.widget;
	},
	data: function () {
		return {
			widgets: []
		};
	},
	props: ['menuItems'],
	methods: {
	}
};
</script>
<style lang="sass">
</style>
