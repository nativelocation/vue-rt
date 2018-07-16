<template>
<div id="banner" class="top-banner justify-content-around align-items-center d-flex">
	<div class="w-100 d-flex justify-content-around flex-wrap">
		<template v-for="component in components">
			<keep-alive :key="component.name">
				<RTVCoreComponentProxy :name="component.name" :data="$copyObject(component.data)"/>
			</keep-alive>
		</template>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreBanner',
	props: {
		components: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="sass">
.home-banner-image {
	background: url('~@/assets/images/home_banner.jpg');
}
#banner.top-banner {
	position: relative;
	max-height: 30.7rem;
	overflow: hidden;
	padding: 6em 0;
}
</style>
