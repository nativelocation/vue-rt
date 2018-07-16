<template>
<b-container fluid>
	<template>
		<b-form-row>
			<b-col class="p-0 pt-3 text-center">
				<header v-if="header !== null" class="table-header ">{{ header }}</header>
			</b-col>
		</b-form-row>
		<b-form-row>
			<b-table
				striped
				bordered
				hover
				ref="table"
				:items="items"
				:fields="tableFields"
				:responsive="true"
				:stacked="stacked"
				id="dashboardtable">
					<template slot="HEAD_url" slot-scope="data">
						<b-link v-if="addLink !== null" class="btn btn-success btn-sm1" :to="formattedAddLink">Add Item</b-link>
					</template>
					<template slot="url" slot-scope="data">
						<b-link class="btn btn-primary btn-sm" :to="data.item.url">Details</b-link>
						<b-link class="btn btn-secondary btn-sm" :to="formattedEditLink + data.item.id" v-if="editLink !== null">Edit</b-link>
					</template>
			</b-table>
		</b-form-row>
	</template>
</b-container>
</template>
<script>
export default {
	name: 'RTVCoreTable',
	data: function () {
		return {
			perPage: 10,
			currentPage: 1,
			busy: true,
			totalRecords: null,
			tableFields: {},
			items: [],
			showForm: false,
			...this.requestData
		};
	},
	computed: {
		formattedPath: function () {
			const formatted = this.replaceUrlParams(this.path);
			// drop the var at the end
			this.path = this.path.replace(/\/{url\..*}/, '');
			return formatted;
		},
		formattedAddLink: function () {
			if (this.addLink === null) return null;
			return this.addLink.replace('api', 'form');
		},
		formattedEditLink: function () {
			if (this.editLink === null) return null;
			return this.editLink.replace('api', 'form') + '/';
		},
		formattedBody: function () {
			if (typeof this.body === 'undefined') return undefined;
			if (typeof this.body.where === 'undefined') return this.body;
			// make local copy
			const body = this.$copyObject(this.body);
			for (let prop in body.where) {
				if (body.where.hasOwnProperty(prop)) {
					if (typeof body.where[prop] === 'string') {
						body.where[prop] = this.replaceUrlParams(this.body.where[prop]);
					} else if (Array.isArray(body.where[prop])) {
						body.where[prop].map((ele) => {
							if (typeof body.where[prop] === 'string') {
								return this.replaceUrlParams(this.body.where[prop]);
							}
							return ele;
						});
					}
				}
			}
			return body;
		}
	},
	created: async function () {
		const params = [this.formattedPath];
		const optionsPromise = this.$fetchJSON(this.path, 'OPTIONS');
		if (typeof this.method !== 'undefined' && this.method !== 'GET') {
			params.push(this.method, this.formattedBody);
		}
		const dataPromise = this.$fetchJSON(...params);

		const optionsResponse = await optionsPromise;
		const databaseFields = this.$parseSchemaObject(optionsResponse.get.returns, optionsResponse).data.items;

		let attributes = null;
		if (this.$isDefined(this.formattedBody) &&
			this.$isDefined(this.formattedBody.attributes)) {
			attributes = this.formattedBody.attributes;
		}
		this.tableFields = this.createTableFields(databaseFields, attributes);

		const resp = await dataPromise;
		if (!Array.isArray(resp.data)) resp.data = [resp.data];
		this.items = resp.data;

		if (this.href !== null) {
			this.items = resp.data.map((ele) => {
				ele.url = this.href.replace('{id}', ele.id);
				return ele;
			});
			this.tableFields = {actions: {key: 'url', label: 'Actions'},
				...this.tableFields};
		}
	},
	props: {
		requestData: {
			type: Object,
			validator: (obj) => {
				let ok = typeof obj.path !== 'undefined';
				if (obj.method === 'SEARCH') {
					ok = typeof obj.body !== 'undefined' && ok;
				}
				return ok;
			}
		},
		addLink: {
			type: String,
			default: null
		},
		editLink: {
			type: String,
			default: null
		},
		href: {
			type: String,
			default: null
		},
		header: {
			type: String,
			default: null
		},
		stacked: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		createTableFields (fields, attributes = null) {
			const tableFields = {};
			for (let prop in fields) {
				if (fields.hasOwnProperty(prop)) {
					// don't bother adding column if not selecting it
					if (attributes !== null && !attributes.includes(prop)) continue;
					if (this.$isDefined(fields[prop]['#dataurl'])) {
						this.$fetchJSON(fields[prop]['#dataurl'].href.replace(/\/{.*}/, ''), 'OPTIONS').then((resp) => {
							console.log(resp);
						}).catch((err) => {
							console.error(err);
						});
						continue;
					}
					tableFields[prop] = {
						label: fields[prop].label,
						key: prop
					};
				}
			}
			return tableFields;
		},
		replaceUrlParams (str) {
			const match = str.match(/.*{url\.(.*)}.*/);
			if (match !== null) {
				return str.replace('{url.' + match[1] + '}', this.$store.state.route.query[match[1]]);
			}
			return str;
		}
	}
};
</script>
<style lang="sass">
@import '~$styles/variables';
.table-header {
	background: $gray-200;
	height: 1.5em;
	font-size: 30px;
	font-family: cabin;
	font-weight: 100;
}
</style>
