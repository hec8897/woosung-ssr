import Vue from 'vue'
import VueMeta from 'vue-meta'
import router from './router'
import App from './App.vue'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueCarousel);


new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  // mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
