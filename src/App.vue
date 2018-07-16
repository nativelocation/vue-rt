<template>
	<div id="app">
		<RTVCoreHeader :menuItems="menuItems"/>
        <div class="app-content">
			<router-view
				v-show="!$store.state.loading"
				:menuItems="menuItems"/>
			<icon
				id="loader"
				name="spinner"
				:spin="true"
				scale="4"
				v-show="$store.state.loading"/>
		</div>
		<RTVCoreFooter/>
	</div>
</template>

<script>
import RTVCoreHeader from '@/components/core/Header';
import RTVCoreFooter from '@/components/core/Footer';

export default {
	name: 'app',
	data: function () {
		return {
			menuItems: []
		};
	},
	components: {
		RTVCoreHeader,
		RTVCoreFooter
	}
};
</script>
<style lang="sass">
@import '~$styles/variables';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
html, body, #app {
	height: 100%;
}
#app {
	.app-content {
		min-height: calc( 100% - 72px );
		margin-bottom: -48px;
		padding-bottom: 48px;
	}
}
#loader {
	margin: 1em auto;
	display: block;
}
</style>
