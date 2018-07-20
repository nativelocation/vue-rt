<template>
<div id="dashboard">
	<div class="container-fluid p-0 m-0">
		<div class="dashboard-bg"></div>
		<div class="dashboard-content">
			<div class="mark-container">
				<img :src="getMark" />
			</div>
			<div class="reports d-flex flex-wrap m-0 p-0">
				<div class="col-lg-4 my-2" v-for="(component, index) in components" :key="index">
					<keep-alive>
						<RTVCoreComponentProxy
							:name="component.name"
							:data="component.data ? $copyObject(component.data) : {}"/>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import mark from '@/assets/images/HennepinCo.png';
export default {
	name: 'rtv-core-dashboard',
	props: {
		components: {
			type: Array
		}
	},
	computed: {
		getMark () {
			return mark;
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#dashboard {
	.container-fluid {
		.dashboard-bg {
			position: fixed;
			top: 72px;
			bottom: 48px;
			left: 0;
			width: 100vw;
			background: $gray-200;
			z-index: -1;
		}
		.dashboard-content {
			padding: 2.2rem 5.7%;
			.mark-container {
				margin-bottom: 52px;
			}
		}
	}
}
</style>
