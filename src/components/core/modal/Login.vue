<template>
<div id="dashboard-login">
	<div class="d-flex justify-content-center align-items-center">
		<div class="login-modal-container d-flex justify-content-center">
			<div class="login-modal">
				<label class="login-modal-title">One Office</label>
				<b-form-row class="mb-4">
					<label class="m-0">Username</label>
					<b-form-input v-model="email" name="email" class="login-modal-username border-0 py-0 px-2 m-0"></b-form-input>
				</b-form-row>
				<b-form-row>
					<label class="m-0">Password</label>
					<b-form-input
						type="password"
						v-model="pw" @keypress.native="submitLogin"
						name="pw"
						class="login-modal-password border-0 py-0 px-2 m-0"/>
				</b-form-row>
				<div class="mt-3 d-flex align-items-center justify-content-between">
					<b-link :to="'/core/forgetpass'" class="lost-password">Lost your password?</b-link>
					<div class="login-modal-btn px-2" @click="postLogin">Log In</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
// import store from '../../store/index';
export default {
	name: 'RTVCoreModalLogin',
	data: function () {
		return {
			email: null,
			pw: null
		};
	},
	props: {
		handleClose: {
			type: Function,
			default: () => {}
		}
	},
	methods: {
		async getCSRF () {
			return this.$fetchJSON('/api/csrfp');
		},
		submitLogin (event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				this.postLogin();
			}
		},
		async postLogin () {
			const csrf = (await this.getCSRF()).data.token;
			// output message when messaging system is worked out
			if (csrf === null) return;
			const json = {
				email: this.email,
				password: this.pw,
				csrfp: csrf
			};
			this.$store.commit('setLoading', true);
			await this.$fetchJSON('/api/auth/login', 'POST', json);
			this.$store.commit('setLoading', false);
			this.$router.push(this.redirect);
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
.login-modal-container {
	width: 100%;
	.login-modal {
		width: 100%;
		display: flex;
		flex-direction: column;
		font-size: 14px;
		font-family: arial;
		.login-modal-password,
		.login-modal-username {
			border-radius: 0;
		}
		.login-modal-title {
			font-size: 24px;
			font-weight: 100;
			font-family: cabin;
		}
		input {
			background: $gray-200;
			width: 100%;
			height: 32px;
			font-size: 14px;
			font-family: arial;
		}
		.login-modal-btn {
			background: $blue;
			color: $white;
			font-size: 14px;
			font-family: cabin;
			font-weight: 100;
		}
	}
}
</style>
