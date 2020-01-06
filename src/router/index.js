import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import( /* webpackChunkName: "Home" */ '@/views/Home/Home');
// const Classify = () => import(/* webpackChunkName: "Classify" */ '@/views/Classify/Classify');
const Want = () => import(/* webpackChunkName: "Want" */ '@/views/Want/Want');
const Cart = () => import(/* webpackChunkName: "Cart" */ '@/views/Cart/Cart');
const Mine = () => import(/* webpackChunkName: "Mine" */ '@/views/Mine/Mine');

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		}, {
			path: '/Cart',
			name: 'Cart',
			component: Cart
		},
		// {
		// 	path: '/Classify',
		// 	name: 'Classify',
		// 	component: Classify
		// },
		{
			path: '/Mine',
			name: 'Mine',
			component: Mine
		}, {
			path: '/Want',
			name: 'Want',
			component: Want
		}
	]
	
})











