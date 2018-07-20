<template>
<div class="link-wrapper">
	<b-link :to="'/' + href" class="link-wrapper" :style="styles">
		<div :style="imgStyles">
			<icon v-if="iconName !== null" :name="iconName" class="icon"/>
		</div>
		<div :style="textStyles">
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
			type: String
		},
		iconName: {
			type: String,
			default: null
		},
		href: {
			type: String,
			default: ''
		},
		imgStyles: {
			type: Object
		},
		textStyles: {
			type: Object
		},
		styles: {
			type: Object
		}
	}
};
</script>
<style lang="sass">
@import '~$styles/fonts';
@import '~$styles/variables';
.link-wrapper, .link-wrapper.hover {
	box-sizing: border-box;
	a {
		text-align: center;
		text-decoration: none;
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
