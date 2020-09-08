<template>
  <div class="home">
  <div class='slider'>
    <carousel 
      :perPage='1' 
      :loop='true'
      :autoplay='true'
      :autoplayTimeout="3500"
    >
    <slide>
      <div class='inner inner_1'>
          <div class='slide_content'>
            <h4 class='w_text'>쉽고 빠른 농자재</h4>
            <h3>판매재고 프로그램의 기준!</h3>
            <h4>Walk Together, Win Together</h4>
          </div>
      </div>
    </slide>
    <slide>
      <div class='inner inner_2'>
           <div class='wrap'>
                <img src="@/assets/image/product/pro.png"/>
                <div class='text_area'>
                    <h3>작물 유통 프로그램의 기준!!</h3>
                    <h2>Win-Win Pro</h2>
                    <p>복잡하고 어려워진 농약판매 우성 소프트가 해결 해드리겠습니다.</p>
                    <router-link tag='div' to='/product/pro' class='btn'>자세히 보기</router-link>
                </div>
            </div>
      </div>
    </slide>
    <slide>
      <div class='inner inner_2'>
               <div class='wrap'>
                <img src="@/assets/image/product/pro.png"/>
                <div class='text_area'>
                    <h3>작물 유통 프로그램의 기준!!</h3>
                    <h2>Win-Win Pro</h2>
                    <p>복잡하고 어려워진 농약판매 우성 소프트가 해결 해드리겠습니다.</p>
                    <router-link tag='div' to='/product/pro' class='btn'>자세히 보기</router-link>
                </div>
            </div></div>
    </slide>
    </carousel>
  </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from 'vue-carousel';


export default {
  name: 'Home',
  
  metaInfo(){
      return{
        title:'우성소프트',
        // titleTemplate: `%s | ${123}`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
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
    Carousel,Slide
  }
}
</script>

<style lang="scss">
@import '@/assets/define.scss';

div.home{
div.slider{
        width: 100%;
        .VueCarousel-wrapper{
            div.inner{
                width: 100%;
                position: relative;
                background-size: cover;
            }

            div.inner_1{
                background-image: url(../assets/image/slide1_bg.png);
                height: 500px;

                div.slide_content{
                    width: 100%;
                    height: 100%;
                    background-color: rgba($color: #444, $alpha: 0.3);
               
                    &>div{
                        width: 100%;
                        height: 100%;
                    }

                    h3{
                        text-align: center;
                        font-weight: bold;;
                        color: #fff;
                        font-size: 3rem;
                        margin: 10px 0px;
                        margin-bottom: 30px;
                     
                        @media (max-width:767px) {
                            font-size: 1.75rem;
                        }
                    }
                    h4{
                        font-size: 2rem;
                        text-align: center;
                        color: darken($color: #00CED1, $amount: 10%);
                        &.w_text{
                            color: #fff;
                            font-weight: 600;
                        padding-top: 160px;
                        }
                        @media (max-width:767px) {
                            font-size: 1.125rem;
                        }
                    }
                }
            }
            div.inner_2,.inner_3{
                box-sizing:border-box;
                padding-top:150px;
                background-size: cover;
                height: 500px;
                background-image: url(../assets/image/product/pos_banner_bg.jpg);

            }
            div.inner_2{

                div.btn{
                    background-color: $PointColor;
                    color: #fff;
                    cursor:pointer;
                    border-radius:3px;
                }
                img{
                    max-width: 350px;
                        @media (max-width:1024px) {
                            width: 30%;
                        }
                        @media (max-width:767px) {
                            width: 100%;
                            position: absolute;
                            opacity: 0.5;
                        }
                    }
                    div.text_area{
                        display: inline-block;
                        vertical-align: top;
                        margin-top: 20px;
                        margin-left: 50px;
                        @media (max-width:767px) {
                            width: 100%;
                            margin: 0;
                            background-color: rgba($color: #fff, $alpha: 0.5);
                            text-align: center;
                            padding: 50px 0px;
                        }
        
                        h3{
                            font-size: 1.556rem;
                            color: #444;
                            span{
                                text-decoration: underline;
                            }
                        }
                        h2{
                            color: #444;
                            font-weight: bold;
                            font-size: 2.556rem;
                        }
                        p{
                            margin-top: 40px;
                            color: IndianRed;
                            font-weight: bold;
                            font-size: 1.35rem;
                            top: 0;
    
                        }
                    }

            }
            p{
                text-align: center;
                position: relative;
                top: 250px;
                font-size: 50px;
            }

        }
        .VueCarousel-pagination{
          position:relative;
          top:-100px
        }

    }
}
</style>