import Vue from 'vue'
import VueMeta from 'vue-meta'
import router from './router'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import listNumber from '@/components/common/listNumber.vue'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueCarousel);

Vue.component('list-number',listNumber)



new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount('#app')
