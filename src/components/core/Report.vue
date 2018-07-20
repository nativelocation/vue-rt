<template>
<div class="d-inline-block dashboard-report default-report">
	<div class="report-content-bgcolor">
		<div class="report-header" :style="header.styles">{{header.title}}</div>
		<div class="report-content"></div>
		<div class="report-footer">
			<div class="mt-2 mb-3 d-flex flex-column align-items-center">
				<div class="seperator w-25 mb-2"></div>
				<div :style="footer.styles">{{footer.title}}</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreReport',
	props: {
		header: {
			type: Object
		},
		footer: {
			type: Object
		},
		requestData: {
			type: Object
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
.dashboard-report {
	.report-content-bgcolor {
		background: $white;
		padding: 1rem 22px;
		min-height: 100px;
		min-width: 150px;
		position: relative;
	}
	.report-header {
		font-size: 16px;
		font-family: cabin;
		font-weight: 300px;
	}
	.report-footer {
		font-size: 10px;
		font-family: arial;
	}
	.report-content {
		font-size: 12px;
		font-family: Old Standard TT;
		margin-bottom: 40px;
	}
	.report-footer {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
	}
	.seperator {
		border: solid 1px $gray-600;
	}
}
</style>
