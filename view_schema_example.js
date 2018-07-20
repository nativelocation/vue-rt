


//
// MENUS
// GET /api/menu/{name} # TODO not implemented yet
//

[
	{
		name: 'mainmenu', // The menu name to reference from a view
		role: 'public',
		// the rest of the schema is tbd based on needs of each menu
		menus: [
			{
				label: 'Home',
				href: '/'
			},
			{
				label: 'Projects',
				sub: [
					{
						label: 'Planning',
						href: '/projects/planning',
						disabled: false
					},
					{
						label: 'Bidding',
						href: '/projects/bidding',
						disabled: false
					},
					{
						label: 'Construction',
						href: '/projects/construction',
						disabled: false
					}
				]
			},
			{
				label: 'Messages',
				sub: [
					{
						label: 'New Messages',
						href: '/messages/new',
						disabled: false
					},
					{
						label: 'Bidding',
						href: '/messages/help',
						disabled: false
					}
				]
			},
			{
				label: 'Reports',
				href: '/reports'
			},
			{
				label: 'Search',
				href: '/search'
			},
			{
				label: 'Login',
				href: '/login'
			}
		]
	},
	{
		id: 'dashboardMenu', // The menu id to reference from a view
		role: 'public',
		// the rest of the schema is tbd based on needs of each menu
		menus: [
			{
				id: 'helpModal',
				name: 'rtv-modal-help',
				iconName: 'search'
			},
			{
				label: 'Log in',
				id: 'loginModal',
				name: 'rtv-modal-login',
				iconid: 'exit_to_app'
			}
		]
	},
	{
		id: 'dashboardMenu',
		role: 'authenticated',
		menus: [
			{
				name: 'rtv-header-modal',
				id: 'addModal',
				iconName: 'add',
				sub: [
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'New Contract',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Ad for Bid (Long Form)',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Daily Journal',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'New Contract Template',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Ad for Bid (Short)',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Transaction',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Project Items',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Contract Changes',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Material on Hand',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Funding Sources',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Consultants',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Encumbrance',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Funding Splits',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'State Aid Payment Requests',
								href: '/oneoffice/create/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Weekly Diary',
								href: '/oneoffice/create/**'
							}
						}
					}
				]
			},
			{
				name: 'rtv-header-modal',
				id: 'searchModal',
				iconName: 'search'
			},
			{
				name: 'rtv-header-modal',
				id: 'settingsModal',
				iconName: 'settings',
				sub: [
					{
						name: 'rtv-core-action',
						data: {
							props: {
								label: 'Hennepin County',
								click: 'openHennepinCounty'
							}
						}
					},
					{
						name: 'rtv-core-action',
						data: {
							props: {
								label: 'Your County',
								click: 'openYourCounty'
							}
						}
					},
					{
						name: 'rtv-core-action',
						data: {
							props: {
								label: 'New Organization',
								click: 'openOrganization'
							}
						}
					},
					{
						name: 'rtv-core-action',
						data: {
							props: {
								label: 'New Contact',
								click: 'openContact'
							}
						}
					},
					{
						name: 'rtv-core-action',
						data: {
							props: {
								label: 'New Employee',
								click: 'openEmployee'
							}
						}
					},
					{
						name: 'rtv-core-action',
						data: {
							props: {
								label: 'NewUserAccount',
								click: 'openUserAccount'
							}
						}
					},
					{
						id: 'rtv-core-action',
						data: {
							props: {
								label: 'New Item',
								click: 'openItem'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'My Account',
								href: '/oneOffice/profile/**'
							}
						}
					},
					{
						name: 'rtv-core-link',
						data: {
							props: {
								label: 'Settings',
								href: '/oneOffice/profile/**'
							}
						}
					},
					{
						name: 'rtv-core-action',
						data: {
							props: {
								label: 'Sign Out',
								click: 'openSignOut'
							}
						}
					}
				]
			},
			{
				name: 'rtv-header-modal',
				id: 'helpModal',
				iconName: 'help'
			}
		]
	}
]

//
// VIEWS
// GET /api/view/{name}
//
// Nothing on the backend currently cares what these objects look like so literally any changes can
// be made as long as they are reflected/handled on the front-end. Once stable we will add schema
// validation on the back end for these objects.
//

