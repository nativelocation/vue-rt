<template>
<div>
	<b-modal title="Please Login In" v-model="showLogin" hide-footer>
		<b-container fluid>
			<b-form-row>
				<label>Email:&nbsp;</label>
				<b-form-input v-model="email" name="email"></b-form-input>
			</b-form-row>
			<b-form-row class="row">
				<label>Password:&nbsp;</label>
				<b-form-input type="password" v-model="pw" @keypress.native="submitLogin" name="pw"></b-form-input>
			</b-form-row>
			<b-form-row class="row">
				<b-link :to="'/core/forgetpass'">
					Forget Password
				</b-link>
			</b-form-row>
			<b-button-group class="row">
				<b-btn variant="primary" @click="postLogin">log in</b-btn>
			</b-button-group>
		</b-container>
	</b-modal>
</div>
</template>
<script>
export default {
	name: 'RTVCoreLogin',
	created: function () {
		this.getCSRF();
	},
	data: function () {
		return {
			showLogin: true,
			email: null,
			pw: null,
			csrf: null
		};
	},
	props: {
		redirect: {
			type: String,
			default: '/'
		}
	},
	methods: {
		async getCSRF () {
			this.csrf = (await this.$fetchJSON('/api/csrfp')).data.token;
		},
		submitLogin (event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				this.postLogin();
			}
		},
		async postLogin () {
			// output message when messaging system is worked out
			if (this.csrf === null) return;
			const json = {
				email: this.email,
				password: this.pw,
				csrfp: this.csrf
			};
			this.$store.commit('setLoading', true);
			await this.$fetchJSON('/api/auth/login', 'POST', json);
			this.$store.commit('setLoading', false);
			this.$router.push(this.redirect);
		}
	}
};
</script>
<style>
</style>
