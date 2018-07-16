<template>
<div class="add-dropdown border text-left">
	<label class="add-dropdown-title">CREATE</label>
	<div class="d-flex flex-wrap">
		<div class="col-sm-4 p-0 mb-3">
			<div class="mouse-hover" @click="newContract=true">New Contract</div>
		</div>
		<div class="col-sm-5 p-0 mb-3">Ad for Bid (Long Form)</div>
		<div class="col-sm-3 p-0 mb-3">Daily Journal</div>
		<div class="col-sm-4 p-0 mb-3">New Contract Template</div>
		<div class="col-sm-5 p-0 mb-3">Ad for Bid (Short)</div>
		<div class="col-sm-3 p-0 mb-3">Transaction</div>
		<div class="col-sm-4 p-0 mb-3">Project Items</div>
		<!-- <router-link class="text-logo col-sm-4 p-0 mb-3" to="/create/project-items">
			Project Items
		</router-link> -->
		<div class="col-sm-5 p-0 mb-3">Contract Changes</div>
		<div class="col-sm-3 p-0 mb-3">Material on Hand</div>
		<div class="col-sm-4 p-0 mb-3">Funding Sources</div>
		<div class="col-sm-5 p-0 mb-3">Consultants</div>
		<div class="col-sm-3 p-0 mb-3">Encumbrance</div>
		<div class="col-sm-4 p-0 mb-3">Funding Splits</div>
		<div class="col-sm-5 p-0 mb-3">State Aid Payment Requests</div>
		<div class="col-sm-3 p-0 mb-3">Weekly Diary</div>
	</div>
	<NewContract v-if="newContract" id="add-child" :handleClose="() => newContract=false"/>
</div>
</template>

<script>
import NewContract from '@/components/modal/add/NewContract.vue';
export default {
	data: function () {
		return {
			newContract: false
		};
	},
	components: {
		NewContract
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#add-child {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    right: 0;
}
#addModal {
	.add-dropdown {
		position: absolute;
		top: 72px;
		right: 232px;
		width: 600px;
		background: $white;
		z-index: 100;
		padding: 2rem 45px;
		font-family: arial;
		font-size: 14px;
		.text-logo, .text-logo.hover {
			color: $black;
			text-decoration: none;
			cursor: pointer;
		}
		.add-dropdown-title {
			display: block;
			font-family: cabin;
			font-size: 16px;
			margin-bottom: 28px;
		}
	}
}
</style>
