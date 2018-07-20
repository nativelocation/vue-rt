<template>
<div class="container-fluid h-100 p-0 m-0">
	<ModalHeader :title="title" :handleClose="handleClose"/>
	<div class="advancedSearch-modal-body">
		<div class="d-flex flex-wrap col-lg-12 p-0">
			<div class="col-lg-3 px-2">
				<label class="filter-title">Contract Number</label>
				<div class="search-modal-input mb-4">
					<input v-model="contract_number" class="w-100 border-0 py-0 px-2 m-0"/>
				</div>
			</div>
			<div class="col-lg-3 px-2">
				<label class="filter-title">Category</label>
				<div class="search-modal-input mb-4">
					<input class="w-100 border-0 py-0 px-2 m-0"/>
				</div>
			</div>
		</div>
		<div class="d-flex flex-wrap col-lg-12 p-0">
			<div class="d-flex flex-wrap align-items-center col-lg-3 px-0">
				<div class="col-md-6 p-0 px-2">
					<label class="filter-title">Sub-Category</label>
					<div class="search-modal-input mb-4">
						<input class="w-100 border-0 py-0 px-2 m-0" />
					</div>
				</div>
				<div class="d-flex flex-column col-md-6 p-0 px-2">
					<label class="filter-title">Start Date:</label>
					<vue-datepicker-local v-model="startTime" :local="local" class="mb-4"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center col-lg-3 px-0">
				<div class="d-flex flex-column col-md-6 p-0 px-2">
					<label class="filter-title">Completion Date:</label>
					<vue-datepicker-local v-model="endTime" :local="local" class="mb-4"/>
				</div>
				<div class="d-flex align-items-center col-md-6 p-2">
					<i class="material-icons" @click="searchClick">search</i>
					<i class="material-icons" @click="searchClose">close</i>
				</div>
			</div>
		</div>
		<label
			:class="rowsDataResult.length > 0 ? '' : 'd-none'"
			class="search-result-title pb-3">
			Search Result
		</label>
		<b-table
			:items="rowData"
			:fields="columns"
			class="border-0 m-0"
			:class="rowsDataResult.length > 0 ? '' : 'd-none'">
		</b-table>
	</div>
	<Footer />
</div>
</template>

<script>
import ModalHeader from '@/components/core/modal/ModalHeader.vue';
import Footer from '@/components/core/Footer.vue';
import VueDatepickerLocal from 'vue-datepicker-local';
import _ from 'lodash';

