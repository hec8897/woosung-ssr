import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')

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
  },
  {
    path:'/information',
    name:'infomation',
    component: () => import(/* webpackChunkName: "about" */ '../views/infomation.vue'),
    children:[
      {
        path:'/',
        name:'info-movie',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/movie-board.vue'),
      },
      {
        path:'info2',
        name:'info-news',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/news-board.vue'),
      },
      {
        path:'info3',
        name:'info-movie',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/movie-board.vue'),
      },
      {
        path:'info4',
        name:'info-material',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/material-board.vue'),
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
