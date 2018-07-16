<template>
<div class="container-fluid h-100 p-0 m-0">
	<ModalHeader title="Add New Employee" :handleClose="handleClose" :handleHelp="handleHelp"/>
	<div class="employee-modal-body px-4 py-2">
		<div class="employee-info mx-4 mt-2 mb-4">
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">*Employee Number:</label>
					<input class="employee-info-input px-2" v-model="employeeNumber"/>
				</div>
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Accounting Employee Number:</label>
					<input class="employee-info-input px-2" v-model="accountEmployeeNumber"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">*First Name:</label>
					<input class="employee-info-input px-2" v-model="firstName"/>
				</div>
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">*Last Name:</label>
					<input class="employee-info-input px-2" v-model="lastName"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="employee-info-smallspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">Middle Initial:</label>
						<input class="employee-info-input px-2" v-model="middleInitial"/>
					</div>
					<div class="employee-info-smallspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">Prefix:</label>
						<input class="employee-info-input px-2" v-model="prefix"/>
					</div>
					<div class="employee-info-smallspace d-flex flex-column">
						<label class="employee-info-title m-0">Suffix:</label>
						<input class="employee-info-input px-2" v-model="stuffix"/>
					</div>
				</div>
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="employee-info-midspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">*Display String:</label>
						<input class="employee-info-input px-2" v-model="displayString"/>
					</div>
					<div class="employee-info-midspace d-flex flex-column">
						<label class="employee-info-title m-0">Title:</label>
						<input class="employee-info-input px-2" v-model="employeeTitle"/>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="employee-info-smidspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">Office Phone:</label>
						<input class="employee-info-input px-2" v-model="officePhoneNumber"/>
					</div>
					<div class="employee-info-smallspace d-flex flex-column">
						<label class="employee-info-title m-0">Extension:</label>
						<input class="employee-info-input px-2" v-model="extension"/>
					</div>
				</div>
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Fax:</label>
					<input class="employee-info-input px-2" v-model="fax"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Cell Phone:</label>
					<input class="employee-info-input px-2" v-model="cellPhone"/>
				</div>
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Pager:</label>
					<input class="employee-info-input px-2" v-model="pager"/>
				</div>
				<div class="employee-info-space d-flex flex-column mr-5">
					<label class="employee-info-title m-0">Email Address:</label>
					<input class="employee-info-input px-2" v-model="emailAddress"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="employee-info-midspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">*Office:</label>
						<div class="employee-info-input">
							<select class="employee-info-input">
							</select>
						</div>
					</div>
					<div class="employee-info-midspace d-flex flex-column">
						<label class="employee-info-title m-0">*Employment Type:</label>
						<div class="employee-info-input">
							<select class="employee-info-input">
							</select>
						</div>
					</div>
				</div>
				<div class="d-flex flex-wrap align-items-center">
					<div class="employee-info-midspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">*Current Employee::</label>
						<div class="employee-info-input">
							<select class="employee-info-input">
							</select>
						</div>
					</div>
					<div class="employee-info-midspace d-flex flex-column mr-5">
						<label class="employee-info-title m-0">*Dated Employed:</label>
						<input class="employee-info-input px-2" v-model="datedEmployee"/>
					</div>
				</div>
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="employee-info-midspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">Date of Birth:</label>
						<input class="employee-info-input px-2" v-model="dateBirth"/>
					</div>
					<div class="employee-info-midspace d-flex flex-column">
						<label class="employee-info-title m-0">*Valid:</label>
						<div class="employee-info-input">
							<select class="employee-info-input">
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="employee-info-midspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">*Salary Employee:</label>
						<div class="employee-info-input">
							<select class="employee-info-input">
							</select>
						</div>
					</div>
					<div class="employee-info-midspace d-flex flex-column">
						<label class="employee-info-title m-0">Department:</label>
						<input class="employee-info-input px-2" v-model="department"/>
					</div>
				</div>
				<div class="employee-info-space d-flex flex-wrap align-items-center mr-5">
					<div class="employee-info-midspace d-flex flex-column">
						<label class="employee-info-title m-0">*Timecard User Only:</label>
						<div class="employee-info-input">
							<select class="employee-info-input">
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="employee-info-midspace d-flex flex-column mr-4">
						<label class="employee-info-title m-0">Consultant Contact:</label>
						<div class="employee-info-input">
							<select class="employee-info-input">
							</select>
						</div>
					</div>
					<div class="employee-info-midspace d-flex flex-column">
						<label class="employee-info-title m-0">Position:</label>
						<input class="employee-info-input px-2" v-model="position"/>
					</div>
				</div>
			</div>
		</div>
		<div class="employee-info-control mx-4">
			<button class="add-employee-btn mr-4" @click="addEmployee">
				Add Employee
			</button>
			<button class="cancel-btn" @click="cancelEmployee">
				Cancel
			</button>
		</div>
	</div>
	<ModalHelp v-if="openHelp" :close="handleCloseHelp"/>
	<Footer />
</div>
</template>

<script>
import ModalHeader from '@/components/modal/ModalHeader.vue';
import Footer from '@/components/core/Footer.vue';
import ModalHelp from '@/components/modal/ModalHelp.vue';

export default {
	data: function () {
		return {
			lastName: '',
			firstName: '',
			employeeNumber: '',
			accountEmployeeNumber: '',
			middleInitial: '',
			prefix: '',
			namePrefix: '',
			stuffix: '',
			employeeTitle: '',
			displayString: '',
			officePhoneNumber: '',
			extension: '',
			fax: '',
			cellPhone: '',
			pager: '',
			emailAddress: '',
			datedEmployee: '',
			dateBirth: '',
			department: '',
			position: '',

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
		addEmployee () {
		},
		cancelEmployee () {
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
.employee-modal-body {
	height: calc( 100% - 120px );
	background: white;
	overflow-y: auto;
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
