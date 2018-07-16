<template>
<div class="container-fluid h-100 p-0 m-0">
	<ModalHeader title="Add New Organization" :handleClose="handleClose" :handleHelp="handleHelp"
	/>
	<div class="organization-modal-body px-4 py-2">
		<div class="organization-info mx-4 mt-2 mb-4">
			<div class="organization-info-space d-flex flex-column mr-5">
				<label class="organization-info-title m-0">Business Number:</label>
				<input class="organization-info-input px-2" v-model="businessName"/>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*Client Number:</label>
					<input class="organization-info-input px-2" v-model="clientNumber"/>
				</div>
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*Organization Name:</label>
					<input class="organization-info-input px-2" v-model="organizationName"/>
				</div>
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">Organization Abbrev:</label>
					<input class="organization-info-input px-2" v-model="organizationAbbrev"/>
				</div>
			</div>
			<div class="organization-info-space d-flex flex-column mr-5">
				<label class="organization-info-title m-0">Name Prefix:</label>
				<input class="organization-info-input px-2" v-model="namePrefix"/>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*Address 1:</label>
					<input class="organization-info-input px-2" v-model="firstAddress"/>
				</div>
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*Address 2:</label>
					<input class="organization-info-input px-2" v-model="secondAddress"/>
				</div>
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">PO Box:</label>
					<input class="organization-info-input px-2" v-model="PObox"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*City:</label>
					<input class="organization-info-input px-2" v-model="city"/>
				</div>
				<div class="organization-info-space d-flex flex-wrap align-items-center mr-5">
					<div class="organization-info-midspace d-flex flex-column mr-4">
						<label class="organization-info-title m-0">*State:</label>
						<input class="organization-info-input px-2" v-model="state"/>
					</div>
					<div class="organization-info-midspace d-flex flex-column">
						<label class="organization-info-title m-0">*Zip:</label>
						<input class="organization-info-input px-2" v-model="zip"/>
					</div>
				</div>
				<div class="organization-info-space d-flex flex-column mb-0 mr-5">
					<div class="organization-info-midspace d-flex flex-column">
						<label class="organization-info-title m-0">*Country:</label>
						<input class="organization-info-input px-2" v-model="country"/>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*Phone:</label>
					<input class="organization-info-input px-2" v-model="phoneNamber"/>
				</div>
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*Fax:</label>
					<input class="organization-info-input px-2" v-model="fax"/>
				</div>
			</div>
			<div class="organization-info-space d-flex flex-wrap align-items-center mr-5">
				<div class="organization-info-smallspace d-flex flex-column mr-4">
					<label class="organization-info-title m-0">Contact:</label>
					<div class="organization-info-input">
						<select class="organization-info-input">
						</select>
					</div>
				</div>
				<div class="organization-info-smallspace d-flex flex-column mr-4">
					<label class="organization-info-title m-0">Business Rep:</label>
					<div class="organization-info-input">
						<select class="organization-info-input">
						</select>
					</div>
				</div>
				<div class="organization-info-smallspace d-flex flex-column">
					<label class="organization-info-title m-0">*Valid:</label>
					<div class="organization-info-input">
						<select class="organization-info-input">
						</select>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">Email:</label>
					<input class="organization-info-input px-2" v-model="email"/>
				</div>
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">Web Address:</label>
					<input class="organization-info-input px-2" model="webAddress"
					/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">Web User Name:</label>
					<input class="organization-info-input px-2" v-model="webUserName"
					/>
				</div>
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">Web Password:</label>
					<input class="organization-info-input px-2" v-model="webPassword"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*Account Number:</label>
					<input class="organization-info-input px-2" v-model="accountNumber"/>
				</div>
				<div class="organization-info-space d-flex flex-column mr-5">
					<label class="organization-info-title m-0">*Distric Transportation Egineer </label>
					<input class="organization-info-input px-2" v-model="dtEgineer"/>
				</div>
			</div>
		</div>
		<div class="organization-info-control mx-4">
			<button class="add-organization-btn mr-4" @click="addOrganization">
				Add Organization
			</button>
			<button class="cancel-btn" @click="cancelOrganization">
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
			businessName: '',
			clientNumber: '',
			organizationName: '',
			organizationAbbrev: '',
			namePrefix: '',
			firstAddress: '',
			secondAddress: '',
			PObox: '',
			city: '',
			state: '',
			zip: '',
			country: '',
			phoneNamber: '',
			fax: '',
			contact: '',
			businessRep: '',
			valid: '',
			email: '',
			webAddress: '',
			webUserName: '',
			webPassword: '',
			accountNumber: '',
			dtEgineer: '',

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
		addOrganization () {
		},
		cancelOrganization () {
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
.organization-modal-body {
	height: calc( 100% - 120px );
	background: white;
	overflow-y: auto;
	.organization-info {
		.organization-info-space {
			width: 258px;
			margin-bottom: 16px;
		}
		.organization-info-midspace {
			width: 117px;
			margin-bottom: 16px;
		}
		.organization-info-smallspace {
			width: 70px;
			margin-bottom: 16px;
		}
		.organization-info-title {
			font-size: 10px;
			font-family: arial;
			color: $black;
		}
		.organization-info-input {
			font-size: 14px;
			font-family: arial;
			color: $black;
			background: $gray-200;
			width: 100%;
			border: 0;
		}
	}
	.organization-info-control {
		.add-organization-btn {
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
