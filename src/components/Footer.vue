<template>
    <div id="footer">
        <div class="container-fluid p-0">
            <div
                class="content d-flex justify-content-between align-items-center"
                :class="authState ? 'internal' : 'public'"
            >
                <div>@OneOffice 2018</div>
                <div>Privacy | Security | Terms of Service</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        computed: {
            user_role() {
                return this.$route.name === 'dashboard' ? 'internal' : 'public'
            },
            ...mapState([
                'login'
            ]),
            authState() {
                return this.login.token === 'Test Login' ? true : false
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #footer {
        .container-fluid {
            .content.public {
                background: $gray-200;
                font-size: 8px;
                height: 3rem;
                color: $black;
                padding-left: 45px !important;
                padding-right: 45px !important;
            }
            .content.internal {
                background: $blue;
                font-size: 8px;
                height: 3rem;
                color: $white;
                padding-left: 45px !important;
                padding-right: 45px !important;
            }
        }
    }
</style>
