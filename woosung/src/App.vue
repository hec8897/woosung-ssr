<template>
  <div id="app">
    
    <AppHeader />
    <router-view />
    <AppWidget />
<Adsense
    data-ad-client="ca-pub-3666966640936806"
    ins-style="{position: fixed; z-index:999; width:200px; height:200px; top:0px left:10%; top:10%;} "
    data-ad-slot="1234567890">
</Adsense>

    <AppFooter />

  </div>
</template>
<script>
  import AppHeader from '@/components/common/header.vue'
  import AppFooter from '@/components/common/footer.vue'
  import AppWidget from '@/components/widget/widget.vue'
  export default {
    components: {
      AppHeader,
      AppFooter,
      AppWidget
    },
    metaInfo() {
      return {
        title: '우성소프트',
        // titleTemplate: `%s | ${123}`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
        meta: [
          {
            name: 'author',
            content: 'woosung'
          },
          {
            name: 'keyword',
            content: `PLS, pls 판매기록, 우성소프트,우성컴퓨터, 농약관리, 작물보호제, 농약판매기록의무화, 농약판매전자기록, 
          농약허용물질목록관리제도, 농약허용기준강화제도, 농촌진흥청, 농진청, 농약판매업, 농약판매관리, 농약재고관리`
          },
          {
            name: 'description',
            content: `PLS 판매기록 우성소프트 우성컴퓨터, 농약안전정보시스템 연동, 농자재판매상 전용 판매관리프로그램, 포스 시스템 구축 , PLS 농약검색`
          },
          {
            property: 'og:title',
            content: '우성소프트',
            vmid: 'og:title'
          },
          {
            property: 'og:description',
            content: 'PLS 판매기록, 농자재판매상 전용 판매관리프로그램 포스 시스템 구축',
            vmid: 'og:description'
          },
          {
            property: 'og:type',
            content: 'website',
            vmid: 'og:type'
          },
          {
            property: 'og:url',
            content: 'http://www.wssw.kr',
            vmid: 'og:url'
          },
          {
            property: 'og:image',
            content: 'http://www.wssw.kr/og.jpg',
            vmid: 'og:image'
          },
        ],
        link:[
          {rel:'canonical', href:'http://www.wssw.kr'}
        ]
      }
    },

  }
</script>