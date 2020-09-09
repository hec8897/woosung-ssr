<template>
  <div class="about">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
   metaInfo(){
      return{
        title:'우성소프트',
        // titleTemplate: `%s | ${123}`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
        meta:[
          {name: 'description', content:'우성소프트 제품소개'}
        ],
      }
    },
}

</script>