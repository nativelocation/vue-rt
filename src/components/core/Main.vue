<template>
<div>
	<header v-if="header !== null" class="main-header">
		{{ header }}
	</header>
	<main class="main-content">
		<template v-for="content in items">
			<keep-alive>
				<RTVCoreComponentProxy
					:name="content.component"
					 :data="$copyObject(content.data)"/>
			</keep-alive>
		</template>
	</main>
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
		items: {
			type: Array,
			default: () => []
		}
	}
};
</script>
<style>
@import '~$styles/variables';
.main-header {
	background: $gray-200;
	height: 72px;
	padding: 0 4%;
	font-size: 30px;
	font-family: cabin;
	font-weight: 100;
}
.main-content {
	padding: 1rem 4%;
}
</style>
