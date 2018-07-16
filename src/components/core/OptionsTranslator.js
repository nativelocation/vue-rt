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
					props: {},
					on: {}
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
					componentData.data = {
						props: {
							id: 'lookup' + this.id,
							list: this.list
						}
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
			}
			return {props: componentData};
		},
		parseTextAreaOptions (textAreaData) {
			textAreaData.name = 'b-form-textarea';
			textAreaData.data.props.rows = 3;
			textAreaData.data.on.input = (event) => {
				// set vuex store variable or emit event back up to parent
				// not sure which is prefered at the moment
				console.log(event);
			};
		},
		async getLookupData (href, method, body) {
			const resp = await this.$fetchJSON(href, method, body);
			this.list = resp.data.map((ele) => {
				const list = {
					returnValue: ele.id,
					disabled: !ele.valid
				};
				for (let prop in ele) {
					if (ele.hasOwnProperty(prop) && prop !== 'valid' && prop !== 'id') {
						list.filterValue = ele[prop];
						list.text = ele[prop];
					}
				}
				return list;
			});
		}
	}
};
