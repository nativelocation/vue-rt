<template>
<div id="profile">
	<div class="content">
		<div class="d-flex align-items-center mt-2 ml-2 p-3">
			<template v-for="component in components" v-if="component.name==='rtv-core-avatar'">
				<keep-alive :key="component.name">
					<RTVCoreComponentProxy
						:name="component.name"
						:data="component.data ? $copyObject(component.data) : {}"/>
				</keep-alive>
			</template>
		</div>
		<div class="content-info d-flex flex-column flex-wrap px-3">
			<template v-for="component in components" v-if="component.name!=='rtv-core-avatar'">
				<keep-alive :key="component.name">
					<RTVCoreComponentProxy
						:name="component.name"
						:data="component.data ? $copyObject(component.data) : {}"/>
				</keep-alive>
			</template>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreProfile',
	props: {
		components: {
			type: Array
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#profile {
	overflow: auto;
	.content {
		.content-info {
			height: calc( 100vh - 212px );
		}
	}
}
</style>
