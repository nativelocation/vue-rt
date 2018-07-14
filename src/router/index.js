import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/index.vue'
import HomeContent from '../pages/home/Home.vue'
import Login from '../pages/Login.vue'
import Reports from '../pages/Reports.vue'
import Projects from '../pages/projects/Projects.vue'
import Planning from '../pages/projects/Planning.vue'
import Bidding from '../pages/projects/Bidding.vue'
import Construction from '../pages/projects/Construction.vue'
import ProjectCategory from '../pages/projects/category/ProjectCategory.vue'
import PlanningContent from '../pages/projects/category/PlanningContent.vue'
import BiddingContent from '../pages/projects/category/BiddingContent.vue'
import ConstructionContent from '../pages/projects/category/ConstructionContent.vue'
import MessagesCategory from '../pages/messages/MessagesCategory.vue'
import Messages from '../pages/messages/Messages.vue'
import NewMessage from '../pages/messages/NewMessage.vue'
import Help from '../pages/messages/Help.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home',
			children: [
				{
					path: '/',
					component: HomeContent,
					name: 'home'
				},
				{
					path: 'login',
					component: Login,
					name: 'login'
				},
				{
					path: 'reports',
					component: Reports,
					name: 'reports'
				},
				{
					path: 'projects',
					component: Projects,
					name: 'projects'
				},
				{
					path: 'projects/planning',
					component: Planning,
					name: 'planning'
				},
				{
					path: 'projects/bidding',
					component: Bidding,
					name: 'bidding'
				},
				{
					path: 'projects/construction',
					component: Construction,
					name: 'construction'
				},
				{
					path: 'messages',
					component: Messages,
					name: 'messages'
				}
			]
		},
		{
			path: '/projects/bidding/:id',
			component: ProjectCategory,
			name: 'projectCategory',
			children: [
				{
					path: '/projects/bidding/:id',
					component: BiddingContent,
					name: 'Bidding'
				},				{
					path: '/projects/planning/:id',
					component: PlanningContent,
					name: 'Planning'
				},				{
					path: '/projects/construction/:id',
					component: ConstructionContent,
					name: 'Construction'
				}
			]
		},
		{
			path: '/messages/new',
			component: MessagesCategory,
			name: 'messagesCategory',
			children: [
				{
					path: '/messages/new',
					component: NewMessage,
					name: 'New Message'
				},
				{
					path: '/messages/help',
					component: Help,
					name: 'Frequently Asked Questions'
				}
			]
		}
	]
})

export default router
