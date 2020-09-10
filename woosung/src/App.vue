<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppWidget/>
    <AppFooter/>
  </div>
</template>
<script>
import AppHeader from '@/components/common/header.vue'
import AppFooter from '@/components/common/footer.vue'
import AppWidget from '@/components/widget/widget.vue'
export default {
  components:{AppHeader,AppFooter,AppWidget}
  
}
</script>
