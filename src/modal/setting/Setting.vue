<template>
    <div class="setting-dropdown border text-left">
        <div class="d-flex w-100 col-sm-12 p-0">
            <div class="d-flex flex-wrap setting-dropdown-left">
                <div class="col-sm-6 pr-4">
                    <div class="mb-3">Hennepin County</div>
                    <div class="mb-3">Your County</div>
                </div>
                <div class="col-sm-6 pl-4">
                    <div
                        class="mouse-hover mb-3"
                        @click="openOrgnaizationModal"
                    >
                        New Orgnaization
                    </div>
                    <div
                        class="mouse-hover mb-3"
                        @click="openContactModal"
                    >
                        New Contact
                    </div>
                    <div class="mouse-hover mb-3">New Employee</div>
                    <div class="mouse-hover mb-3">New User Account</div>
                    <div class="mouse-hover mb-3">New Item</div>
                </div>
            </div>
            <div class="setting-dropdown-right">
                <div class="col-sm-12 pl-4">
                    <div class="mb-3 font-weight-bold">John Doe</div>
                    <div
                        class="mb-3"
                        @click="close"
                    >
                        <router-link
                            to="/dashboard/profile"
                            class="mouse-hover route-text"
                        >
                            My Account
                        </router-link>
                    </div>
                    <div class="mouse-hover mb-3">Settings</div>
                    <div class="mouse-hover mb-3">Sign Out</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                orgnaizationModalShow: false
            }
        },
        props: {
            close: {
                type: Function,
                default: () => {}
            },
            handleOpenOrgnaizationModal: {
                type: Function,
                default: () => {}
            },
            handleOpenContactModal: {
                type: Function,
                default: () => {}
            }
        },
        methods: {
            openOrgnaizationModal() {
                this.close()
                this.handleOpenOrgnaizationModal()
            },
            openContactModal() {
                this.close()
                this.handleOpenContactModal()
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #settingMenu {
        .setting-dropdown {
            position: absolute;
            top: 72px;
            right: 90px;
            width: 674px;
            z-index: 100;
            font-family: arial;
            font-size: 14px;
            .mouse-hover {
                cursor: pointer;
            }
            .route-text,
            .route-text.hover {
                color: $black;
                text-decoration: none;
            }
            .setting-dropdown-left {
                flex: 10;
                background: $white;
                padding: 2rem 45px;
            }
            .setting-dropdown-right {
                flex: 3;
                background: $gray-200;
                padding: 2rem 45px;
            }
        }
    }
</style>
