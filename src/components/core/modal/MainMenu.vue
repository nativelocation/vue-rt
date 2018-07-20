<template>
<div class="mainmenu-dropdown text-left">
	<div class="mainmenu-title d-flex align-items-center mb-3">
		<div class="d-flex align-items-center">
			<i class="material-icons dashboard-menu">apps</i>
			<div class="text-logo pl-3">OneOffice</div>
		</div>
	</div>
	<div class="mainmenu-content mt-3 pt-1 px-3">
		<div class="font-weight-bold pb-1 mb-3 px-4">DASHBOARD</div>
		<div class="pt-3 pb-1 px-4">Section 1</div>
		<div class="pt-3 pb-1 px-4">Section 2</div>
		<div class="pt-3 pb-1 px-4">Section 3</div>
		<div class="pt-3 pb-1 px-4">Section 4</div>
		<div class="pt-3 pb-1 px-4">Section 5</div>
		<div class="pt-3 pb-1 px-4">Section 6</div>
		<div class="pt-3 pb-1 px-4">Section 7</div>
		<div class="pt-3 pb-1 px-4">Section 8</div>
		<div class="pt-3 pb-1 px-4">Section 9</div>
		<div class="pt-3 pb-1 px-4">Reports</div>
		<div class="mt-4 mb-1 px-1 mainmenu-border"></div>
		<div class="font-weight-bold p-0 mt-4 pb-1 px-4">OTHER APPS</div>
		<div class="pt-3 pb-1 px-4">PERMITS</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreModalMainMenu',
	props: {
		show: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#mainMenu {
	.mainmenu-dropdown {
		background: $white;
		height: 100%;
		.mainmenu-title {
			.text-logo,
			.text-logo.hover {
				color: $black;
				text-decoration: none;
				cursor: pointer;
				font-family: cabin;
				font-size: 36px;
				font-style: normal;
				font-weight: 100;
			}
			.dashboard-menu {
				font-size: 60px;
				color: $blue;
				background: $white;
				padding: 6px;
			}
		}
		.mainmenu-content {
			color: #2d4f6d;
			font-size: 14px;
			height: calc( 100% - 88px );
			.mainmenu-border {
				border: solid 1px $gray-600;
			}
		}
	}
}
</style>
