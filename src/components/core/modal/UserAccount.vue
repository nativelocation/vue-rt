<template>
<div class="container-fluid h-100 p-0 m-0">
	<ModalHeader title="Add New User Account" :handleClose="handleClose" :handleHelp="handleHelp"
	/>
	<div class="useraccount-modal-body px-4 py-2">
		<div class="useraccount-info mx-4 mt-2 mb-4">
			<div class="d-flex flex-wrap align-items-center">
				<div class="useraccount-info-space d-flex flex-column mr-5">
					<label class="useraccount-info-title m-0">*Logon Name:</label>
					<input class="useraccount-info-input px-2" v-model="logonName"/>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="useraccount-info-midspace d-flex flex-column mr-5">
					<label class="useraccount-info-title m-0">Employee:</label>
					<div class="useraccount-info-input">
						<select class="useraccount-info-input">
						</select>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="useraccount-info-midspace d-flex flex-column mr-5">
					<label class="useraccount-info-title m-0">Client Contact:</label>
					<div class="useraccount-info-input">
						<select class="useraccount-info-input">
						</select>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="useraccount-info-midspace d-flex flex-column mr-5">
					<label class="useraccount-info-title m-0">Business Contact:</label>
					<div class="useraccount-info-input">
						<select class="useraccount-info-input">
						</select>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-center">
				<div class="useraccount-info-midspace d-flex flex-column mr-5">
					<label class="useraccount-info-title m-0">*Valid:</label>
					<div class="useraccount-info-input">
						<select class="useraccount-info-input">
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="useraccount-info-control mx-4">
			<button class="add-useraccount-btn mr-4" @click="addUserAccount">
				Add User Account
			</button>
			<button class="cancel-btn" @click="cancelUserAccount">
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
	name: 'RTVCoreModalUserAccount',
	data: function () {
		return {
			logonName: '',
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
		addUserAccount () {
		},
		cancelUserAccount () {
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
.useraccount-modal-body {
	height: calc( 100% - 120px );
	background: white;
	overflow-y: auto;
	.useraccount-info {
		.useraccount-info-space {
			width: 258px;
			margin-bottom: 16px;
		}
		.useraccount-info-midspace {
			width: 117px;
			margin-bottom: 16px;
		}
		.useraccount-info-title {
			font-size: 10px;
			font-family: arial;
			color: $black;
		}
		.useraccount-info-input {
			font-size: 14px;
			font-family: arial;
			color: $black;
			background: $gray-200;
			width: 100%;
			border: 0;
		}
	}
	.useraccount-info-control {
		.add-useraccount-btn {
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
