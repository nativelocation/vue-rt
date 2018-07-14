<template>
    <div>
        <div class="login-title d-flex align-items-center">
            Log In
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <div class="login-container d-flex justify-content-center">
                <div class="login-form">
                    <label>Welcome</label>
                    <div class="login-username my-3 d-flex justify-content-center align-items-center">
                        <div class="icon-container d-flex justify-content-center align-items-center">
                            <i class="material-icons">person</i>
                        </div>
                        <input placeholder='Username' class="border-0 py-0 px-2 m-0" />
                    </div>
                    <div class="login-password my-3 d-flex justify-content-center align-items-center">
                        <div class="icon-container d-flex justify-content-center align-items-center">
                            <i class="material-icons">lock</i>
                        </div>
                        <input placeholder='Password' class="border-0 py-0 px-2 m-0" />
                    </div>
                    <div class="mt-3 d-flex justify-content-between align-items-center">
                        <div class="lost-password">Lost your password?</div>
                        <div class="login-btn px-2">Log In</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="sass">
    @import '~styles/variables';
    #Home {
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
                    width: calc( 100% - 34px );
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
