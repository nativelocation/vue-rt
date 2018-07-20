<template>
<div class="add-dropdown border text-left">
	<label class="add-dropdown-title">CREATE</label>
	<div class="d-flex flex-wrap">
		<div class="col-sm-4 p-0 mb-3" v-for="subComponent in subComponents" :key="subComponent.name">
			<div v-if="subComponent.type=='rtv-core-action'" @click="childState[subComponent.name]=true">
				<keep-alive>
					<RTVCoreComponentProxy :name="subComponent.type" :data="$copyObject(subComponent.data)"/>
				</keep-alive>
			</div>
			<div v-else>
				<keep-alive>
					<RTVCoreComponentProxy :name="subComponent.type" :data="$copyObject(subComponent.data)"/>
				</keep-alive>
			</div>
		</div>
	</div>
	<div v-for="subComponent in subComponents" :key="subComponent.name">
		<div v-if="subComponent.type=='rtv-core-action'">
			<keep-alive>
				<RTVCoreComponentProxy
					v-if="childState[subComponent.name]"
					:name="'rtv-core-modal-' + subComponent.name"
					:data="{ class: 'modal-child', props: { handleClose: handleClose }}"/>
			</keep-alive>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data: function () {
		return {
			childState: {
				newContract: false
			}
		};
	},
	methods: {
		handleClose () {
			this.childState.newContract = false;
		}
	},
	props: {
		subComponents: {
			type: Array,
			default: []
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
