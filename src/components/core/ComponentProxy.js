export default {
	name: 'RTVCoreComponentProxy',
	data: function () {
		return {
			routes: {
				rtv: {
					core: (component) => import(
						/* webpackChunkName: "core" */
						/* webpackExclude: /\View.vue/ */
						/* webpackInclude: /\.vue$/ */
						/* webpackMode: "lazy-once" */
						`@/components/core/${component}`
					)
				}
			},
			filename: '',
			currentImport: null
		};
	},
	computed: {
		parsedName: function () {
			return this.name.split('-');
		}
	},
	props: {
		name: {
			type: String,
			requried: true
		},
		data: {
			type: Object,
			default: {}
		}
	},
	render: function (createElem) {
		return createElem(this.resolveComponent(), this.data);
	},
	methods: {
		resolveComponent () {
			// so far only dynamically loading internal components
			if (this.parsedName[0] !== 'rtv') return this.name;

			let imp = this.routes;
			let filename = [];

			this.parsedName.forEach((ele) => {
				if (typeof imp !== 'function') {
					imp = imp[ele];
				} else {
					filename.push(ele);
				}
			});

			if (filename.length > 0) {
				this.filename = filename.reduce((accum, ele) => {
					return accum + ele[0].toUpperCase() + ele.slice(1);
				}, '');
			}

			this.currentImport = imp;

			return this.importComponent;
		},
		// for some reason can't use anonymous function
		// since it causes an infinite loop.
		importComponent () {
			return this.currentImport(this.filename);
		}
	}

};
