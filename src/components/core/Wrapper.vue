<template>
<b-card>
	<template v-for="item in items">
		<keep-alive>
			<component-proxy :name="item.component" :data="$copyObject(item.data)"></component-proxy>
		</keep-alive>
	</template>
</b-card>
</template>

<script>
export default {
	name: 'RTVCoreWrapper',
	props: {
		items: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="sass">
</style>
