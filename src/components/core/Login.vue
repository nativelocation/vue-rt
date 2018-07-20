<template>
<div id="public-login">
    <div class="d-flex justify-content-center align-items-center">
        <div class="login-container d-flex justify-content-center">
            <div class="login-form">
                <label>Welcome</label>
				<b-form-row>
					<div class="login-username my-3 d-flex justify-content-center align-items-center">
						<div class="icon-container d-flex justify-content-center align-items-center">
							<i class="material-icons">person</i>
						</div>
						<b-form-input placeholder='Username' v-model="email" name="email" class="border-0 py-0 px-2 m-0"></b-form-input>
					</div>
				</b-form-row>
				<b-form-row class="row">
					<div class="login-password my-3 d-flex justify-content-center align-items-center">
						<div class="icon-container d-flex justify-content-center align-items-center">
							<i class="material-icons">lock</i>
						</div>
						<b-form-input type="password" placeholder='Password' v-model="pw" @keypress.native="submitLogin" name="pw" class="border-0 py-0 px-2 m-0"></b-form-input>
					</div>
				</b-form-row>
                <div class="mt-3 d-flex justify-content-between align-items-center">
                    <b-link :to="'/core/forgetpass'" class="lost-password">Lost your password?</b-link>
                    <div class="login-btn px-2" @click="postLogin">Log In</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
	name: 'RTVCoreLogin',
	data: function () {
		return {
			email: null,
			pw: null
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
#public-login {
    .login-title {
        background: $gray-200;
        height: 72px;
        padding: 0 4%;
        font-size: 30px;
        font-family: cabin;
        font-weight: 100;
    }
    .login-container {
        width: 432px;
        background: $gray-200;
        padding-top: 36px;
        padding-bottom: 36px;
        margin: 5rem;
        .login-form {
            width: 250px;
            text-align: center;
            display: flex;
            flex-direction: column;
            label {
                font-size: 20px;
                font-weight: 100;
                font-family: cabin;
            }
            input {
                width: calc(100% - 32px);
                height: 32px;
                font-size: 16px;
                font-family: arial;
            }
            .lost-password {
                font-size: 10px;
                font-family: arial;
                font-weight: 100;
            }
            .login-btn {
                background: $blue;
                color: $white;
                font-size: 14px;
                font-family: arial;
            }
            .login-username, .login-password {
				width: 100%;
                .icon-container {
                    background: $blue;
                    i {
                        color: $white;
                        font-size: 32px;
                    }
                }
            }
        }
    }
}
</style>
