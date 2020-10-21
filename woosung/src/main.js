import 'babel-polyfill';
import Vue from 'vue'
// import VS2 from 'vue-script2'
import VueMeta from 'vue-meta'
import router from './router'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import listNumber from '@/components/common/listNumber.vue'
import axios from 'axios'
import VueMoment from 'vue-moment';
import '@/assets/define.scss';




// Vue.use(VS2)
Vue.config.productionTip = false
Vue.prototype.$Axios = axios;
Vue.use(VueMoment);
Vue.use(VueMeta)
Vue.use(VueCarousel);
Vue.component('list-number',listNumber)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
