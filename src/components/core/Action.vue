<template>
<div class="action-wrapper">
	<div>
		<div>
			<icon v-if="iconName !== null" :name="iconName" class="icon"/>
		</div>
		<div :style="styles">
			{{ label }}
		</div>
	</div>
</div>
</template>
<script>
export default {
	name: 'RTVCoreLink',
	props: {
		label: {
			type: String,
			default: ''
		},
		iconName: {
			type: String,
			default: null
		},
		href: {
			type: String,
			default: ''
		},
		styles: {
			type: Object,
			default: {}
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
