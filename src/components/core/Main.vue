<template>
<div>
	<header v-if="header !== null" class="main-header">
		{{ header }}
	</header>
	<main class="main-content">
		<template v-for="component in components">
			<keep-alive :key="component.name">
				<RTVCoreComponentProxy
					:name="component.name"
					:data="$copyObject(component.data)"/>
			</keep-alive>
		</template>
	</main>
</div>
</template>
<script>
export default {
	name: 'RTVCoreMain',
	props: {
		header: {
			Type: String,
			default: null
		},
		components: {
			type: Array,
			default: () => []
		}
	}
};
</script>
<style lang="sass">
@import '~$styles/variables';
.main-header {
	background: $gray-200;
	height: 72px;
	padding: 0 4%;
	font-size: 30px;
	font-family: cabin;
	font-weight: 100;
}
.main-content {
	padding: 1rem 4%;
}
</style>
