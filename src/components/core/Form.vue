<template>
<b-container fluid>
	<b-form-row v-for="componentOption in componentOptions" :key="componentOption.label" class="mt-2">
		<b-col cols="1">
			<label>{{componentOption.label}}:</label>
		</b-col>
		<b-col cols="*">
			<OptionsTranslator :config="componentOption"/>
		</b-col>
	</b-form-row>
	<b-form-row class="mt-2">
		<b-col offset="1" cols="*">
			<b-btn class="btn-success" @click="submitForm">Save</b-btn>
		</b-col>
		<b-col cols="*">
			<b-link class="btn btn-secondary  ml-3" :to="backLink">Back</b-link>
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
			schema: null,
			parsedSchema: null,
			componentOptions: []
		};
	},
	created: async function () {
		this.apiPath = this.$store.state.route.path.replace('form', 'api');
		this.schema = await this.$fetchJSON(this.apiPath, 'OPTIONS');
		if (this.$isDefined(this.schema.post)) {
			this.parsedObject = this.$parseSchemaObject(this.$copyObject(this.schema.post.expects), this.schema);
		} else if (this.$isDefined(this.schema.put)) {
			this.parsedObject = this.$parseSchemaObject(this.$copyObject(this.schema.put.expects), this.schema);
		}
		if (this.parsedObject !== null) {
			this.componentOptions = this.parseOptions(this.parsedObject);
			this.$store.commit('setFormSaveObject', this.createFormSaveObject(this.parsedObject));
			this.$store.commit('setFormValidationObject', this.parsedObject);
		}
	},
	props: {
		backLink: {
			type: String,
			default: '/'
		}
	},
	methods: {
		parseOptions (options, parent = '') {
			let components = [];
			for (let prop in options.properties) {
				// checking if sub property is an object or literal
				if (prop !== 'required' && options.properties[prop].type === 'object') {
					components = components.concat(this.parseOptions(options.properties[prop], parent !== '' ? parent + '.' + prop : prop));
				// not sure if we event want to tell the components about the required properties
				// or if we want to just do all validation with the json schema
				} else if (prop === 'required') {
				} else {
					options.properties[prop].saveObjectProperty = parent !== '' ? parent + '.' + prop : prop;
					components.push(options.properties[prop]);
				}
			}
			return components;
		},
		createFormSaveObject (parsedObject) {
			let saveObject = {};
			for (let prop in parsedObject.properties) {
				// checking if sub property is an object or literal
				// if object parse it
				if (prop !== 'required' && parsedObject.properties[prop].type === 'object') {
					saveObject[prop] = this.createFormSaveObject(parsedObject.properties[prop]);
				// don't care aboure required props in saveObject validObject will handle that
				} else if (prop !== 'required') {
					saveObject[prop] = null;
				}
			}
			return saveObject;
		},
		submitForm () {
			const json = this.$filterUnchangedData(this.$store.state.formSaveObject, this.$store.state.formBaseObject);
			console.log(this.parsedObject);
			if (this.$ajv.validate(this.parsedObject, json)) {
				this.$fetchJSON(this.apiPath, 'POST', json);
			}
		}
	}
};
</script>
<style>
</style>
