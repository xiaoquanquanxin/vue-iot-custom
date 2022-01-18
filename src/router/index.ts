import Vue from "vue";
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteConfig> = [

	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/production',
		name: 'Production',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '*',
		redirect: '/home'
	}
];

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
});
Vue.use(VueRouter);
export default router;

