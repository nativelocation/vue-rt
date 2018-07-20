<template>
<div
	class="dropdown multiple"
	:style="{
		width: styleData.width + 'px',
		height: styleData.height + 'px',
		background: styleData.background,
		fontSize: styleData.fontSize + 'px'
	}">
	<div
		class="selected"
		:class="{
			showlist: isShow ? true : false
		}"
		@click="autoShow"
		:style="{
			width: styleData.width + 'px',
			height: styleData.height + 'px',
			fontSize: styleData.fontSize + 'px',
			backgroundPosition: (styleData.width - 18) + 'px, center',
			color: styleData.color
		}"
	>
		{{ selectedText }}
	</div>
	<transition name="fadeIn" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
		<div
			class="list"
			v-show="isShow"
			:style="{
				width: fixListWidth ? styleData.width + 'px' : 'auto'
			}">
			<div class="inner">
				<div
					class="item"
					v-for="(item, index) in items"
					:key="index"
					:data-title="item.label"
					:class="{
						selected: item.selected
					}">
					{{ appendIdx(item) }}
					<div>
						<input
							type="checkbox"
							:disabled="item.disabled"
							:checked="item.selected"
							@change="checkboxChanged(item)"
							:id="id(item)">
						<label :for="id(item)">{{ item.label }}</label>
					</div>
				</div>
			</div>
		</div>
	</transition>
</div>
</template>

<script>
import _ from 'lodash';
const EMPTY_FN = () => {};
let idx = 0;
export default {
	name: 'RTVCoreDropdown',
	data: () => {
		return {
			selected: [],
			isShow: false,
			items: []
		};
	},
	props: {
		options: {
			type: Array,
			default: () => []
		},
		field: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: 'Please choose'
		},
		styleData: {
			type: Object,
			default: () => ({
				height: 17,
				width: 120,
				fontSize: 10,
				color: '#B3B3B3',
				background: '#DBDBDB'
			})
		},
		fixListWidth: {
			type: Boolean,
			default: true
		},
		changed: {
			type: Function,
			default: EMPTY_FN
		},
		itemChanged: {
			type: Function,
			default: EMPTY_FN
		},
		customSelectedText: {
			type: Function,
			default: EMPTY_FN
		}
	},
	computed: {
		selectedText () {
			let text = '';
			const selectedItems = selected => selected.map(e => e.label).join(', ');
			if (this.customSelectedText !== EMPTY_FN) {
				text = this.customSelectedText(this.selected, selectedItems);
			} else {
				text = selectedItems(this.selected);
			}
			return text === '' ? this.placeholder : text;
		}
	},
	watch: {
		data: {
			immediate: true,
			handler (val) {
				this.selected = this.options.filter(d => d.selected);
				this.items = this.options.slice(0);
			}
		}
	},
	methods: {
		id (item) {
			return 'dropdown-item-' + this.field + '-' + item._idx;
		},
		appendIdx (item) {
			if (item._idx === undefined) {
				item._idx = ++idx;
			}
		},
		autoShow () {
			this.isShow = !this.isShow;
		},
		setupTitleIfNeeded () {
			// if (!this.fixListWidth) return;
		},
		autoHide (evt) {
			if (!this.$el.contains(evt.target)) {
				this.isShow = false;
			}
		},

		checkboxChanged (item) {
			if (this.selected === null) {
				this.selected = [];
			}
			const id = this.id(item);
			item.selected = document.querySelector('#' + id).checked;
			if (item.label === 'All') {
				if (item.selected) {
					this.selected = [item];
					const updatedItems = [];
					const items = this.items.slice();
					_.each(items, (item, index) => {
						const updatedItem = item;
						if (index === 0) {
							updatedItem.selected = true;
						} else {
							updatedItem.selected = false;
						}
						updatedItems.push(updatedItem);
					});
					this.items = updatedItems;
				} else {
					this.selected = [];
					const options = this.options.slice();
					_.each(options, (option, index) => {
						if (index > 0) {
							const copyItem = [];
							copyItem._idx = index;
							copyItem.label = option.label;
							copyItem.selected = true;
							this.selected.push(copyItem);
						}
					});
					const updatedItems = [];
					const items = this.items.slice();
					_.each(items, (item, index) => {
						const updatedItem = item;
						if (index > 0) {
							updatedItem.selected = true;
						}
						updatedItems.push(updatedItem);
					});
					this.items = updatedItems;
				}
			} else {
				if (!item.selected) {
					this.selected = this.selected.filter(d => d._idx !== item._idx);
					if (this.selected.length === 0) {
						this.items[0].selected = true;
						this.selected = [this.items[0]];
					}
				} else {
					this.items[0].selected = false;
					this.selected = this.selected.filter(d => d._idx !== 1);
					this.selected.push(item);
				}
			}
			if (this.itemChanged !== EMPTY_FN) {
				this.itemChanged(item);
			}
			if (this.changed !== EMPTY_FN) {
				this.changed(this.selected);
			}
		}
	},
	updated () {
		this.setupTitleIfNeeded();
	},
	mounted () {
		this.setupTitleIfNeeded();
		document.addEventListener('click', this.autoHide, false);
	},
	destroyed () {
		document.removeEventListener('click', this.autoHide, false);
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
.dropdown.multiple {
	display: inline-block;
	position: relative;
	margin-left: 9px;
	margin-right: 9px;
	.selected {
		border-radius: 3px;
		border: 1px solid #B3C1D8;
		font-size: 1.2em;
		padding: 0 20px 0 10px;
		color: #4C5565;
		cursor: pointer;
		background: url('~@/assets/svg/arrow-down.svg') no-repeat right center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.selected.showlist {
		background: url('~@/assets/svg/arrow-up.svg') no-repeat right center;
	}
	.list {
		position: absolute;
		top: 35px;
		left: 0px;
		font-size: 1.2em;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		background: #fff;
		border-radius: 3px;
		z-index: 100;
		.inner {
			padding: 5px;
			.item {
				height: 30px;
				line-height: 30px;
				cursor: pointer;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				background-position: 5px center;
				color: #7D8699;
				padding: 0 5px;
				&:hover {
					background-color: #eee;
					border-radius: 3px;
				}
				input {
					display: none;
				}
				input + label {
					display: block;
					padding-left: 23px;
					background: url('~@/assets/svg/chk.svg') no-repeat 0px center;
					vertical-align: middle;
					margin: 0;
					cursor: pointer;
				}
				input:checked + label {
					background: url('~@/assets/svg/chked.svg') no-repeat 0px center;
				}
				input:disabled + label {
					color: #ccc;
					cursor: not-allowed;
				}
			}
			.item.selected {
				background: none;
				padding: 0 5px;
				color: #7D8699;
			}
		}
	}
	.animated {
		animation-duration: 0.35s;
		animation-fill-mode: both;
	}
	.fadeIn {
		animation-name: fadeIn;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.fadeOut {
		animation-name: fadeOut;
	}
	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
}
</style>
