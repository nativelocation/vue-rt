<template>
    <div id="header" class="dashboard-header">
        <div class="container-fluid p-0 m-0">
            <div
                class="menu-bar pr-3 d-flex justify-content-between align-items-center"
                :class="authState ? 'internal' : 'public'"
            >
                <div class="icon-menu-title d-flex justify-content-around align-items-center">
                    <div class="site-title d-flex align-items-center">
                        <i
                            class="material-icons dashboard-menu"
                            @click="mainMenuDropdownState"
                        >
                            apps
                        </i>
                        <router-link
                            class="text-logo pl-3"
                            to="/"
                            exact
                        >
                            OneOffice
                        </router-link>
                        <div
                            v-if="$route.name === 'profile'"
                            class="text-seperator ml-3"
                        />
                        <div
                            v-if="$route.name === 'profile'"
                            class="text-header-des pl-3"
                        >
                            Account and Settings
                        </div>
                    </div>
                </div>
                <b-navbar toggleable="md" class="navbar-custom p-0">
                    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                    <b-collapse is-nav id="nav_collapse">
                        <b-navbar-nav justified>
                            <b-nav-item
                                v-if="authState"
                                class="position-relative"
                            >
                                <div
                                    class="menu-title d-flex justify-content-center align-items-center"
                                    :class="authState ? 'internal' : 'public'"
                                >
                                    <div
                                        @click="plusDropdownState"
                                        class="feature-btn d-flex justify-content-center align-items-center"
                                        :class="plusDropdown ? 'feature-btn-hover' : ''"
                                    >
                                        <div class="feature-icon d-flex justify-content-center align-items-center rounded-circle">
                                            <i class="material-icons p-1">add</i>
                                        </div>
                                    </div>
                                </div>
                            </b-nav-item>
                            <b-nav-item class="position-relative">
                                <div
                                    class="menu-title d-flex justify-content-center align-items-center"
                                    :class="authState ? 'internal' : 'public'"
                                >
                                    <div
                                        @click="searchDropdownState"
                                        class="feature-btn d-flex justify-content-center align-items-center"
                                        :class="searchDropdown ? 'feature-btn-hover' : ''"
                                    >
                                        <div class="feature-icon d-flex justify-content-center align-items-center rounded-circle">
                                            <i class="material-icons p-1">search</i>
                                        </div>
                                    </div>
                                </div>
                            </b-nav-item>
                            <b-nav-item
                                v-if="authState"
                                class="position-relative"
                            >
                                <div
                                    class="menu-title d-flex justify-content-center align-items-center"
                                    :class="authState ? 'internal' : 'public'"
                                >
                                    <div
                                        @click="settingDropdownState"
                                        class="feature-btn d-flex justify-content-center align-items-center"
                                        :class="settingDropdown ? 'feature-btn-hover' : ''"
                                    >
                                        <div class="feature-icon d-flex justify-content-center align-items-center rounded-circle">
                                            <i class="material-icons p-1">settings</i>
                                        </div>
                                    </div>
                                </div>
                            </b-nav-item>
                            <b-nav-item
                                v-if="authState"
                                class="position-relative"
                            >
                                <div
                                    class="menu-title d-flex justify-content-center align-items-center"
                                    :class="authState ? 'internal' : 'public'"
                                >
                                    <div
                                        @click="helpDropdownState"
                                        class="feature-btn d-flex justify-content-center align-items-center"
                                        :class="helpDropdown ? 'feature-btn-hover' : ''"
                                    >
                                            <i
                                                class="material-icons help-icon p-0"
                                                :class="helpDropdown ? 'help-icon-hover' : ''"
                                            >
                                                help
                                            </i>
                                    </div>
                                </div>
                            </b-nav-item>
                            <b-nav-item v-if="!authState">
                                <div class="menu-title d-flex align-items-center pl-3">
                                    <div
                                        @click="loginModalShow=true"
                                        class="login_btn d-flex justify-content-center align-items-center"
                                    >
                                        <i class="material-icons md-light mr-1">exit_to_app</i>
                                        <div>Log In</div>
                                    </div>
                                </div>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
           <b-modal
                v-model="plusDropdown"
                id="plushMenu"
                centered
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <Plus/>
           </b-modal>
            <b-modal
                v-model="searchDropdown"
                id="searchMenu"
                centered
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <Search
                    :handleOpenAdvancedSearchModal="handleOpenAdvancedSearchModal"
                    :handleOpenListAllModal="handleOpenListAllModal"
                />
            </b-modal>
            <b-modal
                v-model="advancedSearchModalShow"
                id="advancedSearch"
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <AdvancedSearch
                    title="Advanced Search"
                    :handleClose="handleCloseAdvancedSearchModal"
                />
            </b-modal>
            <b-modal
                v-model="listAllModalShow"
                id="listAll"
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <ListAll
                    title="List All"
                    :handleClose="handleCloseListAllModal"
                />
            </b-modal>
            <b-modal
                v-model="loginModalShow"
                id="openlogin"
                centered
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <Login :handleClose="handleCloseLoginModal"/>
            </b-modal>
            <b-modal
                v-model="settingDropdown"
                id="settingMenu"
                centered
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <Setting
                    :close="settingDropdownState"
                    :handleOpenOrgnaizationModal="handleOpenOrgnaizationModal"
                    :handleOpenContactModal="handleOpenContactModal"
                />
            </b-modal>
            <b-modal
                v-model="orgnaizationModalShow"
                id="orgnaization"
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <Orgnaization
                    title="Add New Orgnaization"
                    :handleClose="handleCloseOrgnaizationModal"
                />
            </b-modal>
            <b-modal
                v-model="contactModalShow"
                id="contact"
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <Contact
                    title="Add New Contact"
                    :handleClose="handleCloseContactModal"
                />
            </b-modal>
            <b-modal
                v-model="helpDropdown"
                id="helpMenu"
                centered
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <Help/>
            </b-modal>
            <div id="mainmenu-modal-container">
                <b-modal
                    v-model="mainMenuDropdown"
                    id="mainMenu"
                    header-text-variant="dark"
                    body-bg-variant="light"
                    body-text-variant="dark"
                >
                    <MainMenu/>
                </b-modal>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import Login from '../../modal/Login.vue'
    import Search from '../../modal/search/Search.vue'
    import ListAll from '../../modal/search/ListAll.vue'
    import AdvancedSearch from '../../modal/search/AdvancedSearch.vue'
    import Plus from '../../modal/Plus.vue'
    import Setting from '../../modal/setting/Setting.vue'
    import Orgnaization from '../../modal/setting/Orgnaization.vue'
    import Contact from '../../modal/setting/Contact.vue'
    import Help from '../../modal/Help.vue'
    import MainMenu from '../../modal/MainMenu.vue'
    export default {
        data: () => {
            return {
                advancedSearchModalShow : false,
                helpDropdown            : false,
                listAllModalShow        : false,
                loginModalShow          : false,
                mainMenuDropdown        : false,
                orgnaizationModalShow   : false,
                contactModalShow        : false,
                plusDropdown            : false,
                searchDropdown          : false,
                settingDropdown         : false
            }
        },
        methods: {
            searchDropdownState() {
                this.searchDropdown = !this.searchDropdown
            },
            settingDropdownState() {
                this.settingDropdown = !this.settingDropdown
            },
            helpDropdownState() {
                this.helpDropdown = !this.helpDropdown
            },
            plusDropdownState() {
                this.plusDropdown = !this.plusDropdown
            },
            mainMenuDropdownState() {
                if (this.login.token === 'Test Login') {
                   this.mainMenuDropdown = !this.mainMenuDropdown
                }
            },
            handleCloseLoginModal() {
                this.loginModalShow = false
            },
            handleCloseListAllModal() {
                this.listAllModalShow = false
            },
            handleCloseAdvancedSearchModal() {
                this.advancedSearchModalShow = false
            },
            handleOpenListAllModal() {
                this.listAllModalShow = true
            },
            handleOpenAdvancedSearchModal() {
                this.advancedSearchModalShow = true
            },
            handleOpenOrgnaizationModal() {
                this.orgnaizationModalShow = true
            },
            handleCloseOrgnaizationModal() {
                this.orgnaizationModalShow = false
            },
            handleOpenContactModal() {
                this.contactModalShow = true
            },
            handleCloseContactModal() {
                this.contactModalShow = false
            }
        },
        computed: {
            ...mapState([
			    'login'
            ]),
            authState() {
                return this.login.token === 'Test Login' ? true : false
            }
        },
        components: {
            Login,
            ListAll,
            AdvancedSearch,
            Plus,
            Search,
            Setting,
            Help,
            MainMenu,
            Orgnaization,
            Contact
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    .dashboard-header {
        .container-fluid {
            .text-logo, .text-logo.hover {
                color: $white;
                text-decoration: none;
                cursor: pointer;
            }
            .text-seperator {
                width: 0;
                height: 45px;
                border: 0.06rem solid $gray-200;
            }
            .text-header-des {
                font-family: arial;
                font-size: 25px;
                color: $white;
            }
            .dashboard-menu {
                font-size: 60px;
                background: $blue;
                color: $white;
                padding: 6px;
            }
            .public {
                background: $gray-600;
            }
            .internal {
                background: $black;
            }
            .menu-bar {
                height: 72px;
                .navbar-custom {
                    // background: $gray-200;
                }
                .site-title {
                    font-family: cabin;
                    font-size: 36px;
                    font-style: normal;
                    font-weight: 100;
                }
                .nav-link {
                    padding: 0 !important;
                }
                .nav-justified {
                    align-items: center;
                }
                .menu-title {
                    font-family: cabin;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 100;
                    .feature-btn {
                        height: 72px;
                        width: 72px;
                        &:hover {
                            background: $blue;
                        }
                        .help-icon {
                            background: $black;
                            color: $gray-200;
                            font-size: 48px;
                            &:hover {
                                background: $blue;
                            }
                        }
                        .help-icon-hover {
                            background: $blue;
                        }
                    }
                    .feature-btn-hover {
                        background: $blue;
                    }
                    .feature-icon {
                        background: $gray-200;
                        color: $black;
                    }
                    .material-icons {
                        font-size: 32px;
                    }
                    .login_btn {
                        background: $blue;
                        color: $white;
                        width: 124px;
                    }
                    a, a.hover {
                        color: $black;
                        text-decoration: none;
                    }
                    .toggleClass {
                        color: $gray-400 !important;
                        >a {
                            color: $gray-400 !important;
                        }
                    }
                }
            }
            #contact,
            #orgnaization,
            #advancedSearch,
            #listAll,
            #searchMenu,
            #helpMenu,
            #settingMenu,
            #plushMenu {
                .modal-dialog {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    padding: 0 !important;
                    margin: 0 !important;
                    max-width: 100% !important;
                }
                .modal-content {
                    height: 100%
                }
                .modal-header {
                    display: none;
                }
                .modal-body {
                    height: 100%;
                    padding: 0 !important;
                    font-size: 13px;
                    font-family: arial;
                    font-weight: 100;
                }
                .modal-footer {
                    display: none;
                }
            }
            #searchMenu,
            #helpMenu,
            #settingMenu,
            #plushMenu {
                .modal-dialog {
                    left: 100%;
                }
            }
            #mainMenu {
                .modal-dialog {
                    margin: 0;
                    max-width: 266px;
                    height: 100%;
                }
                .modal-header {
                    display: none;
                }
                .modal-footer {
                    display: none;
                }
                .modal-content {
                    height: calc( 100% - 48px );
                }
                .modal-body {
                    height: 100%;
                    padding: 0 !important;
                    font-size: 13px;
                    font-family: arial;
                    font-weight: 100;
                    background: $white;
                }
            }
            #mainmenu-modal-container {
                .modal-backdrop {
                    display: none;
                }
            }
            #openlogin {
                .modal-dialog {
                    justify-content: center;
                }
                .modal-content {
                    border-radius: 0;
                    width: 100%;
                }
                .modal-header {
                    display: none;
                }
                .modal-body {
                    padding: 3rem 4rem;
                    font-size: 13px;
                    font-family: arial;
                    font-weight: 100;
                }
                .modal-footer {
                    display: none;
                }
            }
        }
    }
</style>
