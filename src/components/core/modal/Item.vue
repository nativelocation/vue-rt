<template>
<div class="container-fluid h-100 p-0 m-0">
	<ModalHeader title="Add New Item" :handleClose="handleClose" :handleHelp="handleHelp"
	/>
	<div class="item-modal-body px-4 py-2">
		<div class="item-info mx-4 mt-2 mb-4">
			<div class="d-flex flex-wrap align-items-center">
				<div class="item-info-space d-flex flex-column mr-5">
					<label class="item-info-title m-0">*Item Number:</label>
					<input class="item-info-input px-2" v-model="itemNumber"/>
				</div>
				<div class="item-info-space d-flex flex-column">
					<label class="item-info-title m-0">*Origin:</label>
					<input class="item-info-input px-2" v-model="origin"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="item-info-space d-flex flex-column mr-5">
					<label class="item-info-title m-0">English Description:</label>
					<input class="item-info-input px-2" v-model="englishDesc"/>
				</div>
				<div class="item-info-space d-flex flex-column">
					<label class="item-info-title m-0">Shortened English Description:</label>
					<input class="item-info-input px-2" v-model="shortEnglishDesc"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="item-info-space d-flex flex-column mr-5">
					<label class="item-info-title m-0">Metric Desciption:</label>
					<input class="item-info-input px-2" v-model="metricDesc"/>
				</div>
				<div class="item-info-space d-flex flex-column">
					<label class="item-info-title m-0">Shortened Metic Description:</label>
					<input class="item-info-input px-2" v-model="shortMetricDesc"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="item-info-space d-flex flex-column mr-5">
					<label class="item-info-title m-0">English Units:</label>
					<input class="item-info-input px-2" v-model="englishUnits"/>
				</div>
				<div class="item-info-space d-flex flex-column">
					<label class="item-info-title m-0">Metric Units:</label>
					<input class="item-info-input px-2" v-model="metricUnits"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="item-info-space d-flex flex-column mr-5">
					<label class="item-info-title m-0">Category For English Desciption:</label>
					<input class="item-info-input px-2" v-model="catEnglishDesc"/>
				</div>
				<div class="item-info-space d-flex flex-column">
					<label class="item-info-title m-0">Category For Metric Description:</label>
					<input class="item-info-input px-2" v-model="catMetricDesc"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="item-info-space d-flex flex-column mr-5">
					<label class="item-info-title m-0">Construction Cost Account (2X):</label>
					<input class="item-info-input px-2" v-model="constructionCostAccount"/>
				</div>
				<div class="item-info-space d-flex flex-column">
					<label class="item-info-title m-0">Maintenance Cost Account (3X):</label>
					<input class="item-info-input px-2" v-model="maintenanceCostAccount"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center mr-5">
				<div class="item-info-midspace d-flex flex-column mr-4">
					<label class="item-info-title m-0">*Valid:</label>
					<div class="item-info-input">
						<select class="item-info-input">
						</select>
					</div>
				</div>
				<div class="item-info-midspace d-flex flex-column">
					<label class="item-info-title m-0">*Temporary:</label>
					<div class="item-info-input">
						<select class="item-info-input">
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="item-info-control mx-4">
			<button class="add-item-btn mr-4" @click="addItem">
				Add Item
			</button>
			<button class="cancel-btn" @click="cancelItem">
				Cancel
			</button>
		</div>
	</div>
	<ModalHelp v-if="openHelp" :close="handleCloseHelp"/>
	<Footer />
</div>
</template>

<script>
import ModalHeader from '@/components/core/modal/ModalHeader.vue';
import Footer from '@/components/core/Footer.vue';
import ModalHelp from '@/components/core/modal/ModalHelp.vue';

export default {
	name: 'RTVCoreModalItem',
	data: function () {
		return {
			itemNumber: '',
			origin: '',
			englishDesc: '',
			shortEnglishDesc: '',
			metricDesc: '',
			shortMetricDesc: '',
			englishUnits: '',
			metricUnits: '',
			catEnglishDesc: '',
			catMetricDesc: '',
			constructionCostAccount: '',
			maintenanceCostAccount: '',

			openHelp: false
		};
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		handleClose: {
			type: Function,
			default: () => {}
		}
	},
	methods: {
		addItem () {
		},
		cancelItem () {
		},
		handleHelp () {
			this.openHelp = true;
		},
		handleCloseHelp () {
			this.openHelp = false;
		}
	},
	components: {
		ModalHeader,
		Footer,
		ModalHelp
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
.item-modal-body {
	height: calc( 100% - 120px );
	background: white;
	overflow-y: auto;
	.item-info {
		.item-info-space {
			width: 258px;
			margin-bottom: 16px;
		}
		.item-info-midspace {
			width: 117px;
			margin-bottom: 16px;
		}
		.item-info-title {
			font-size: 10px;
			font-family: arial;
			color: $black;
		}
		.item-info-input {
			font-size: 14px;
			font-family: arial;
			color: $black;
			background: $gray-200;
			width: 100%;
			border: 0;
		}
	}
	.item-info-control {
		.add-item-btn {
			color: $white;
			background: $blue;
			font-size: 11px;
		}
		.cancel-btn {
			color: $black;
			background: $gray-200;
			font-size: 11px;
		}
	}
}
</style>
