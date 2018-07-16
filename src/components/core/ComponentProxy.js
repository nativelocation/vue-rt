export default {
	name: 'RTVCoreComponentProxy',
	data: function () {
		return {
			/*
			 * Object handling dynamic import each subobject should have an import property if intended to import
			 * files from the directory. Otherwise name components like rtv-core-table will then be
			 * split on the '-' and followed down the object like routes.rtv.core and since table is not a valid property
			 * my import function will know to grab the import from the current core subobject.
			 * Also have all .vue files namedwith Pascal case as that is what I am expecting when importing the file
			 *
			 * webpack comments allow control of what is bundled
			 *
			 * If only want to include the files in the current directory do something like
			 * webpackInclude: /^.+\/components\/[^\/]+\.vue$/  which is from the very first import
			 *
			 * if want to combine some subdirectory but not all do something like
			 * webpackExclude: /\/{$directory_name}\/.*$/
			 *
			 * for example excluding a testing directory under components/core in my core import object would be
			 *
			 *  webpackExclude: /View.vue|\/testing\/.*$/, the View.vue| is only there because I am also excluding the
			 *  View.vue file from being bundled together
			 *
			 */
			routes: {
				rtv: {
					import: component => import(
						/* webpackChunkName: "rtv",
						   webpackInclude: /^.+\/components\/[^\/]+\.vue$/,
						   webpackMode: "lazy-once" */
						`@/components/${component}`
					),
					core: {
						import: component => import(
							/* webpackChunkName: "core",
							   webpackExclude: /View.vue$/,
							   webpackInclude: /\.vue$/,
							   webpackMode: "lazy-once" */
							`@/components/core/${component}`
						)
					}
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
			required: true
		},
		data: {
			type: Object,
			default: () => {}
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
				if (this.$isDefined(imp[ele])) {
					imp = imp[ele];
				} else {
					if (typeof imp !== 'function') imp = imp.import;
					// The component name prop should be Kebab case so can be split with parsedName
					// then this will grab the remaining part of the name and convert it
					// to Pascal case to match the file naming
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
