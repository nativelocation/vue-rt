<template>
<div id="filter" class="pr-2 pl-2" :style="styles">
	<div class="h-100 d-flex align-items-center">
		<label :style="textStyles">{{label}}</label>
		<Dropdown
			v-if="cType==='dropbox'"
			multiple
			:changed="changed"/>
		<input v-else-if="cType==='text'" v-model="filterValue" :style="tagStyles"/>
	</div>
</div>
</template>

<script type="text/x-template">
import _ from 'lodash';
import Dropdown from './Dropdown.vue';

export default {
	name: 'RTVCoreFilter',
	data: () => {
		return {
			filterValue: ''
		};
	},
	props: {
		label: {
			type: String,
			default: ''
		},
		cType: {
			type: String,
			default: ''
		},
		styles: {
			type: Object,
			default: ''
		},
		textStyles: {
			type: Object,
			default: () => []
		},
		tagStyles: {
			type: Object,
			default: null
		},
		filter: {
			type: Object,
			default: () => {}
		},
		rows: {
			type: Array,
			default: () => []
		},
		changed: {
			type: Function,
			default: () => {}
		},
		itemChanged: {
			type: Function,
			default: () => {}
		},
		customSelectedText: {
			type: Function,
			default: () => {}
		}
	},
	components: {
		Dropdown
	},
	computed: {
		filterOptions() {
			const self = this;
			const filters = [{ label: 'All', selected: true }];
			return filters.concat(_.map(_.uniqBy(self.rows, self.filter.field), item => {
				return { label : item[self.filter.field] };
			}));
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#filter {
	height: 25px;
	background: $gray-400;
	div {
		label {
			margin-bottom: 0px;
		}
		.search-filter {
			height: 17px;
			width: 177px;
			background: $gray-200;
			.search-filter-icon {
				color: $gray-400;
				font-size: 10px;
			}
			.search-filter-input {
				height: 17px;
				width: 177px;
				font-size: 10px;
				color: $gray-400;
				background: $gray-200;
				border: initial;
			}
		}
	}
}
</style>
