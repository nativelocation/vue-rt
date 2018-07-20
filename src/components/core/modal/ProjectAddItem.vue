<template>
<div class="container-fluid h-100 p-0 m-0">
	<ModalHeader :title="title" :handleClose="handleClose" :handleHelp="handleHelp"/>
	<div class="additem-body px-4 py-2">
		<div class="d-flex flex-wrap">
			<div class="mt-2">
				<div class="add-item mx-4 mb-4">
					<div class="d-flex flex-wrap align-items-center">
						<div class="add-item-space d-flex flex-column mr-5">
							<label class="add-item-title m-0">*Project:</label>
							<div class="add-item-input">
								<!-- <v-select
									id="vueselect"
									v-model="project"
									:options="projectOptions"
									label="value"
									class="border-none add-item-input">
									<template slot="option" slot-scope="option">
										<span class="vueselect-item">{{ option.value }}</span>
									</template>
								</v-select> -->
							</div>
						</div>
						<div class="d-flex flex-wrap align-items-center mt-2 mr-5">
							<button
								class="add-item-smidspace add-item-btn mr-3 d-flex align-items-center justify-content-center"
								@click="findItem">
								Find Item Number
							</button>
							<div @click="findItemPlus">
								<i class="material-icons add_plus_btn mb-3">add</i>
							</div>
						</div>
					</div>
					<div class="d-flex flex-wrap align-items-center">
						<div class="add-item-space d-flex flex-column mr-5">
							<label class="add-item-title m-0">*Item Number:</label>
							<input
								class="add-item-input px-2"
								v-model="itemNumber"
								placeholder="Item Number"/>
						</div>
						<div class="add-item-midspace d-flex flex-column mr-5">
							<label class="add-item-title m-0">*Units:</label>
							<input
								class="add-item-input px-2"
								v-model="units"
								placeholder="Units"/>
						</div>
					</div>
					<div class="d-flex flex-wrap align-items-center">
						<div class="add-item-space d-flex flex-column mr-5">
							<label class="add-item-title m-0">*Description:</label>
							<input
								class="add-item-input px-2"
								v-model="description"/>
						</div>
						<div class="add-item-midspace d-flex flex-column mr-5">
							<label class="add-item-title m-0">*Line Number:</label>
							<input
								class="add-item-input px-2"
								v-model="lineNumber"/>
						</div>
					</div>
					<div class="d-flex flex-wrap align-items-center">
						<div class="add-item-space d-flex flex-column mr-5">
							<label class="add-item-title m-0">*Quanity:</label>
							<input
								class="add-item-input px-2"
								v-model="quanity"/>
						</div>
						<div class="add-item-midspace d-flex flex-column mr-5">
							<label class="add-item-title m-0">*Unit Price:</label>
							<input
								class="add-item-input px-2"
								v-model="unitPrice"/>
						</div>
					</div>
					<div class="d-flex flex-wrap align-items-center">
						<div class="add-item-space d-flex flex-column mr-5">
							<label class="add-item-title m-0">Plan Quanity:</label>
							<input
								type="checkbox"
								class="add-item-input px-2"
								v-model="planQuanity"/>
						</div>
						<div class="add-item-midspace d-flex flex-column mr-5">
							<label class="add-item-title m-0">*Base Bid/Alternate:</label>
							<div class="add-item-input">
								<!-- <v-select
									id="vueselect"
									v-model="bidAlternate"
									:options="bidAlternateOptions"
									label="value"
									class="border-none add-item-input">
									<template slot="option" slot-scope="option">
										<span class="vueselect-item">{{ option.value }}</span>
									</template>
								</v-select> -->
							</div>
						</div>
					</div>
					<div class="d-flex flex-wrap align-items-center">
						<div class="add-item-space d-flex flex-column mr-5">
							<label class="add-item-title m-0">Notes:</label>
							<input class="add-item-input px-2" v-model="notes"/>
						</div>
						<div class="add-item-midspace d-flex flex-column mr-5">
							<label class="add-item-title m-0">Total Price:</label>
							<input class="add-item-input px-2" v-model="totalPrice"/>
						</div>
					</div>
					<div class="d-flex flex-wrap align-items-center">
						<div class="add-item-widespace d-flex flex-column mr-5">
							<label class="add-item-title m-0">Extended Description</label>
							<textarea class="add-item-input"></textarea>
						</div>
					</div>
				</div>
				<div class="d-flex flex-column mx-4 mb-5">
					<label class="add-item-title m-0">Funding Information:</label>
					<div class="d-flex align-items-center">
						<input type="radio" class="add-item-input px-2"/>
						<span class="mx-2">Don't change any funding information at this time</span>
					</div>
					<div class="d-flex align-items-center">
						<input type="radio" class="add-item-input px-2"/>
						<span class="mx-2">Remove all funding information for this item</span>
					</div>
					<div class="d-flex align-items-center">
						<input type="radio" class="add-item-input px-2"/>
						<span class="mx-2">Match total quantity with split quantities</span>
					</div>
					<div class="d-flex align-items-center">
						<input type="radio" class="add-item-input px-2"/>
						<span class="mx-2">Over write quantity with split quantities</span>
					</div>
				</div>
				<div class="add-item-control mx-4 mt-4">
					<button class="add-item-btn mr-4" @click="addItem">Add Item</button>
					<button class="close-btn" @click="cancelItem">Cancel</button>
				</div>
			</div>
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
	data: () => {
		return {
			itemNumber: '',
			units: '',
			description: '',
			lineNumber: '',
			quanity: '',
			unitPrice: '',
			notes: '',
			totalPrice: '',
			planQuanity: false,
			searhcNumber: '',
			searchDescription: '',
			us_metric: '',
			origin: '',
			searchItemModule: false,
			searchResultModule: false,
			searchResultItemModule: false,
			price: '',
			project: '',
			bidAlternate: '',

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
		findItem () {
			this.searchItemModule = true;
		},
		findItemPlus () {
		},
		searchClick () {
			this.searchResultModule = true;
		},
		searchItemClick () {
			this.searchResultItemModule = true;
		},
		searchClose () {
		},
		setPrice () {
		},
		clearPrice () {
		},
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
	computed: {
		projectOptions () {
			return [
				{
					value: 'Add New'
				},
				{
					value: 'ProjectA'
				},
				{
					value: 'ProjectB'
				}
			];
		},
		bidAlternateOptions () {
			return [
				{
					value: 'Base Bid'
				}
			];
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
#addItem {
	.additem-body {
		height: calc( 100% - 120px );
		background: white;
		overflow-y: auto;
		.add-item {
			.table-header-public {
				background: $blue;
				color: $white;
				border: none;
			}
			.table-body {
				border: none;
			}
			.border-class {
				border: 1px solid $gray-600;
			}
			.search-result-table {
				max-height: 160px;
				overflow-y: scroll;
			}
			.search-result-item {
				max-height: 160px;
				overflow-y: scroll;
			}
			.add-item-space {
				width: 258px;
				margin-bottom: 16px;
			}
			.add-item-smidspace {
				width: 117px;
				margin-bottom: 16px;
			}
			.add-item-midspace {
				width: 151px;
				margin-bottom: 16px;
			}
			.add-item-widespace {
				width: 457px;
				margin-bottom: 16px;
			}
			.add_plus_btn {
				font-size: 18px;
				background: $blue;
				color: $white;
			}
			.add-item-title {
				font-size: 10px;
				font-family: arial;
				color: $black;
			}
			.add-item-input {
				font-size: 14px;
				font-family: arial;
				color: $black;
				background: $gray-200;
				width: 100%;
				border: 0;
			}
		}
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
		#vueselect {
			.dropdown-toggle {
				font-size: 12px;
				.clear {
					display: none;
				}
				input {
					font-size: 12px;
					height: 23px;
					width: 50% !important;
				}
				.selected-tag {
					height: 23px;
					margin: 0;
					display: flex;
					align-items: center;
				}
				.open-indicator {
					bottom: -2px;
				}
			}
			.vueselect-item {
				font-size: 12px;
			}
		}
	}
}
</style>
