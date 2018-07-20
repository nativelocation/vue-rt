<template>
<div class="add-dropdown border text-left">
	<label class="add-dropdown-title">CREATE</label>
	<div class="d-flex flex-wrap">
		<div class="col-sm-4 p-0 mb-3" v-for="component in components" :key="component.id">
			<div v-if="component.name=='rtv-core-action'" @click="childState[component.id]=true">
				<keep-alive>
					<RTVCoreComponentProxy :name="component.name" :data="$copyObject(component.data)"/>
				</keep-alive>
			</div>
			<div v-else>
				<keep-alive>
					<RTVCoreComponentProxy :name="component.name" :data="$copyObject(component.data)"/>
				</keep-alive>
			</div>
		</div>
	</div>
	<div v-for="component in components" :key="component.id">
		<div v-if="component.name=='rtv-core-action'">
			<keep-alive>
				<RTVCoreComponentProxy
					v-if="childState[component.id]"
					:name="'rtv-core-modal-' + component.id"
					:data="{ class: 'modal-child', props: { handleClose: handleClose }}"/>
			</keep-alive>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreModalAdd',
	data: function () {
		return {
			childState: {
				contract: false
			}
		};
	},
	methods: {
		handleClose () {
			this.childState.contract = false;
		}
	},
	props: {
		components: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#addModal {
	.add-dropdown {
		position: absolute;
		top: 72px;
		right: 232px;
		width: 640px;
		background: $white;
		z-index: 100;
		padding: 2rem 45px;
		font-family: arial;
		font-size: 14px;
		.text-logo, .text-logo.hover {
			color: $black;
			text-decoration: none;
			cursor: pointer;
		}
		.add-dropdown-title {
			display: block;
			font-family: cabin;
			font-size: 16px;
			margin-bottom: 28px;
		}
	}
}
</style>
