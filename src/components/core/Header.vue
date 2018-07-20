<template>
<div id="header">
	<div class="container-fluid p-0 m-0">
		<div
			v-if="$store.state.menuItems.name === 'mainmenu'"
			class="menu-bar px-3 d-flex justify-content-between align-items-center"
			:class="$store.state.menuItems.role === 'authenticated' ? 'internal' : 'public'"
		>
			<div class="icon-menu-title d-flex justify-content-around align-items-center">
				<div class="site-title">
					<router-link class="text-logo" to="/" exact>OneOffice</router-link>
					<span class="ml-3 mr-2">|</span>
					Hennepin Co
				</div>
			</div>
			<b-navbar toggleable="md" class="navbar-custom p-0">
				<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav justified>
						<b-nav-item
							v-for="(item, index) in $store.state.menuItems.menus"
							:key="item.label">
							<div class="menu-title d-flex align-items-center">
								<b-nav-item v-if="typeof item.href !== 'undefined'" :to="item.href">
									{{ item.label }}
								</b-nav-item>
								<b-nav-item-dropdown
									v-else
									:text="item.label">
									<b-dropdown-item
										v-for="subItem in item.sub"
										:key="subItem.label"
										:to="subItem.href"
										:disabled="subItem.disabled">
										{{ subItem.label }}
									</b-dropdown-item>
								</b-nav-item-dropdown>
								<span v-if="index !== $store.state.menuItems.menus.length - 1" class="menu-seperate mx-2">|</span>
							</div>
						</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
		<div
			v-else
			class="menu-bar pr-3 d-flex justify-content-between align-items-center" :class="$store.state.menuItems.role === 'authenticated' ? 'internal' : 'dashboard-public'">
			<div class="icon-menu-title d-flex justify-content-around align-items-center">
				<div class="site-title d-flex align-items-center">
					<i class="material-icons dashboard-menu" @click="mainMenu=true">apps</i>
					<router-link class="text-logo-dash pl-3" to="/">OneOffice</router-link>
					<div class="text-seperator ml-3"></div>
					<div class="text-header-des pl-3">
						Hennepin Co
					</div>
				</div>
			</div>
			<b-navbar toggleable="md" class="navbar-custom p-0">
				<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav justified :class="$store.state.menuItems.role === 'authenticated' ? 'internal' : 'dashboard-public'">
						<b-nav-item
							v-for="menu in $store.state.menuItems.menus"
							:key="menu.id">
							<div
								v-if="typeof menu.label !== 'undefined'"
								class="menu-title d-flex align-items-center pl-3">
								<div @click="modalState[menu.id]=true" class="login_btn d-flex justify-content-center align-items-center">
									<i class="material-icons md-light mr-1">{{ menu.iconName }}</i>
									<div>{{menu.label}}</div>
								</div>
							</div>
							<div
								v-else
								class="menu-title d-flex justify-content-center align-items-center">
								<div @click="modalState[menu.id]=true" class="feature-btn d-flex justify-content-center align-items-center" :class="modalState[menu.id] ? 'feature-btn-hover' : ''">
									<div class="feature-icon d-flex justify-content-center align-items-center rounded-circle">
										<i class="material-icons p-1">{{ menu.iconName }}</i>
									</div>
								</div>
							</div>
						</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
		<b-modal v-if="$store.state.menuItems.role === 'authenticated' && mainMenu" v-model="mainMenu" id="mainMenu">
			<MainMenu/>
		</b-modal>
		<b-modal
			v-for="menu in $store.state.menuItems.menus"
			:key="menu.id"
			v-if="modalState[menu.id]"
			v-model="modalState[menu.id]"
			:id="menu.id">
			<keep-alive>
				<RTVCoreComponentProxy :name="menu.name" :data="menu.data ? $copyObject(menu.data) : {}"/>
			</keep-alive>
		</b-modal>
	</div>
</div>
</template>

<script>
import MainMenu from '@/components/core/modal/MainMenu';
export default {
	name: 'RTVCoreHeader',
	data: function () {
		return {
			modalState: {
				settingsModal: false,
				helpModal: false,
				addModal: false,
				searchModal: false,
				loginModal: false
			},
			mainMenu: false
		};
	},
	components: {
		MainMenu
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#header {
	.container-fluid {
		.text-logo, .text-logo.hover {
			color: $black;
			text-decoration: none;
			cursor: pointer;
		}
		.text-logo-dash, .text-logo-dash.hover {
			color: $white;
			text-decoration: none;
			cursor: pointer;
		}
		.menu-bar.public {
			background: $gray-200;
		}
		.menu-bar.internal {
			background: $black;
		}
		.menu-bar {
			height: 72px;
			.navbar-custom {
				background: $gray-200;
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
				.menu-seperate {
					color: $black;
				}
				.dropdown-toggle:after {
					display: none;
				}
				.dropdown-menu {
					background: $gray-200;
					.dropdown-item {
						color: black;
						font-family: cabin;
						font-size: 20px;
						font-weight: 100;
						&:hover, &:focus {
						   background: $gray-200;
						}
					}
					div {
						background: $gray-200;
						border-radius: 0;
						border: none;
						font-size: 14px;
						font-family: arial;
						top: 18px !important;
						border-top: solid 1px #d0d0d0;
						margin-top: 0;
						margin-bottom: 0;
						padding-top: 0;
						padding-bottom: 0;
						a {
							background: $gray-200;
							font-size: 14px;
						}
					}
				}
			}
		}
		.text-seperator {
			width: 0;
			height: 45px;
			border: 0.06rem solid $white;
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
		.dashboard-public {
			background: $gray-600;
		}
		.internal {
			background: $black;
		}
		.menu-bar {
			.navbar-custom {
				// background: $gray-200;
			}
			.menu-title {
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
		#searchModal,
		#helpModal,
		#settingsModal,
		#addModal {
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
		#searchModal,
		#helpModal,
		#settingsModal,
		#addModal {
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
		#loginModal {
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
