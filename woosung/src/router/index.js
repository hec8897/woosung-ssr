import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import VueMoment from 'vue-moment';
import '@/assets/define.scss';

Vue.prototype.$Axios = axios;
Vue.use(VueMoment);


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue'),
    children:[
      {
        path:'/',
        name:'product-pro',
        component: () => import(/* webpackChunkName: "about" */ '../components/product/pro.vue'),
      },
      {
        path:'pro',
        name:'product-pro',
        component: () => import(/* webpackChunkName: "about" */ '../components/product/pro.vue'),
      },
      {
        path:'pos',
        name:'product-pos',
        component: () => import(/* webpackChunkName: "about" */ '../components/product/pos.vue'),
      },
      {
        path:'plus',
        name:'product-plus',
        component: () => import(/* webpackChunkName: "about" */ '../components/product/plus.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
