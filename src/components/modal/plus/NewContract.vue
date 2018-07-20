
<template>
<div class="container-fluid h-100 p-0 m-0">
	<ModalHeader
		:title="title"
		:handleClose="handleClose"
		:handleHelp="handleHelp"/>
	<div class="employee-modal-body px-4 py-2">
		<div class="employee-skema d-flex align-items-center mx-4 mt-2 mb-4">
			<div
				v-if="stage === 0"
				class="d-flex justify-content-center align-items-center"
				:class="stage === 0 ? 'ready-stage' : 'finish-stage'">
				1
			</div>
			<div
				v-if="stage > 0"
				class="finish-stage d-flex justify-content-center align-items-center">
				<i class="material-icons">check</i>
			</div>
			<div
				class="stage-connect"
				:class="stage === 0 ? 'stage-connect-ready' : 'stage-connect-finish'"/>
			<div
				v-if="stage !== 2"
				class="d-flex justify-content-center align-items-center"
				:class="stage === 1 ? 'ready-stage' : 'mid-stage'">
				2
			</div>
			<div
				v-if="stage > 1"
				class="finish-stage d-flex justify-content-center align-items-center">
				<i class="material-icons">check</i>
			</div>
			<div
				class="stage-connect"
				:class="stage <= 1 ? 'stage-connect-ready' : 'stage-connect-finish'"/>
			<div
				class="d-flex justify-content-center align-items-center"
				:class="stage === 2 ? 'ready-stage' : 'mid-stage'">
				3
			</div>
		</div>
		<div
			v-if="stage === 0"
			class="employee-info mx-4 mt-2 mb-4">
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center mr-5">
				<div class="employee-info-midspace d-flex flex-column mr-4">
					<label class="employee-info-title m-0">Start Date:</label>
					<input class="employee-info-input px-2" v-model="startDate"/>
				</div>
				<div class="employee-info-midspace d-flex flex-column">
					<label class="employee-info-title m-0">Completion Date:</label>
					<input class="employee-info-input px-2" v-model="completionDate"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Group/Team:</label>
					<input class="employee-info-input px-2" v-model="groupTeam"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Managers:</label>
					<input class="employee-info-input px-2" v-model="managers"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Notification:</label>
					<input class="employee-info-input px-2" v-model="notification"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Engineer:</label>
					<input class="employee-info-input px-2" v-model="engineer"/>
				</div>
			</div>
			<b-table :items="rows" :fields="columns" border class="border-0 my-3">
				<template slot="minimum" slot-scope="row">
					<div class="contract-table-select-container">
						<select class="contract-table-select">
							<option value="volvo">---</option>
							<option
								v-for="(value, index) in proList"
								:key="index"
								:value="value">
								{{value}}
							</option>
						</select>
					</div>
				</template>
				<template slot="edit" slot-scope="row">
					<div
						class="d-flex algin-items-center justify-content-center"
						@click="deleteProjec(row.item, row.index, $event.target)">
						<i class="material-icons contract-edit">delete</i>
					</div>
				</template>
			</b-table>
		</div>
		<div v-if="stage === 1" class="employee-info mx-4 mt-2 mb-4">
			<div class="contract-type">
				<div class="contract-type-header pl-1">Content Type</div>
				<div class="contract-type-content px-1">
					<div
						v-for="(item, index) in contractType"
						:key="index"
						class="contract-type-item d-flex align-items-center pl-1">
						<label class="contract-type-item-title m-0">{{item.title}}</label>
						<div class="contract-type-item-select my-1">
							<select class="contract-type-item-select border-0">
								<option
									v-for="(sItem, sIndex) in item.content"
									:key="sIndex"
									:value="sItem">
									{{sItem}}
								</option>
							</select>
						</div>
					</div>
				</div>
				<div
					v-for="(item, index) in contractCheck"
					:key="index"
					class="contract-check-item d-flex align-items-center pl-1">
					<input type="checkbox" :name="item.title" :value="item.state" class="mr-2"/>
					<label class="contract-check-title m-0">{{item.title}}</label>
				</div>
			</div>
		</div>
		<div v-if="stage === 2" class="employee-info mx-4 mt-2 mb-4">
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
				<div class="employee-info-space d-flex flex-column">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
				<div class="employee-info-space d-flex flex-column">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
				<div class="employee-info-space d-flex flex-column">
					<label class="employee-info-title m-0">Contract Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Contract Number:</label>
					<textarea
						class="employee-info-input px-2"
						v-model="employeeNumber"
						col="50"
						row="10"/>
				</div>
			</div>
		</div>
		<div class="employee-info-control mx-4">
			<button class="add-employee-btn mr-4" @click="back">
				Back
			</button>
			<button class="add-employee-btn mr-4" @click="next">
				{{stage === 2 ? 'Create Contract' : 'Next'}}
			</button>
			<button class="cancel-btn" @click="cancel">
				Cancel
			</button>
		</div>
	</div>
	<ModalHelp v-if="openHelp" :close="handleCloseHelp"/>
	<Footer />
</div>
</template>

<script>
// import { mapState } from 'vuex';
import ModalHeader from '@/components/core/modal/ModalHeader.vue';
import Footer from '@/components/core/Footer.vue';
import ModalHelp from '@/components/core/modal/ModalHelp.vue';

