<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
  </div>
</template>
<script>
import AppHeader from '@/components/common/header.vue'
export default {
  components:{AppHeader}
  
}
</script>
