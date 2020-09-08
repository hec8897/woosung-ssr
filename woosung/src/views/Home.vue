<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  
  metaInfo(){
      return{
        title:'우성소프트',
        titleTemplate: '%s | pls 관리기준', // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
        meta:[
          {name: 'description', content:'우성소프트'}
        ],
      }
    },

  data(){
    return{
      title:'우성소프트'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
