<template>
<div class="setting-dropdown border text-left">
	<div class="d-flex w-100 col-sm-12 p-0">
		<div class="d-flex flex-wrap setting-dropdown-left">
			<div class="col-sm-6 pr-4">
				<div class="mb-3">Hennepin County</div>
				<div class="mb-3">Your County</div>
			</div>
			<div class="col-sm-6 pl-4">
				<div class="mouse-hover mb-3" @click="organizationModalShow=true">New Organization</div>
				<div class="mouse-hover mb-3" @click="contactModalShow=true">New Contact</div>
				<div class="mouse-hover mb-3" @click="employeeModalShow=true">New Employee</div>
				<div class="mouse-hover mb-3" @click="userAccountModalShow=true">New User Account</div>
				<div class="mouse-hover mb-3" @click="itemModalShow=true">New Item</div>
			</div>
		</div>
		<div class="setting-dropdown-right">
			<div class="col-sm-12 pl-4">
				<div class="mb-3 font-weight-bold">John Doe</div>
				<div class="mb-3" @click="handleClose">
					<router-link to="/dashboard/profile" class="mouse-hover route-text">My Account</router-link>
				</div>
				<div class="mouse-hover mb-3">Settings</div>
				<div class="mouse-hover mb-3">Sign Out</div>
			</div>
		</div>
	</div>
	<Organization v-if="organizationModalShow" id="setting-child" :handleClose="() => organizationModalShow = false"/>
	<Contact v-if="contactModalShow" id="setting-child" :handleClose="() => contactModalShow = false"/>
	<Employee v-if="employeeModalShow" id="setting-child" :handleClose="() => employeeModalShow = false"/>
	<Item v-if="itemModalShow" id="setting-child" :handleClose="() => itemModalShow = false"/>
	<UserAccount v-if="userAccountModalShow" id="setting-child" :handleClose="() => userAccountModalShow = false"/>
</div>
</template>

<script>
import Organization from '@/components/core/modal/settings/Organization.vue';
import Contact from '@/components/core/modal/settings/Contact.vue';
import Employee from '@/components/core/modal/settings/Employee.vue';
import Item from '@/components/core/modal/settings/Item.vue';
import UserAccount from '@/components/core/modal/settings/UserAccount.vue';
export default {
	data: function () {
		return {
			organizationModalShow: false,
			contactModalShow: false,
			employeeModalShow: false,
			userAccountModalShow: false,
			itemModalShow: false
		};
	},
	props: {
		handleClose: {
			type: Function,
			default: () => {}
		}
	},
	components: {
		Organization,
		Contact,
		Employee,
		Item,
		UserAccount
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#setting-child {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    right: 0;
}
#settingsModal {
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
