<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>
<script>
import AppHeader from '@/components/common/header.vue'
import AppFooter from '@/components/common/footer.vue'
export default {
  components:{AppHeader,AppFooter}
  
}
</script>
