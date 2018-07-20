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
					v-for="component in components" :key="component.id"
					v-if="component.name === 'rtv-core-action' && component.id !== 'logOut'"
					@click="childState[component.id] = true">
					<keep-alive>
						<RTVCoreComponentProxy :name="component.name" :data="$copyObject(component.data)"/>
					</keep-alive>
				</div>
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
	<div
		v-for="component in components"
		:key="component.id"
		v-if="component.name ==='rtv-core-action' && component.id !== 'logOut'">
		<keep-alive>
			<RTVCoreComponentProxy
				v-if="childState[component.id]"
				:name="'rtv-core-modal-' + component.id"
				:data="{ class: 'modal-child', props: { handleClose: () => { childState[component.id] = false } }}"/>
		</keep-alive>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreModalSettings',
	data: function () {
		return {
			childState: {
				organization: false,
				contact: false,
				employee: false,
				userAccount: false,
				item: false
			}
		};
	},
	props: {
		handleClose: {
			type: Function,
			default: () => {}
		},
		components: {
			type: Array,
			default: () => []
		}
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
