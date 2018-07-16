<template>
<div id="header">
	<div class="container-fluid p-0 m-0">
		<div
			class="menu-bar px-3 d-flex justify-content-between align-items-center"
			:class="user_role"
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
						<b-nav-item class="p-0">
							<div class="menu-title d-flex align-items-center">
								<router-link
									to="/"
									exact
									active-class="toggleClass"
								>
									Home
								</router-link>
								<span class="menu-seperate mx-2">|</span>
							</div>
						</b-nav-item>
						<b-nav-item
							v-for="(item, index) in menuItems"
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
								<span v-if="index !== menuItems.length - 1"class="menu-seperate mx-2">|</span>
							</div>
						</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreHeader',
	props: {
		title: {
			type: String,
			default: ''
		},
		menuItems: {
			type: Array
		}
	},
	computed: {
		user_role () {
			return 'public';
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/fonts';
@import '~$styles/variables';
#header {
	.container-fluid {
		.text-logo, .text-logo.hover {
			color: $black;
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
	}
}
</style>
