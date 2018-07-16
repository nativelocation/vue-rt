<template>
<b-container fluid>
	<b-form-row v-for="componentOption in componentOptions" :key="componentOption.label" @input="test">
		<b-col cols="1">
			<label>{{componentOption.label}}:</label>
		</b-col>
		<b-col cols="*">
			<OptionsTranslator :config="componentOption"/>
		</b-col>
	</b-form-row>
</b-container>
</template>
<script>
import OptionsTranslator from '@/components/core/OptionsTranslator';
export default {
	name: 'RTVCoreForm',
	components: {
		OptionsTranslator
	},
	data: function () {
		return {
			apiPath: null,
			inputs: [],
			baseObject: {},
			saveObject: {},
			schema: null,
			componentOptions: []
		};
	},
	created: async function () {
		this.apiPath = this.$store.state.route.path.replace('form', 'api');
		this.schema = await this.$fetchJSON(this.apiPath, 'OPTIONS');
		let parsedObject = null;
		if (this.$isDefined(this.schema.post)) {
			parsedObject = this.$parseSchemaObject(this.$copyObject(this.schema.post.expects), this.schema);
		} else if (this.$isDefined(this.schema.put)) {
			parsedObject = this.$parseSchemaObject(this.$copyObject(this.schema.put.expects), this.schema);
		}
		if (parsedObject !== null) this.componentOptions = this.parseOptions(parsedObject);
		this.saveObject = this.$copyObject(this.baseObject);
	},
	props: {
		backLink: {
			type: String,
			default: '/'
		}
	},
	methods: {
		test (val) {
			console.log(val);
		},
		parseOptions (options) {
			let components = [];
			for (let prop in options) {
				// checking if sub property is an object or literal
				if (prop !== 'required' && (!this.$isDefined(options[prop].type) || options[prop].type === 'object')) {
					components = components.concat(this.parseOptions(options[prop]));
				} else if (prop === 'required') {
				} else {
					components.push(options[prop]);
				}
			}
			return components;
		},
		submitForm () {
			const json = this.$filterUnchangedData(this.saveObject, this.baseObject);
			const schema = this.schema.post.expects;
			schema.definitions = this.schema.defintions;
			if (this.$ajv.validate(schema, json)) {
				this.$fetchJSON(this.apiPath, 'POST', json);
			}
		}
	}
};
</script>
<style>
</style>
