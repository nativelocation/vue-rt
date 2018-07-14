<template>
	<div class="container-fluid max-height">
	</div>
</template>
<script>
import { fetchJSON } from '../utils.js';
export default {
	name: 'login',
	created: function () {
		document.title = 'View';
	},
	mounted: async function () {
		const resp = await fetchJSON('/view/_landing_', 'GET');
		resp.data.menu.forEach((ele) => {
			this.menuItems.push(ele);
		});
	},
	data: function () {
		return {
		};
	},
	props: ['menuItems'],
	methods: {
	}
};
</script>
<style>
</style>
