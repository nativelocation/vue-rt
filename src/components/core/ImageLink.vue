<template>
<div class="w-100 d-flex justify-content-around flex-wrap">
	<div></div>
	<span v-if="label !== ''" class="font-30 d-flex justify-content-around"> {{ label }} </span>
</div>
</template>
<script>
export default {
	name: 'RTVCoreImageLink',
	prop: {
		label: {
			Type: String,
			default: ''
		},
		imageClass: {
			type: String,
			default: ''
		}
	}
};
</script>
<style lang="sass">
@import '~$styles/fonts';
@import '~$styles/variables';
.font-30 {
	font-size: 30px;
	font-family: cabin;
	font-weight: 100;
	color: $white;
	text-align: center;
}


</style>
