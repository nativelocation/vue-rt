<template>
<div class="action-wrapper">
	<div :style="styles">
		<div :style="imgStyles">
			<icon v-if="iconName !== null" :name="iconName" class="icon"/>
		</div>
		<div :style="textStyles">
			{{ label }}
		</div>
	</div>
</div>
</template>
<script>
export default {
	name: 'RTVCoreAction',
	props: {
		label: {
			type: String
		},
		iconName: {
			type: String,
			default: null
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
@import '~$styles/variables';
.action-wrapper {
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
