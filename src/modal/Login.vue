<template>
    <div id="dashboard-login">
        <div class="d-flex justify-content-center align-items-center">
            <div class="login-modal-container d-flex justify-content-center">
                <div class="login-modal">
                    <label class="login-modal-title">One Office</label>
                    <label>Username</label>
                    <div class="login-modal-username mb-4">
                        <input class="border-0 py-0 px-2 m-0" />
                    </div>
                    <label>Password</label>
                    <div class="login-modal-password">
                        <input class="border-0 py-0 px-2 m-0" />
                    </div>
                    <div class="mt-3 d-flex align-items-center justify-content-between">
                        <label>Lost your password?</label>
                        <div
                            @click="login"
                            class="login-modal-btn px-2"
                        >
                            Log In
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import store from '../store/index'
    export default {
        props: {
            handleClose: {
                type: Function,
                default: () => {}
            }
        },
        methods: {
            login() {
                store.dispatch('getLogin')
                this.handleClose()
            },
            ...mapActions([
				'getLogin'
			])
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    .login-modal-container {
        width: 100%;
        .login-modal {
            width: 100%;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            font-family: arial;
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
