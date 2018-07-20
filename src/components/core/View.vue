<template>
<div>
	<template v-for="component in components">
		<keep-alive :key="component.name">
			<RTVCoreComponentProxy
				:name="component.name"
				:data="component.data ? $copyObject(component.data) : {}"/>
		</keep-alive>
	</template>
</div>
</template>
<script>

export default {
	name: 'RTVCoreView',
	created: function () {
		document.title = 'View';
	},
	computed: {
		components () {
			return this.$store.getters.getViewComponents;
		}
	},
	watch: {
		'$store.state.route': function (newRoute, oldRoute) {
			this.$store.dispatch('loadResources');
		}
	},
	data: function () {
		return {
		};
	},
	props: [
		'menuItems'
	]
};
</script>
<style lang="sass">
</style>
