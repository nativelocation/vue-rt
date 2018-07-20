<template>
<div id="banner" class="top-banner justify-content-around align-items-center d-flex">
	<div class="category-icons d-flex justify-content-around align-items-center">
		<div class="w-100 d-flex justify-content-around flex-wrap">
			<template v-for="subComponent in subComponents">
				<keep-alive :key="subComponent.type">
					<RTVCoreComponentProxy :name="subComponent.type" :data="$copyObject(subComponent.data)"/>
				</keep-alive>
			</template>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreBanner',
	props: {
		subComponents: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="sass">
.home-banner-image {
	background: url('~@/assets/images/home_banner.jpg');
	background-size: 100%;
}
#banner.top-banner {
	width: 100%;
	position: relative;
	height: 30.7rem;
	overflow: hidden;
	padding: 6em 0;
}
.category-icons {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	padding-right: 10%;
	padding-left: 10%;
	.category {
		max-width: 262px;
		min-width: 195px;
		.fix-planning {
			width: 100%;
			background: url('~@/assets/images/planning.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding-top: 100%;
			&:hover {
				background: url('~@/assets/images/planning-transparent.png');
				width: 100%;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding-top: 100%;
				cursor: pointer;
			}
		}
		.planning {
			width: 100%;
			background: url('~@/assets/images/planning-transparent.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding-top: 100%;
		}
		.fix-bidding {
			width: 100%;
			background: url('~@/assets/images/bidding.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding-top: 100%;
			&:hover {
				background: url('~@/assets/images/bidding-transparent.png');
				width: 100%;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding-top: 100%;
				cursor: pointer;
			}
		}
		.bidding {
			width: 100%;
			background: url('~@/assets/images/bidding-transparent.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding-top: 100%;
		}
		.fix-construction {
			width: 100%;
			background: url('~@/assets/images/construction.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding-top: 100%;
			&:hover {
				background: url('~@/assets/images/construction-transparent.png');
				width: 100%;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding-top: 100%;
				cursor: pointer;
			}
		}
		.construction {
			width: 100%;
			background: url('~@/assets/images/construction-transparent.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding-top: 100%;
		}
		.fix-reports {
			width: 100%;
			background: url('~@/assets/images/reports.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding-top: 100%;
			&:hover {
				background: url('~@/assets/images/reports-transparent.png');
				width: 100%;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding-top: 100%;
				cursor: pointer;
			}
		}
		.reports {
			width: 100%;
			background: url('~@/assets/images/reports-transparent.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding-top: 100%;
		}
	}
}
</style>
