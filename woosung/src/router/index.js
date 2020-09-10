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
        component: () => import(/* webpackChunkName: "about" */ '../components/info/movie-board.vue'),
      },
      {
        path:'info2',
        name:'info-news',
        component: () => import(/* webpackChunkName: "about" */ '../components/info/news-board.vue'),
      },
      {
        path:'info3',
        name:'info-movie',
        component: () => import(/* webpackChunkName: "about" */ '../components/info/movie-board.vue'),
      },
      {
        path:'info4',
        name:'info-material',
        component: () => import(/* webpackChunkName: "about" */ '../components/info/material-board.vue'),
      },
      {
        path:'info4/zoom/:idx',
        props:true,
        name:'zoom-material',
        component: () => import(/* webpackChunkName: "about" */ '../components/info/material-zoom.vue'),
    }
    ]
  },
  {
    path:'/board',
    name:'board',
    component: () => import(/* webpackChunkName: "about" */ '../views/board.vue'),
    children:[
      {
        name:'board-faq',
        path:'/',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/faq.vue'),
      },
      {
        name:'board-faq',
        path:'faq',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/faq.vue'),
      },
      {
        name:'zoom-faq',
        props:true,
        path:'zoomfaq/:idx',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/faq_zoom.vue'),
      },
      {
        name:'board-qna',
        path:'qna',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/qna.vue'),
      },
      {
        name:'zoom-qna',
        path:'zoomqna/:idx',
        props:true,
        component: () => import(/* webpackChunkName: "about" */ '../components/board/qna_zoom.vue'),
      },
      {
        name:'write-qna',
        path:'qnawrite',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/qna_write.vue'),
      },
      {
        name:'board-support',
        path:'support',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/support.vue'),
      },
      {
        name:'zoom-support',
        props:true,
        path:'zoom/:idx',
        component: () => import(/* webpackChunkName: "about" */ '../components/board/support_zoom.vue'),
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