[
	// The logged in view of the landing/index/root page
	{
		name: '_landing_', // matches {name} in /api/view/{name}
		role: 'authenticated', // this view applies only to this role
		userId: null, // ? ask chris, probably means view is for that user if not null
		precedence: 1, // for overriding default views
		config: {
			menus: [
				{
					name: 'mainmenu' // ref to menu.name
				}
			],
			component: [
				{
					name: 'rtv-core-table', // the component name
					layout: {
						// Purely example right now of how to position a component in a grid
						// open to suggestions / other ways to handle
						row: 1,
						column: 1
					},
					// https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
					// Data can contain:
					// - class
					// - style
					// - attrs
					// - props
					// - domProps
					// - directives
					// - slot
					// - key
					// - ref
					data: {
						props: {
							stacked: true,
							header: 'Contract',
							editLink: '/api/table/oneoffice/contract',
							requestData: {
								method: 'GET',
								path: '/api/table/oneoffice/contract/{url.id}'
							}
						}
					}
				},
				{
					name: 'rtv-core-table',
					layout: {
						row: 1,
						column: 2
					},
					data: {
						props: {
							header: 'Projects',
							href: '/oneoffice/contract/project?id={id}',
							addLink: '/api/table/oneoffice/project',
							editLink: '/api/table/oneoffice/project',
							requestData: {
								method: 'SEARCH',
								path: '/api/table/oneoffice/project',
								body: { where: { contract_id: '{url.id}' } }
							}
						}
					}
				},
				{
					name: 'rtv-core-table',
					layout: {
						row: 2,
						column: 1
					},
					data: {
						props: {
							header: 'Payments',
							href: '/oneoffice/contract/payment?id={id}',
							total: 'amount',
							links: [
								{ href: '/oneoffice/contract/payment/funding?id={id}', label: 'Funding' },
								{ href: '/oneoffice/contract/payment/approve?id={id}', label: 'Approve' }
							],
							requestData: {
								method: 'SEARCH',
								path: '/api/table/oneoffice/payment',
								body: { where: { contract_id: '{url.id}' } }
							}
						}
					}
				}
			]
		}
	},
	// The public view of the landing/index/root page
	{
		name: '_landing_',
		role: 'public',
		userId: null,
		config: {
			menus: [
				{
					name: 'mainmenu'
				}
			],
			components: [
				{
					name: 'rtv-core-banner',
					data: {
						class: {
							'home-banner-image': true
						},
						props: {
							subComponents: [
								{
									name: 'rtv-core-link',
									data: {
										props: {
											label: 'Planning Projects',
											href: '/oneoffice/contract/planning',
											iconName: 'chess-knight'
										}
									}
								},
								{
									name: 'rtv-core-link',
									data: {
										props: {
											label: 'Projects in Bidding',
											href: '/oneoffice/contract/bidding',
											iconName: 'chess-rook'
										}
									}
								},
								{
									name: 'rtv-core-link',
									data: {
										props: {
											label: 'Projects in Construction',
											href: '/oneoffice/contract/constructionp',
											iconName: 'chess-pawn'
										}
									}
								},
								{
									name: 'rtv-core-link',
									data: {
										props: {
											label: 'Reports',
											href: '/oneoffice/reports',
											iconName: 'chess-bishop'
										}
									}
								}
							]
						}
					}
				},
				{
					name: 'rtv-core-main',
					data: {
						props: {
							header: 'Lorem ipsum dolor sit amet',
							components: [
								{
									name: 'rtv-core-paragraph', // just an example to reproduce the mockup
									data: {
										props: {
											header: 'Suspendisse quis porttitor ipsum.',
											content: 'Posuere ullamcorper cursus quis, porta vel magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et diam quis ligula molestie auctor. Duis erat odio, lacinia sit amet tristique vitae, viverra ac erat. Duis pulvinar vel ex a lobortis.Integer nec mauris congue, faucibus lacus nec, faucibus justo. Nulla ac nunc id ipsum volutpat accumsan. Cras sollicitudin nisi leo, vitae vulputate ante pharetra nec. In vulputate eleifend sollicitudin. In maximus sapien odio, eget placerat purus aliquam vel. Vestibulum luctus eros in ex facilisis ultricies vitae a nisl. Mauris ullamcorper nulla id nisi facilisis, ut faucibus dolor placerat. Etiam ac nisl neque. Integer mi justo, malesuada dignissim tincidunt sit amet, tincidunt condimentum enim. Nullam feugiat malesuada purus, ut porta nisi faucibus et. Suspendisse in posuere elit. Cras vel iaculis nulla.',
										}
									}
								},
								{
									name: 'rtv-core-paragraph',
									data: {
										props: {
											header: 'Pellentesque dictum massa.'
											content: 'Posuere ullamcorper cursus quis, porta vel magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et diam quis ligula molestie auctor. Duis erat odio, lacinia sit amet tristique vitae, viverra ac erat. Duis pulvinar vel ex a lobortis.Integer nec mauris congue, faucibus lacus nec, faucibus justo. Nulla ac nunc id ipsum volutpat accumsan. Cras sollicitudin nisi leo, vitae vulputate ante pharetra nec. In vulputate eleifend sollicitudin. In maximus sapien odio, eget placerat purus aliquam vel. Vestibulum luctus eros in ex facilisis ultricies vitae a nisl. Mauris ullamcorper nulla id nisi facilisis, ut faucibus dolor placerat. Etiam ac nisl neque. Integer mi justo, malesuada dignissim tincidunt sit amet, tincidunt condimentum enim. Nullam feugiat malesuada purus, ut porta nisi faucibus et. Suspendisse in posuere elit. Cras vel iaculis nulla.',
										}
									}
								}
							]
						}
					}
				}
			]
		}
	}
]
