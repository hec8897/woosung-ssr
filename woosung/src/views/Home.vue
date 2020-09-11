<template>
  <div class="home">
    <div class='slider'>
      <carousel 
        :perPage='1' 
        :loop='true'
        :autoplay='true'
        :autoplayTimeout="3500"
      >
          <slide><MainBanner/></slide>
          <slide><ProBanner btn='true' product='pro'/></slide>
          <slide><ProBanner btn='true' product='pos'/></slide>
          <slide><ProBanner btn='true' product='plus'/></slide>

      </carousel>
    </div>

      <section class='section1'>  
        <div class='wrap'>
          <Notice class='content content1'/>
          <Material class='content content2'/>
        </div>
      </section>

      <farmNews/>


      <farmMovie/>

            <div class='footer_banner'>
                <div class='wrap'>
                    <div>
                        <h3><b>적은 투자</b> 큰 효과 <b>다양한 기능</b>으로 업무를 신속하고 편리하게</br>
                        <b>스마트 시대!</b> 사업주님의 사업장도 스마트 해집니다.</h3>
                        <div class='btn' >
                          <!-- @click='openPopup' -->
                            간단 상담 신청
                        </div>
                    </div>
                </div>
                </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from 'vue-carousel';
import MainBanner from '@/components/banner/banner-main'
import ProBanner from '@/components/banner/banner-pro'
import Notice from '@/components/home/notice';
import Material from '@/components/home/material';
import farmNews from '@/components/home/farm-news';
import farmMovie from '@/components/home/farm-movie';


export default {
  name: 'Home',
    components: {
      Carousel,Slide,MainBanner,ProBanner,Notice,Material,farmNews,farmMovie
  },
    data(){
    return{
      title:'우성소프트'
    }
  },
  metaInfo(){
      return{
        title:'우성소프트',
        // titleTemplate: `%s | ${123}`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
        meta:[
          {name:'author', content:'woosung'},
          {name: 'keyword', content:`PLS, pls 판매기록, 우성소프트,우성컴퓨터, 농약관리, 작물보호제, 농약판매기록의무화, 농약판매전자기록, 
          농약허용물질목록관리제도, 농약허용기준강화제도, 농촌진흥청, 농진청, 농약판매업, 농약판매관리, 농약재고관리`},
          {name: 'description', content:`PLS 판매기록 우성소프트 우성컴퓨터, 농약안전정보시스템 연동, 농자재판매상 전용 판매관리프로그램, 포스 시스템 구축 , PLS 농약검색`},
          {property: 'og:title', content: '우성소프트', vmid: 'og:title'},
          {property: 'og:type', content: 'website', vmid: 'og:type'},
          {property: 'og:url', content: 'http://www.wssw.kr', vmid: 'og:url'},
          {property: 'og:image', content: 'http://www.wssw.kr/og.jpg', vmid: 'og:image'},
        ],
      }
    },



}
</script>

<style lang="scss">
@import '@/assets/mixin.scss';
div.home{
    div.slider{
      width: 100%;
        .VueCarousel-wrapper{
            div.inner{
                width: 100%;
                position: relative;
                background-size: cover;
                height: 500px;

            }
        }
        .VueCarousel-pagination{
          position:relative;
          top:-100px
        }
    }
    section{
      &.section1{
        padding: 0px 0px;
        .wrap{
            display: flex;
            flex-direction: row;
            @media (max-width: 1024px) {
              display: block;  
            }
            div.content{
              flex:1 1 45%;
              justify-content: space-between;
              margin-right: 50px;
              h2{
                   border-bottom: 1px solid #d0d0d0;
                  padding-bottom: 15px;
                  vertical-align: middle;
                  text-align: left;
              }
              &.content1{
                margin-right: 3%;

                @media (max-width: 1024px) {
                      width: 95%;
                      display: block;
                      margin: 0 auto;
                      margin-bottom: 30px;
                }
              }
              &.content2{
                margin-left: 3%;
                 @media (max-width: 1024px) {
                         width: 95%;
                      display: block;
                      margin: 0 auto;
                      margin-bottom: 30px;
                }
              }
            }
        }
      }
    }

        div.footer_banner{
        background-image: url(../assets/image/main_footer.jpg);
        background-position: top;
        background-size: cover;

        div.wrap{
            &>div{
                padding: 100px 0px;
                text-align: center;
            }
            h3{
                color: #444;
                font-size: 1.5rem;
                line-height: 2.2rem;
                @media (max-width:1024px) {
                    font-size: 1.25rem;
                    text-align: center;
                }
                b{
                    font-weight: bold;
                }
            }
            div.btn{
                border: 0px;
                color: #222;
                border-radius: 0;
                font-size: 1.125rem;
                font-weight: bold;
                background-color: lightskyblue;
                transition: .1s ease-in-out;
                padding: 20px 60px;
                @include shadowDefault();
                &:hover{
                    transform: translateY(-3px);
                }
            }
        }
       
    }
}
</style>