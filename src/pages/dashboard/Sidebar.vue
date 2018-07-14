<template>
    <div id="sidebar">
        <div class="container-fluid">
            <div class="row">
                <nav
                    class="sidebar py-0"
                    :class="sidebarDir ? 'small-sidebar' : ''"
                >
                    <ul class="sidebar-menu-items-container p-0">
                        <li
                            class="d-flex justify-content-end align-items-center sidebar-menu-item"
                            :class="sidebarDir ? 'justify-content-center' : ''"
                            @click="sidebarDirection"
                        >
                            <i
                                class="material-icons chevron_left"
                                :class="!sidebarDir ? 'd-blcok' : 'd-none'"
                            >
                                chevron_left
                            </i>
                            <i
                                class="material-icons chevron_right"
                                :class="sidebarDir ? 'd-block' : 'd-none'"
                            >
                                chevron_right
                            </i>
                        </li>
                        <li
                            class="sidebar-menu-item"
                            :class="$route.name==='profile' ? 'sidebar-menu-item-bg' : ''"
                        >
                            <router-link
                                to="/dashboard/profile"
                                class="route-text"
                            >
                                <div
                                    class="d-flex align-items-center item-container"
                                    :class="sidebarDir ? 'justify-content-center' : ''"
                                >
                                    <i
                                        class="material-icons"
                                        :class="$route.name==='profile' ? 'item-font-blue' : 'item-font-white'"
                                    >
                                        home
                                    </i>
                                    <label
                                        v-if="!sidebarDir"
                                        class="pl-4 m-0 item-font"
                                        :class="$route.name==='profile' ? 'item-font-blue' : 'item-font-white'"
                                    >
                                        My account
                                    </label>
                                </div>
                            </router-link>
                        </li>
                        <li
                            class="sidebar-menu-item"
                            :class="$route.name==='security' ? 'sidebar-menu-item-bg' : ''"
                        >
                            <router-link
                                to="/dashboard/security"
                                class="route-text"
                            >
                                <div
                                    class="d-flex align-items-center item-container"
                                    :class="sidebarDir ? 'justify-content-center' : ''"
                                >
                                    <i
                                        class="material-icons"
                                        :class="$route.name==='security' ? 'item-font-blue' : 'item-font-white'"
                                    >
                                        verified_user
                                    </i>
                                    <label
                                        v-if="!sidebarDir"
                                        class="pl-4 m-0 item-font"
                                        :class="$route.name==='security' ? 'item-font-blue' : 'item-font-white'"
                                    >
                                        Secuity & privacy
                                    </label>
                                </div>
                            </router-link>
                        </li>
                        <li
                            class="sidebar-menu-item"
                            :class="$route.name==='setting' ? 'sidebar-menu-item-bg' : ''"
                        >
                            <router-link
                                to="/dashboard/setting"
                                class="route-text"
                            >
                                <div
                                    class="d-flex align-items-center item-container"
                                    :class="sidebarDir ? 'justify-content-center' : ''"
                                >
                                    <i
                                        class="material-icons"
                                        :class="$route.name==='setting' ? 'item-font-blue' : 'item-font-white'"
                                    >
                                        settings
                                    </i>
                                    <label
                                        v-if="!sidebarDir"
                                        class="pl-4 m-0 item-font"
                                        :class="$route.name==='setting' ? 'item-font-blue' : 'item-font-white'"
                                    >
                                        Settings
                                    </label>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <main class="dashboard-main">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                sidebarDir: false
            }
        },
        methods: {
            sidebarDirection() {
                this.sidebarDir = !this.sidebarDir
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #sidebar {
        .container-fluid {
            .sidebar {
                width: 204px;
                height: calc( 100vh - 120px );
                background: $blue;
                .sidebar-menu-items-container {
                    list-style: none;
                    .sidebar-menu-item {
                        height: 44px;
                        padding-left: 18px;
                        padding-right: 18px;
                        color: $white;
                        font-size: 16px;
                        .route-text,
                        .route-text.hover {
                            color: $black;
                            text-decoration: none;
                        }
                        .item-container {
                            height: 44px;
                        }
                        .item-font-blue {
                            color: $blue;
                        }
                        .item-font-white {
                            color: $white;
                        }
                        .item-font {
                            font-size: 14px;
                            font-family: cabin;
                            font-weight: 100;
                        }
                    }
                    .sidebar-menu-item-bg {
                        background: $gray-200;
                    }
                }
            }
            .small-sidebar {
                width: 72px;
            }
            .dashboard-main {
                flex: 1;
            }
            @media screen and (max-width: 576px) {
                .sidebar {
                    width: 72px !important;
                }
                .item-font {
                    display: none;
                }
                .item-container {
                    justify-content: center;
                }
                .chevron_left {
                    display: none !important;
                }
                .chevron_right {
                    display: block !important;
                }
                .sidebar-menu-item {
                    justify-content: center !important;
                }
            }
        }
    }
</style>
