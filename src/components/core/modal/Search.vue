<template>
<div class="search-dropdown border text-left">
	<label class="search-dropdown-title">Search Contracts</label>
	<div class="search-dropdown-filter d-flex align-items-center">
		<input class="search-dropdown-input" placeholder="Search"/>
		<i class="material-icons search-dropdown-icons">search</i>
	</div>
	<div class="search-dropdown-option d-flex justify-content-between">
		<div @click="handleOpenAdvancedSearchModal">Advanced Search</div>
		<div @click="handleOpenListAllModal">List All</div>
	</div>
	<label class="search-dropdown-list">Recent Contracts</label>
</div>
</template>

<script>
export default {
	data: function () {
		return {
			listAllModalShow: false,
			advancedSearchModalShow: false
		};
	},
	props: {
		handleOpenListAllModal: {
			type: Function,
			default: () => {}
		},
		handleOpenAdvancedSearchModal: {
			type: Function,
			default: () => {}
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#searchModal {
	.search-dropdown {
		position: absolute;
		top: 72px;
		right: 160px;
		width: 674px;
		height: 300px;
		background: $white;
		z-index: 100;
		padding: 2rem 45px;
		.search-dropdown-title {
			font-family: cabin;
			font-size: 14px;
			margin-bottom: 28px;
		}
		.search-dropdown-filter {
			width: 100%;
			.search-dropdown-input {
				width: 100%;
				height: 33px;
				font-family: arial;
				font-size: 12px;
				padding-left: 10px;
				background: $gray-200;
				color: $gray-400;
				border: 0;
			}
			.search-dropdown-icons {
				width: 33px;
				padding: 5px;
				height: 33px;
				background: $blue;
				color: $white;
			}
		}
		.search-dropdown-option {
			font-size: 12px;
			font-family: arial;
			width: 30%;
			margin-bottom: 30px;
			>div {
				color: $color-blue;
				text-decoration: underline;
			}
		}
		.search-dropdown-list {
			font-size: 15px;
			font-family: arial;
			margin-bottom: 2rem;
		}
	}
}
</style>