export default {
	data: function () {
		return {
			filter: {
				name: 'Filter',
				field: 'contractNo',
				placeholder: 'Contract No',
				options: [
					{
						label: 'All',
						value: 1
					},
					{
						label: 'Volvo',
						value: 2
					},
					{
						label: 'Mercedes',
						value: 3
					},
					{
						label: 'Audi',
						value: 4
					},
					{
						label: 'Saab',
						value: 5
					}
				],
				style: {
					width: 177,
					height: 17,
					fontSize: 10,
					color: '#B3B3B3',
					background: '#DBDBDB'
				}
			},
			columns: [
				{
					key: 'contractNo',
					label: 'Contact No.',
					style: {
						color: '#003CFF'
					},
					thClass: 'table-header-internal',
					tdClass: 'table-body'
				},
				{
					key: 'projectId',
					label: 'Project ID',
					style: {
						color: 'black'
					},
					thClass: 'table-header-internal',
					tdClass: 'table-body'
				},
				{
					key: 'projectNo',
					label: 'Project No.',
					style: {
						color: 'black'
					},
					thClass: 'table-header-internal',
					tdClass: 'table-body'
				},
				{
					key: 'description',
					label: 'Description',
					style: {
						color: 'black'
					},
					thClass: 'table-header-internal',
					tdClass: 'table-body'
				},
				{
					key: 'location',
					label: 'Construction Location',
					style: {
						color: 'black'
					},
					thClass: 'table-header-internal',
					tdClass: 'table-body'
				},
				{
					key: 'bidDate',
					label: 'Bid Date',
					style: {
						color: 'black'
					},
					thClass: 'table-header-internal',
					tdClass: 'table-body'
				}
			],
			rows: [
				{
					contractNo: 'Contract 01',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '11/05/2017'
				},
				{
					contractNo: 'Contract 01',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '04/05/2018'
				},
				{
					contractNo: 'Contract 01',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '05/21/2017'
				},
				{
					contractNo: 'Contract 02',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '02/19/2018'
				},
				{
					contractNo: 'Contract 02',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '02/13/2018'
				},
				{
					contractNo: 'Contract 02',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '03/15/2018'
				},
				{
					contractNo: 'Contract 02',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '05/28/2018'
				},
				{
					contractNo: 'Contract 02',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '07/05/2017'
				},
				{
					contractNo: 'Contract 03',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '08/05/2017'
				},
				{
					contractNo: 'Contract 03',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '09/05/2017'
				},
				{
					contractNo: 'Contract 03',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '01/06/2018'
				},
				{
					contractNo: 'Contract 03',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '05/05/2017'
				},
				{
					contractNo: 'Contract 03',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '07/05/2017'
				},
				{
					contractNo: 'Contract 04',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '03/23/2018'
				},
				{
					contractNo: 'Contract 04',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '03/25/2018'
				},
				{
					contractNo: 'Contract 04',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '03/16/2018'
				},
				{
					contractNo: 'Contract 04',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '03/15/2018'
				},
				{
					contractNo: 'Contract 05',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '02/17/2018'
				},
				{
					contractNo: 'Contract 05',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '02/25/2018'
				},
				{
					contractNo: 'Contract 05',
					projectId: 'Project ID',
					projectNo: 'Project No.',
					description: 'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
					location: 'Lorem Ipsum',
					bidDate: '02/15/2018'
				}
			],
			selectedFilter: [],
			rangeDate: [],
			contract_number: '',
			category: '',
			sub_category: '',
			startTime: new Date('01/01/2000'),
			endTime: new Date('01/01/2000'),
			local: {
				dow: 0,
				hourTip: 'Select Hour',
				minuteTip: 'Select Minute',
				secondTip: 'Select Second',
				yearSuffix: '',
				monthsHead: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
				months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
				weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
				cancelTip: 'cancel',
				submitTip: 'confirm'
			},
			searchFlag: false,
			rowsDataResult: []
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
		searchClick () {
			this.searchFlag = true;
		},
		searchClose () {
			this.searchFlag = false;
			this.contract_number = '';
			this.category = '';
			this.sub_category = '';
		}
	},
	computed: {
		rowData () {
			const self = this;
			const rowsData = this.rows.slice();
			if (this.searchFlag) {
				_.remove(rowsData, rowData => {
					return !rowData['contractNo'].toLowerCase().includes(self.contract_number.toLowerCase());
				});
				_.remove(rowsData, rowData => {
					const date = new Date(rowData.bidDate);
					return date.getTime() < self.startTime.getTime() || date.getTime() > self.endTime.getTime();
				});
				this.rowsDataResult = rowsData.slice();
			};
			this.searchFlag = false;
			return this.rowsDataResult;
		}
	},
	components: {
		ModalHeader,
		Footer,
		VueDatepickerLocal
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
.advancedSearch-modal-body {
	padding: 30px 50px;
	height: calc( 100% - 120px );
	background: white;
	.datepicker {
		input {
			height: 19px;
			background: $gray-200;
		}
	}
	.filter-title {
		font-size: 10px;
		font-family: arial;
	}
	.search-modal-input {
		input {
			background: $gray-200;
		}
	}
	.search-result-title {
		font-size: 12px;
		font-family: cabin;
	}
	.table-header-internal {
		height: 22px;
		background: $blue;
		border: solid 1px $gray-600;
		color: $white;
		padding: 0;
		padding-left: 5px;
		font-size: 12px;
		font-family: arial;
		font-weight: 100;
	}
	.table-body {
		height: 22px;
		background: $white;
		border: 0;
		color: $black;
		padding: 0;
		padding-left: 5px;
		font-size: 12px;
		font-family: arial;
		font-weight: 100;
	}
}
</style>
