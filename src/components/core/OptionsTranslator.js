export default {
	name: 'RTVCoreOptionsTranslator',
	created: function () {
		this.$store.commit('incrementUniqueId');
	},
	data: function () {
		return {
			list: [],
			id: this.$store.state.uniqueId
		};
	},
	props: {
		config: {
			type: Object,
			required: true
		}
	},
	render: function (createElem) {
		return createElem('RTVCoreComponentProxy', this.getComponentData());
	},
	methods: {
		getComponentData () {
			const componentData = {
				name: null,
				data: {
					class: {},
					props: {
					},
					on: {
						input: this.inputEventHandler
					}
				}
			};
			if (this.config.type === 'string') {
				if (this.config.maxLength > 100) {
					this.parseTextAreaOptions(componentData);
				} else {
					componentData.name = 'b-form-input';
					componentData.data.props.type = 'text';
				}
			} else if (this.config.type === 'integer') {
				if (this.$isDefined(this.config['#dataurl'])) {
					componentData.name = 'rtv-core-lookup';
					componentData.data.props = {
						id: 'lookup' + this.id,
						list: this.list
					};
					// only really should be get or search methods here
					const body = this.$isDefined(this.config['#dataurl'].body)
						? this.config['#dataurl'].body : {};
					const href = this.config['#dataurl'].href.replace('{id}', 'scope/formSelect');
					if (this.list.length === 0) this.getLookupData(href, this.config['#dataurl'].method, body);
				} else {
					componentData.name = 'b-form-input';
					componentData.data.props.type = 'number';
				}
			} else if (this.config.type === 'number') {
				componentData.name = 'b-form-input';
				componentData.data.props.type = 'number';
			}
			return {props: componentData};
		},
		parseTextAreaOptions (textAreaData) {
			textAreaData.name = 'textarea';
			textAreaData.data.props.rows = 3;
			textAreaData.data.class['form-control'] = true;
		},
		inputEventHandler (value) {
			// check if the event came from a native HTML element
			if (typeof value.target !== 'undefined') value = value.target.value;
			this.$store.dispatch({
				type: 'validateUserInput',
				prop: this.config.saveObjectProperty,
				value: value
			});
		},
		async getLookupData (href, method, body) {
			const resp = await this.$fetchJSON(href, method, body);
			this.list = resp.data.map((ele) => {
				const valid = typeof resp.meta.formSelectConfig[2] !== 'undefined' ? ele[resp.meta.formSelectConfig[2]] : true;
				const display = typeof resp.meta.formSelectConfig[1] !== 'undefined'
					? ele[resp.meta.formSelectConfig[1]] : ele[resp.meta.formSelectConfig[0]];
				// currently assuming filter value and display text are the same value
				return {
					returnValue: ele[resp.meta.formSelectConfig[0]],
					filterValue: display,
					text: display,
					disabled: !valid
				};
			});
		}
	}
};
