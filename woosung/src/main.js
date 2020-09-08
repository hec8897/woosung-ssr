import Vue from 'vue'
import VueMeta from 'vue-meta'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
