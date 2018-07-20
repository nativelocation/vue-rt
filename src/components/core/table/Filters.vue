<template>
<div id="table-filters" class="d-flex align-items-center px-1">
	<div class="filter-container d-flex align-items-center">
		<div v-for="component in components" :key="component.id">
			<keep-alive>
				<RTVCoreComponentProxy :name="component.name" :data="$copyObject(component.data)"/>
				<RTVCoreComponentProxy
					v-if="component.name !=='rtv-core-action'"
					:name="'rtv-core-modal-' + component.id"
					:data="{ class: 'modal-child', props: { handleClose: () => { childState[component.id] = false } }}"/>
			</keep-alive>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name: 'RTVCoreTableFilters',
	data: function () {
		return {
			tabIndex: 0,
			childState: {
				addProjectItem: false
			}
		};
	},
	props: {
		components: {
			type: Array,
			defalut: () => []
		}
	}
};
</script>
<style lang="sass">
@import '~$styles/variables';
#table-filters {
	.filter-container {
		list-style: none;
	}
}
</style>