export default {
	data: function () {
		return {
			employeeNumber: '',
			startDate: '',
			completionDate: '',
			groupTeam: '',
			managers: '',
			notification: '',
			engineer: '',
			openHelp: false,
			stage: 0
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
		back () {
			if (this.stage > 0) {
				this.stage--;
			}
		},
		next () {
			if (this.stage < 2) {
				this.stage++;
			}
		},
		cancel () {
		},
		handleHelp () {
			this.openHelp = true;
		},
		handleCloseHelp () {
			this.openHelp = false;
		},
		deleteProject (item, index, target) {
		}
	},
	computed: {
		// ...mapState([
		// 	'login'
		// ]),
		columns () {
			// const thclass = this.login.token === 'Test Login' ? 'table-header-internal table-header-public text-center' : 'table-header-public  text-center';
			const thclass = 'table-header-internal table-header-public text-center';
			return [
				{
					key: 'edit',
					label: 'Add',
					style: {
						'color': 'black',
						'text-align': 'right',
						'padding-right': '5px'
					},
					thClass: thclass,
					tdClass: 'table-body'
				},
				{
					key: 'number',
					label: 'Number',
					style: {
						'color': 'blue'
					},
					thClass: thclass,
					tdClass: 'table-body'
				},
				{
					key: 'funding',
					label: 'Funding Source Type',
					style: {
						'color': 'black'
					},
					thClass: thclass,
					tdClass: 'table-body'
				},
				{
					key: 'maximum',
					label: 'Maximum Funding Available',
					style: {
						'color': 'black'
					},
					thClass: thclass,
					tdClass: 'table-body'
				},
				{
					key: 'minimum',
					label: 'Minimum Funding Available',
					style: {
						'color': 'black'
					},
					thClass: thclass,
					tdClass: 'table-body'
				}
			];
		},
		rows () {
			return [
				{
					edit: '',
					number: 'Lorem Ipsum',
					funding: 'Lorem Ipsum',
					maximum: '000.000.0000',
					minimum: ''
				},
				{
					edit: '',
					number: 'Lorem Ipsum',
					funding: 'Lorem Ipsum',
					maximum: '000.000.0000',
					minimum: ''
				}
			];
		},
		proList () {
			return [
				'Project Template A',
				'Project Template B',
				'Project Template C',
				'Project Template D'
			];
		},
		contractType () {
			return [
				{
					title: 'Group:',
					content: [
						'Lorem lpsum',
						'Lorem lpsum',
						'Lorem lpsum'
					]
				},
				{
					title: 'Category:',
					content: [
						'Lorem lpsum',
						'Lorem lpsum',
						'Lorem lpsum'
					]
				},
				{
					title: 'Sub-Category:',
					content: [
						'Lorem lpsum',
						'Lorem lpsum',
						'Lorem lpsum'
					]
				}
			];
		},
		contractCheck () {
			return [
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: true
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
				},
				{
					title: 'Lorem ipsum dolo',
					state: false
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
.employee-modal-body {
	height: calc( 100% - 120px );
	background: white;
	overflow-y: auto;
	.employee-skema {
		.material-icons {
			color: $white;
		}
		.mid-stage {
			height: 26px;
			width: 26px;
			border: 1px solid $gray-200;
			background: $gray-200;
			color: $gray-400;
		}
		.ready-stage {
			height: 26px;
			width: 26px;
			border: 1px solid $blue;
			background: $white;
			color: $blue;
		}
		.finish-stage {
			height: 26px;
			width: 26px;
			border: 1px solid $blue;
			background: $blue;
			color: $blue;
		}
		.stage-connect-ready {
			border: 2px solid $gray-200;
			width: 250px;
			height: 0;
		}
		.stage-connect-finish {
			border: 2px solid $blue;
			width: 250px;
			height: 0;
		}
	}
	.employee-info {
		.employee-info-space {
			width: 258px;
			margin-bottom: 16px;
		}
		.employee-info-smidspace {
			width: 164px;
			margin-bottom: 16px;
		}
		.employee-info-midspace {
			width: 117px;
			margin-bottom: 16px;
		}
		.employee-info-smallspace {
			width: 70px;
			margin-bottom: 16px;
		}
		.employee-info-title {
			font-size: 10px;
			font-family: arial;
			color: $black;
		}
		.employee-info-input {
			font-size: 14px;
			font-family: arial;
			color: $black;
			background: $gray-200;
			width: 100%;
			border: 0;
		}
		.contract-table-select-container {
			color: black;
			background: #dbdbdb;
			width: calc(100% + 5px);
			margin-left: -5px;
		}
		.contract-table-select {
			font-size: 12px;
			font-family: arial;
			color: black;
			background: #dbdbdb;
			width: 100%;
			border: 0;
		}
		.contract-edit {
			font-size: 14px;
			color: $blue;
		}
		.contract-type {
			width: fit-content;
			.contract-type-header {
				font-family: cabin;
				font-size: 12px;
				font-weight: 100;
				background: $blue;
				color: $white;
			}
			.contract-type-content {
				background: $gray-400;
			}
			.contract-type-item-title {
				font-family: cabin;
				font-size: 12px;
				font-weight: 100;
				width: 80px;
			}
			.contract-type-item-select {
				width: 430px;
				background: $gray-200;
			}
			.contract-check-item {
				height: 22px;
				.contract-check-title {
					font-size: 12px;
					font-family: arial;
				}
			}
		}
	}
	.employee-info-control {
		.add-employee-btn {
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
