<template>
<b-container id="tabs" fluid class="p-0">
	<ul class="nav tabs-bg">
		<li v-for="tab in tabs" :key="tab.name" class="nav-item tab-bg">
			<b-link :to="tab.href" class="nav-link tab-format py-1" :class="tab.active ? 'active' : ''">
				{{tab.title}}
			</b-link>
		</li>
	</ul>
</b-container>
</template>
<script>
export default {
	name: 'RTVCoreTab',
	data: function () {
		return {
			tabIndex: 0
		};
	},
	props: {
		tabs: {
			type: Array,
			defalut: () => []
		}
	}
};
</script>
<style lang="sass">
@import '~$styles/variables';
#tabs {
	.tabs-bg {
		background: $blue;
		padding-left: 15vw;
	}
	.tab-format {
		font-size: 14px;
		font-family: cabin;
		font-weight: 100;
		text-decoration: underline;
		color: $white;
	}
	.active {
		background: $white;
		color: $blue;
	}
}
</style>
