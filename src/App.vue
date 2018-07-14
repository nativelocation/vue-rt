<template>
	<div id="app">
		<app-header :menuItems="menuItems"></app-header>
			<router-view
				:menuItems="menuItems">
			</router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from '@/components/Header.vue';
import appFooter from '@/components/Footer.vue';

export default {
	name: 'app',
	data: function () {
		return {
			menuItems: []
		};
	},
	components: {
		appHeader,
		appFooter
	}
};
</script>

<style>
#loader {
	margin: 1em auto;
	display: block;
}
.alert-container {
	position: fixed;
	z-index: 9999999999999999999;
}
.alert-container:empty {
	display: none;
}
.message-panel {
	display: block;
	height: 200px;
	position: relative;
	background: #555;
	overflow-y: scroll;
}
.message-panel.hidden {
	display: none;
}
.message-panel pre {
	color: #fff;
}
</style>
