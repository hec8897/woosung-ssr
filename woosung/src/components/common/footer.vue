<template>
<footer>
                    <div class='logos wrap'>
                        <Carousel 
                        :per-page-custom=[[1200,5],[1024,4],[767,3]]
                        :loop="true"
                        :autoplay='true'
                        :autoplayTimeout="3500">
                            <Slide v-for="footerSite in footerSites" :key='footerSite.idx'>
                                <div>
                                    <a :href="footerSite.url" target='blank'>
                                        <img :src='footerSite.logo'>
                                    </a>
                                </div>
                            </Slide>
                  
                        </Carousel>

                    </div>
                    <div class='foot'>
                        <img src='../../assets/logo_w.png' class='logo'>
                        <ul>
                            <router-link to='/about' tag="li">회사소개</router-link>
                            <router-link to='/product' tag="li">제품소개</router-link>
                            <router-link to='/information' tag="li">정보공유</router-link>
                            <router-link to='/board/faq/all' tag="li">고객지원센터</router-link>
                            <li><a href="pdf/개인정보처리방침.pdf" target='blank'>개인정보처리방침</a></li>
                            <li>팜카페</li>
                        </ul>
                        <p><span>대표:</span> 이태권 <span>주소:</span> 서울 특별시 강서구 마곡 중앙6로 40 718호</p>
                        <p><span>사업자등록번호:</span> 110111-7309283</p>
                        <p><span>전화번호:</span> 1544-6301 , 02-6959-8161 <span>이메일:</span> woosungsoft@naver.com</p>
                    </div>
                </footer>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
      },
    data(){
          return{
              footerSites:[
                  {
                      idx:0,
                      name:'포유 인포택',
                      url:'http://foryou.inetpia.re.kr/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/logo11.png'

                  },
                  {
                    idx:1,
                    name:'경농',
                    url:'http://www.knco.co.kr/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/kn.png'
                },
                {
                    idx:2,
                    name:'농협 캐미컬',
                    url:'http://www.nhchemical.com/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/nh.png'
                },
                {
                    idx:3,
                    name:'동방아그로',
                    url:'http://www.dongbangagro.co.kr/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/db.png'
                },
                {
                    idx:4,
                    name:'bayer',
                    url:'https://www.bayer.co.kr/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/ba.png'
                },
                {
                    idx:5,
                    name:'성보화학',
                    url:'http://www.sbcc.kr/',
                    logo:'image/footer/logo5.png',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/sb.png'

                },
                {
                    idx:6,
                    name:'syngenta',
                    url:'https://www.syngenta.co.kr/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/sy.png'

                },
                {
                    idx:7,
                    name:'인바이오',
                    url:'http://www.enbio.co.kr/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/in.png'
                },
                {
                    idx:8,
                    name:'팜한농',
                    url:'https://www.farmhannong.com/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/fh.png'
                },
                {
                    idx:9,
                    name:'한국삼공',
                    url:'http://www.30agro.co.kr/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/hs.png'
                },
                {
                    idx:10,
                    name:'한얼사이언스',
                    url:'http://www.hescience.co.kr/',
                    logo:'https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/has.png'
                }
              ]
          }
      }
}
</script>

<style lang="scss">
    @import '@/assets/define.scss';
footer{
    border-top: 1px solid #d0d0d0;
    @media (max-width:1200px) {
        padding-bottom: 50px;
        
    }
    div.logos{
        width: 100%;
        height: 100px;
        line-height: 100px;
        div{
            text-align: center;
            img{
                width:50%;
                max-width: 110px;
            }
         
        }
    }
    div.foot{
        background-color: #424242;
        text-align: center;
        padding:80px 0px;
       
    
        img.logo{
            width: 140px;
            @media (max-width:767px) {
                width: 120px;
            }
        }
        ul{
            margin: 30px 20px;
            @media (max-width:767px) {
                margin: 30px 5px;
                text-align: center;
            }
            li{
                cursor: pointer;
                display: inline-block;
                color: #fff;
                font-size: 0.875rem;
                margin: 0px 5px;
               
                a{
                    color: #fff;
                }

            }
        }
        p{
            color: #fff;
            font-size: 0.75rem;
            letter-spacing: .5px;
            span{
                color: $lightgray;
            }
        }
    }
}
</style>