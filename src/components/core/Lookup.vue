<template>
	<div>
		<b-form-input
			:disabled="disabled"
			:id="id"
			:value="inputValue"
			@focus.native="onPopup"
			@input="validatedFilter">
		</b-form-input>
		<b-popover
			:target="id"
			:triggers="trigger">
			<b-list-group :flush="true">
				<b-list-group-item
					v-for="(item, index) in filteredList"
					@click="validatedOnItemClicked"
					:key="index"
					v-b-tooltip="{placement: tooltipLocation, trigger: tooltipTrigger}"
					:title="item.tooltipText"
					:data-value="JSON.stringify(item.returnValue)"
					:data-filter="item.filterValue"
					:disabled="item.disabled"
					button>
					{{ item.text }}
				</b-list-group-item>
			</b-list-group>
		</b-popover>
	</div>
</template>
<script>
export default {
	name: 'RTVCoreLookup',
	data: function () {
		return {
			inputValue: this.value,
			filteredList: JSON.parse(JSON.stringify(this.list)),
			validatedFilter: this.filter,
			validatedOnItemClicked: this.onItemClicked,
			itemClicked: false,
			inCreated: false
		};
	},
	created: function () {
		this.inCreated = true;
		if (this.filter() === null) {
			this.validatedFilter = function (value) {
				let disabledCount = 0;
				let remainingEle = null;
				this.filteredList = this.list.filter((ele) => {
					if (ele.disabled) disabledCount++;
					let filterValue = ele.filterValue;
					if (this.caseInsensitive) {
						filterValue = filterValue.toLowerCase();
						value = value.toLowerCase();
					}
					const filter = ele.disabled || filterValue.indexOf(value) > -1;
					if (filter && !ele.disabled) remainingEle = ele;
					return filter;
				});
				if (this.filteredList.length === disabledCount + 1 && remainingEle.filterValue !== this.inputValue) {
					this.inputValue = remainingEle.filterValue;
					// don't emit the event if list item was clicked and filtering on the initial value
					if (!this.itemClicked && !this.inCreated) this.$emit('input', remainingEle.returnValue);
				}
				this.itemClicked = false;
			}.bind(this);
		}
		this.validatedFilter(this.inputValue); // filter right away
		this.inCreated = false;
		if (this.onItemClicked() === null) {
			this.validatedOnItemClicked = function (event) {
				this.itemClicked = true;
				this.$root.$emit('bv::hide::popover', this.id);
				this.inputValue = event.target.dataset.filter;
				this.$emit('input', JSON.parse(event.target.dataset.value));
			}.bind(this);
		}
	},
	mounted: function () {
		/* Can't do this in created because the popover is not kept in the DOM when not open
			and can only disable tooltips when the trigger element is in the DOM.
			Mounted is called anytime something happens to the DOM so this checks if the popover
			is ever added back and disables the tooltip if the user doesn't want tooltips
		*/
		if (!this.tooltip) this.$root.$emit('bv::disable::tooltip');
	},
	watch: {
		list: function (newList, oldList) {
			// act like in the setup phase
			this.inCreated = true;
			// update the list on new value
			this.filteredList = JSON.parse(JSON.stringify(newList));
			// Apply filter on new items
			this.validatedFilter(this.inputValue); // filter right away
			this.inCreated = false;
		}
	},
	props: {
		id: {
			type: String,
			required: true
		},
		/*
			Expect array of object where each Object can have the following properties
			{
				returnValue: Any, Required, return value of when list item is clicked
				filterValue: Any, Required, Value used to compare to the inputs value when searching, Also
					The value used in the input
				text: String, Required, text to be displayed in each list element
				disabled: Boolean or some expression that evaults to a boolean: default = false
				tooltipText: String, Text of the tooltip, Required if tooltip = true
			}

		*/
		list: {
			type: Array,
			required: true
		},
		trigger: {
			type: String,
			default: 'focus'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		value: {
			type: null, // null means accept any type
			default: ''
		},
		tooltip: {
			type: Boolean,
			default: false
		},
		// Possible values: bottom, left right top bottomleft bottomright topright top left auto
		tooltipLocation: {
			type: String,
			default: 'auto'
		},
		/* Possible Values: click, hover, focus
		 if multiple triggers wanted pass in each event comma seperated like 'hover, focus' */
		tooltipTrigger: {
			type: String,
			default: 'hover'
		},
		// Optional custom function to filter the list with first parameter of the value of the input
		filter: {
			type: Function,
			default: () => null
		},
		/* the following functions are passed the event object if other arguments are required are called wrapped your
			Optional function to be called when the popover it opened
		*/
		onPopup: {
			type: Function,
			default: () => null
		},
		// Optional function to be called when item in the list is clicked
		onItemClicked: {
			type: Function,
			default: () => null
		},
		caseInsensitive: {
			type: Boolean,
			default: false
		}

	}
};
</script>
<style>
</style>
