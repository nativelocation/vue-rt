<template>
<div class="link-wrapper">
	<b-link :to="'/' + href">
		<div>
			<icon v-if="iconName !== null" :name="iconName" class="icon" exact/>
		</div>
		<div class="font-30">
			{{ label }}
		</div>
	</b-link>
</div>
</template>
<script>
export default {
	name: 'RTVCoreLink',
	props: {
		label: {
			Type: String,
			default: ''
		},
		iconName: {
			type: String,
			default: null
		},
		href: {
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
.link-wrapper {
	box-sizing: border-box;
	a {
		text-align: center;
	}
}
.icon {
	height: 200px;
	width: 200px;
	left: 0;
	top: 0;
	border: solid 10px;
	padding: 1em;
	color: $white;
	&:hover {
		opacity: 0.7;
		cursor: pointer;
	}

}
</style>
