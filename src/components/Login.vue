<template>
	<div class="container-fluid max-height">
		<div class="col d-flex justify-content-center align-items-center mt-5">
			<b-card header="Please Log In" class="text-center">
				<div class="row">
					<label>Email:&nbsp;</label>
					<b-form-input v-model="email" name="email"></b-form-input>
				</div>
				<div class="row">
					<label>Password:&nbsp;</label>
					<b-form-input type="password" v-model="password" @keypress.native="submitLogin" name="pw"></b-form-input>
				</div>
				<div class="row">
					<a href="/core/forgotpass.php">Forgot Your Password?</a>
				</div>
				<b-button-group class="row">
					<b-btn variant="primary" @click="postLogin()">log in</b-btn>
				</b-button-group>
			</b-card>
		</div>
	</div>
</template>
<script>
import { fetchJSON } from '../utils.js';
import moment from 'moment';
export default {
	name: 'login',
	created: function() {
		document.title = 'Login'
	},
	mounted: async function() {
		console.log(await fetchJSON('http://localhost:8000/dashboard/_landing_', 'GET'));
	},
	data: function() {
		return {
			email: null,
			password: null
		}
	},
	props: ['messages', 'loaded', 'alertCounter'],
	methods: {
		submitLogin(event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				this.postLogin();
			}
		},
		checkForPasswordChange() {
			return fetchJSON('/api/invoice-app/session/check-for-password-change');
		},
		async postLogin() {
			if (this.email === null || this.password === null) {
				this.messages.push({
					id: this.alertCounter,
					body: 'Please Fill in the Inputs',
					timestamp: moment().format('h:mm:ss a'),
					variant: 'warning',
					dismissible: true
				});
				this.$emit('update:alertCounter', this.alertCounter + 1);
				return;
			}
			const json = {
				email: this.email,
				password: this.password
			}
			const code = (await fetchJSON('/api/invoice-app/login', 'POST', json)).body
			if (code === 0) {
				let url = this.$route.query.redirect;
				const passwordChange = (await this.checkForPasswordChange()).body;
				if (typeof url === 'undefined') {
					url = '/';
				}
				if (passwordChange === true) {
					let queryString = '';
					if (url !== '/') queryString = '?redirect=' + url;
					this.$router.replace('/change-password' + queryString);
				} else {
					this.$emit('loggedIn');
					this.$router.replace(url);
				}
			} else {
				this.messages.push({
					id: this.alertCounter,
					body: 'Invalid Username or Password',
					timestamp: moment().format('h:mm:ss a'),
					variant: 'danger',
					dismissible: true
				});
				this.$emit('update:alertCounter', this.alertCounter + 1);
			}
		}
	}
}
</script>
<style>
</style>
