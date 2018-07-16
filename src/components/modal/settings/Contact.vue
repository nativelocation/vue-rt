<template>
<div class="container-fluid h-100 p-0 m-0">
	<ModalHeader title="Add New Contact" :handleClose="handleClose" :handleHelp="handleHelp"/>
	<div class="contact-modal-body px-4 py-2">
		<div class="contact-info mx-4 mt-2 mb-4">
			<div class="d-flex flex-wrap align-items-center">
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">*Last Number:</label>
					<input class="contact-info-input px-2" v-model="lastNumber"/>
				</div>
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">*First Name:</label>
					<input class="contact-info-input px-2" v-model="firstName"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="contact-info-smallspace d-flex flex-column mr-4">
						<label class="contact-info-title m-0">Middle Initial:</label>
						<input class="contact-info-input px-2" v-model="middleInitial"/>
					</div>
					<div class="contact-info-smallspace d-flex flex-column mr-4">
						<label class="contact-info-title m-0">Prefix:</label>
						<input class="contact-info-input px-2" v-model="prefix"/>
					</div>
					<div class="contact-info-smallspace d-flex flex-column">
						<label class="contact-info-title m-0">Suffix:</label>
						<input class="contact-info-input px-2" v-model="stuffix"/>
					</div>
				</div>
				<div class="contact-info-space d-flex flex-column mb-0 mr-5">
					<div class="contact-info-midspace d-flex flex-column">
						<label class="contact-info-title m-0">Title:</label>
						<input class="contact-info-input px-2" v-model="contactTitle"/>
					</div>
				</div>
			</div>
			<div class="contact-info-space d-flex flex-column mr-5">
				<label class="contact-info-title m-0">*Organization:</label>
				<input class="contact-info-input px-2" v-model="organization"/>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">*Address 1:</label>
					<input class="contact-info-input px-2" v-model="firstAddress"/>
				</div>
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">*Address 2:</label>
					<input class="contact-info-input px-2" v-model="secondAddress"/>
				</div>
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">PO Box:</label>
					<input class="contact-info-input px-2" v-model="PObox"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">*City:</label>
					<input class="contact-info-input px-2" v-model="city"/>
				</div>
				<div class="d-flex flex-wrap align-items-center">
					<div class="contact-info-midspace d-flex flex-column mr-4">
						<label class="contact-info-title m-0">*State:</label>
						<input class="contact-info-input px-2" v-model="state"/>
					</div>
					<div class="contact-info-midspace d-flex flex-column mr-5">
						<label class="contact-info-title m-0">*Zip:</label>
						<input class="contact-info-input px-2" v-model="zip"/>
					</div>
				</div>
				<div class="contact-info-space d-flex flex-column mb-0 mr-5">
					<div class="contact-info-midspace d-flex flex-column">
						<label class="contact-info-title m-0">*Country:</label>
						<input class="contact-info-input px-2" v-model="country"/>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="d-flex flex-wrap align-items-center mr-5">
					<div class="contact-info-smidspace d-flex flex-column mr-4">
						<label class="contact-info-title m-0">*Phone:</label>
						<input class="contact-info-input px-2" v-model="phoneNumber"/>
					</div>
					<div class="contact-info-smallspace d-flex flex-column">
						<label class="contact-info-title m-0">Extension:</label>
						<input class="contact-info-input px-2" v-model="extension"/>
					</div>
				</div>
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">Fax:</label>
					<input class="contact-info-input px-2" v-model="fax"/>
				</div>
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">Cell Phone:</label>
					<input class="contact-info-input px-2" v-model="cellPhone"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">Email:</label>
					<input class="contact-info-input px-2" v-model="email"/>
				</div>
				<div class="contact-info-space d-flex flex-column mb-0 mr-5">
					<div class="contact-info-smallspace d-flex flex-column">
						<label class="contact-info-title m-0">*Valid:</label>
						<div class="contact-info-input">
							<select class="contact-info-input">
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="contact-info-space d-flex flex-column mr-5">
				<label class="contact-info-title m-0">Home Address:</label>
				<input class="contact-info-input px-2" v-model="homeAddress"/>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="contact-info-space d-flex flex-column mr-5">
					<label class="contact-info-title m-0">Home City:</label>
					<input class="contact-info-input px-2" v-model="homeCity"/>
				</div>
				<div class="d-flex flex-wrap align-items-center">
					<div class="contact-info-midspace d-flex flex-column mr-4">
						<label class="contact-info-title m-0">Home State:</label>
						<input class="contact-info-input px-2" v-model="homeState"/>
					</div>
					<div class="contact-info-midspace d-flex flex-column mr-5">
						<label class="contact-info-title m-0">Home Zip Code:</label>
						<input class="contact-info-input px-2" v-model="homeZipCode"/>
					</div>
				</div>
			</div>
			<div class="contact-info-smallspace d-flex flex-column">
				<label class="contact-info-title m-0">Mail To:</label>
				<div class="contact-info-input">
					<select class="contact-info-input">
					</select>
				</div>
			</div>
		</div>
		<div class="contact-info-control mx-4">
			<button class="add-contact-btn mr-4" @click="addContact">
				Add Contact
			</button>
			<button class="cancel-btn" @click="cancelContact">
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
			lastNumber: '',
			firstName: '',
			middleInitial: '',
			prefix: '',
			namePrefix: '',
			stuffix: '',
			contactTitle: '',
			organization: '',
			firstAddress: '',
			secondAddress: '',
			PObox: '',
			city: '',
			state: '',
			zip: '',
			country: '',
			extension: '',
			phoneNumber: '',
			cellPhone: '',
			fax: '',
			contact: '',
			valid: '',
			email: '',
			homeAddress: '',
			homeState: '',
			homeZipCode: '',
			homeCity: '',

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
		addContact () {
		},
		cancelContact () {
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
.contact-modal-body {
	height: calc( 100% - 120px );
	background: white;
	overflow-y: auto;
	.contact-info {
		.contact-info-space {
			width: 258px;
			margin-bottom: 16px;
		}
		.contact-info-smidspace {
			width: 164px;
			margin-bottom: 16px;
		}
		.contact-info-midspace {
			width: 117px;
			margin-bottom: 16px;
		}
		.contact-info-smallspace {
			width: 70px;
			margin-bottom: 16px;
		}
		.contact-info-title {
			font-size: 10px;
			font-family: arial;
			color: $black;
		}
		.contact-info-input {
			font-size: 14px;
			font-family: arial;
			color: $black;
			background: $gray-200;
			width: 100%;
			border: 0;
		}
	}
	.contact-info-control {
		.add-contact-btn {
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
