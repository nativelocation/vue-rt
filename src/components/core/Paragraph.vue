<template>
<div>
	<header v-if="header !== null" class="paragraph-header">
		{{ header }}
	</header>
	<p class="paragraph-content">
		{{ content }}
	</p>
</div>
</template>
<script>
export default {
	name: 'RTVCoreMain',
	props: {
		header: {
			Type: String,
			default: null
		},
		content: {
			type: String,
			default: ''
		}
	}
};
</script>
<style>
.paragraph-header {
	font-size: 25px;
	font-family: cabin;
	font-weight: 100;
	margin-bottom: 12px;
}
.paragraph-content {
	font-size: 16px;
	font-family: arial;
	margin-bottom: 2rem;
}
</style>
