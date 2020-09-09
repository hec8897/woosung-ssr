<template>
  <div class="about">
           <div class='about_contant'>
            <div class='about_head'>
                <h3 class='wrap'>회사 소개</h3>
            </div>
                <section class='section1'>
                    <h2>CEO 인사말</h2>
                    <div class='content wrap'>
                        <div class='text_contant'>
                            <h4>우리는 성공한다!</h4>
                            <p>30년전 우성소프트의 사명(社名)은 우성의 프로그램을 
                            사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다.
                            30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로
                            고객의 성공이 회사의 사명(使命)이 되었습니다.
                            </p>
                            <p>
                                우성소프트의 농자재유통 전문프로그램 WinWin Pro는 농자재 유통 업무에 필요한 판매재고관리,
                                매출 통계 분석 등의 기능을 사용자 환경에 맞추어 쉽고 간편하게 사용할 수 있도록 현장형 최적화
                                프로그램으로 개발되었습니다. 또한, PLS와 판매기록제, 세무 업무 지원기능을 통해 농자재 판매
                                관리인에게 요구되는 대부분의 업무를 프로그램화 하여 사용자가 현장 업무에만 집중 할 수 있도록 서비스 하고 있습니다.
                            </p>
                        </div>
                        <div class='caption'>
                            <img src='@/assets/image/about/ceo_caption.jpg'> 
                        </div>
                    </div>
                    <div class='obj'></div>
                </section>

                <section class='section2'>
                    <div class='content wrap'>
                    <div class='caption'>
                            <img src='@/assets/image/about/ceo_caption2.jpg'> 
                        </div>
                        <div class='text_contant'>
                        <p>
                            계속 변화하는 유통 환경과 고객의 요구에 맞추어 우성소프트는 농자재 판매상 전용 판매자 시점 결제 시스템(POS)을
                            개발하여 전국에 보급하고 있으며 농자재 제조사 및 유통사와 실시간 제품 정보 공유를 통하여 다양한 정보가
                            전달될 수 있도록 최선을 다하고 있습니다.
                        </p>
                        <p>
                            우성소프트는 앞으로도 고객과 현장에서 늘 함께하는 파트너로써의 자리를 지켜 나가겠습니다.
                        </p>
                        <h4 class='tit'>주식 회사 우성 소프트 대표이사 이태권</h4>
                        </div>
                  
                    </div>
                </section>
                <section class='section3'>
                    <h2>기업 역량</h2>
                    <div class='fig wrap'>
                        <img src='@/assets/image/about/fig1.png'>
                    </div>
                </section>
                <section class='section4'>
                    <h2>회사 연혁</h2>
                    <div class='fig wrap'>
                        <img src='@/assets/image/about/fig2.png'>
                    </div>
                </section>
                <kakaoMap/>
        </div>
  </div>
</template>

<script>
import kakaoMap from '@/components/common/KakaoMap'

export default {
  components:{kakaoMap},
   metaInfo(){
      return{
        title:'우성소프트',
        titleTemplate: `%s | pls 판매제고 프로그램의 기준`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
        meta:[
          {name: 'description', content:`30년전 우성소프트의 사명(社名)은 우성의 프로그램을 사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다. 30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로 고객의 성공이 회사의 사명(使命)이 되었습니다.`},
          {name: 'keyword', content:`PLS, pls 판매기록, 우성소프트,우성컴퓨터, 지도, 작물보호제, 기업 역량, 회사 연혁`},
        ],
      }
    },
}
</script>

<style lang="scss">
@import '@/assets/mixin.scss';

div.about{
    div.about_head{
        width: 100%;
        height: 500px;
        background-size: cover;;
        background-image: url(../assets/image/about/menu_ceo.jpg);
        margin-bottom: 50px;
        background-position: center;

        
        h3{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 2.2rem;
            color: #fff;
            text-align: center;
            letter-spacing: 2px;
        }
        @media (max-width:1024px) {
            background-position: right;;
        }
    
    }


    div.about_contant{
        section{
            padding: 75px 0px;
            @media (max-width:767px) {
                padding: 50px 0px;
            }

        }
        h2{
            text-align: center;
            font-weight: bold;
            margin-bottom: 75px;
        }
        
        div.obj{
            width: 60%;
            height: 200px;
            position: absolute;
            left: 0;
            z-index: -1;
            background-color: #f7f7f7;
            @media (max-width:767px) {
                width: 75%;
                height: 600px;
                bottom: -200px;
            }

        }
        div.wrap{
            div.text_contant{
                width: 45%;
                display: inline-block;
                @media (max-width:767px) {
                    width: 95%;
                    display: block;
                    margin: 0 auto;
                }

                h4{
                    font-size: 24px;
                    margin: 20px 0px;
                    @media (max-width:767px) {
                        font-size: 18px;
                        &.tit{
                            text-align: center;
                        }
                    }

                }
                p{
                    word-break: keep-all;
                    font-size: 16px;
                    line-height: 28px;
                    letter-spacing: -0.5px;
                    margin-bottom: 30px;
                }
            }
            div.caption{
                width: 40%;
                max-width: 450px;
                display: inline-block;
                vertical-align: top;
                img{
                    width: 100%;
                }
                @media (max-width:767px) {
                }
            }
          
           
     
        }
        section.section1{
            padding-bottom: 0;
            div.caption{
                margin-left: 10%;
                text-align: right;
                @media (max-width:767px) {
                    display: none;

                }
                
            }
        }
        section.section2{
            @media (max-width:767px) {
                padding-top: 0;
            }

            div.text_contant{
                width: 40%;
                margin-left: 10%;
                @media (max-width:767px) {

                    width: 95%;
                    display: block;
                    margin: 0 auto;
                }
            }
            div.caption{
                width: 45%;
                max-width: 450px;
                @media (max-width:767px) {
                    display: none;
                }

            }

        }
        section.section3{
            background-color: #f7f7f7;
        }

        section{
            div.fig{
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }
        section.section5{
            padding-bottom: 0;
            position: relative;
            div#map{
                height: 500px;
                background-color: #d0d0d0;
                z-index: 80;
            }
            div.map_btns{
                text-align: center;
                position: absolute;
                bottom: 30px;
                z-index: 90;
                left: 50%;
                transform:translateX(-50%) ;


                a.map_btn{
                    cursor: pointer;
                    width: 220px;
                    font-size: 14px;
                    padding: 15px 0px;
                    background-color: $PointColor;
                    display: inline-block;
                    margin: 5px;
                    color: #fff;
                    transition: .1s ease-in-out;
                    &:hover{
                        background-color: lighten($color: $PointColor, $amount: 5%);
                    }
                }
            }
        }
    }
}
</style>