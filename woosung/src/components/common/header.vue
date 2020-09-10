<template>
<header >
        <moNav v-bind:show='moNav'/>
        <div class='wrap'>
            <router-link :to="{name:'Home'}" tag='h1'>
                <img src='../../assets/logo_w.png' class='default'>
                <img src='../../assets/logo.png' class='black'>
            </router-link>
            <ul>
                <li>
                    <router-link to='/about' tag='span'>회사 소개</router-link>
                </li>

                <li>
                    <router-link to='/product' tag='span'>제품 소개</router-link>
                    <div class='hidden_menu'>
                        <router-link to='/product/pro' tag='p'>Win-Win Pro</router-link>    
                        <router-link to='/product/plus' tag='p'>결제 연동</router-link>    
                        <router-link to='/product/pos' tag='p'>Win-Win 포스</router-link>    
                        <router-link to='/board/qna' tag='p' class='mini'>제품 QnA</router-link>    
                    </div>
                </li>
                <li>
                    <router-link to='/information' tag='span'>정보 공유</router-link>
                    <div class='hidden_menu'>
                        <!-- <router-link to='/information/info1' tag='p'>병충해 알림</router-link>     -->
                        <router-link to='/information/info3' tag='p'>정보 동영상</router-link>    
                        <router-link to='/information/info2' tag='p'>농업계 소식</router-link>    
                        <router-link to='/information/info4' tag='p'>농자재 정보</router-link>       
                        <p onclick="alert('서비스 준비중입니다.')">병해충 정보</p>
                    </div>
                </li>
                <li>
                    <router-link to='/board' tag='span'>고객 지원 센터</router-link>
                    <div class='hidden_menu'>
                        <router-link to='/board/faq' tag='p'>자주하는 질문</router-link>    
                        <router-link to='/board/qna' tag='p'>묻고 답하기</router-link>    
                        <router-link to='/board/support' tag='p'>고객지원센터</router-link>    
                    </div>
                </li>
                <li onclick="alert('서비스준비중입니다.')">
                    <span>팜 카페</span>
                </li>
            </ul>
            <!-- <div class='login_btn'>로그인</div> -->

            <div class='mo_menu' @click='MoNavOpen' v-bind:class="{active:moNav}">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class='slide_down'></div>
    <MoNav :show='moNav'/>

    </header>
</template>,
<script>
import MoNav from './mo_nav'
export default {
    components:{MoNav},
    data(){
        return{
            headerActive:false,
            moNav:false,
        }
    },
    watch:{
        $route(to,from){
            this.moNav = false
        }
    },
    methods:{
        MoNavOpen(){
            this.moNav == false?this.moNav = true:this.moNav = false
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/define.scss';

header{
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    padding: 30px 0px;
    position: fixed;
    top: 0px;
    z-index: 990;
    @media (max-width:767px) {
        padding: 20px 0px;
    }
    div.wrap{
        h1{
            width: 150px;
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
            z-index: 990;
            position: relative;
            img{
                width: 100%;
                transition: 0.1s ease-in;
                &.default{
                    display: inline;
                }
                &.black{
                    display: none;
                }
               
            }
            @media (max-width:1024px) {
                width: 130px;
            }
            @media (max-width:767px) {
                width: 100px;
            }
        }
        ul{
            position: absolute;
            z-index: 900;
            width: 100%;
            left: 50%;
            top: 50%;
            text-align: center;
            transform: translate(-50%,-50%);
            li{
                display: inline-block;
                margin: 0px 20px;
                font-size: 1.125rem;
                cursor:  pointer;
                color: white;
                font-weight: bold;

         
                span.router-link-active{
                    color: $PointColor;
                }
                // .router-link-active{
                //     color: $MainColor;
                //     font-weight: bold;
                // }
           
                &::before{
                    display: block;
                    position: relative;
                    bottom: -35px;
                    content: '';
                    width: 0%;
                    height: 2px;
                    background-color: $PointColor;
                    transition: .1s ease-in;
                    margin: 0 auto;
                }
              
                div{
                    position: absolute;
                    width: 120%;
                    top: 85px;
                    z-index: 999;
                    visibility: hidden;
                    opacity: 0.0;
                    transition: 0.1s ease-in;
                    left: 50%;
                    transform: translateX(-50%);
                    p{
                        font-size: 0.875rem;
                        margin-bottom: 10px;
                         height: 100%;
                        &.router-link-exact-active.router-link-active{
                            color: $PointColor;
                        }
                        &:hover{
                            color: $MainColor;
                        }
                        &.mini{
                            font-size: 0.75rem;
                            color: #999;
                        }
                    }
                }
                &:hover::before{
                    width: 100%;
                }
                @media (max-width:1200px) {
                    font-size: 1rem;
                }
                @media (max-width:1024px) {
                    display: none;
                }
              
            }
            
        }
        div.login_btn{
            cursor: pointer;
            display: inline-block;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            padding: 10px 30px;
            border-radius: 3px;
            background-color: $PointColor;
            color: white;
            @media (max-width:1024px) {
                visibility: hidden;
            }
            &:hover{
                background-color: rgba($color: $PointColor, $alpha: 0.9)
            }
        }
        div.mo_menu{
            cursor: pointer;
            width: 30px;
            height: 30px;
            display: none;
            position: absolute;
            right: 0;
            top: 40%;
            transform: translateY(-50%);
            z-index: 999;
            @media (max-width:1024px) {
                display: inline-block;
            }

            div{
                width: 100%;
                height: 3px;
                margin: 5px 0px;
                background-color: #444;
                transition: 0.1s ease-in;

                &:last-child{
                    width: 50%;
                    background-color: $PointColor;
                    position: absolute;
                    right: 0;
                    margin-top: 0;
                }
            }
            &:hover div:nth-child(2){
                width: 60%;
            }
            &.active{
                div{
                    
                &:nth-child(1){
                    transform: rotate(46deg) translateY(12px);
                }   
                &:nth-child(2){
                    opacity: 0.0;
                }     
                &:last-child{
                    background-color: #444;
                    transform: rotate(-46deg) translateY(-12.5px);
                    width: 100%;
                }
                }
            }
        }
    }
    div.slide_down{
        position: fixed;
        width: 100%;
        height: 00px;
        background-color: rgba($color: #fff, $alpha: 1);
        transition: .2s ease-in;
        z-index: -1;
        top: 0;
        @media (max-width:1024px) {
            display: none;
        }
    }
    &:hover div.slide_down{
        height: 300px;
    }
    &:hover div.hidden_menu{
        visibility: visible;
    }

    &:hover div.wrap h1 img.black{
        display: inline;
    }
    &:hover div.wrap h1 img.default{
        display: none;
    }
    &:hover div.wrap ul li{
        color: #444;
    }

    &:hover div.hidden_menu{
        opacity: 1.0;
    }
}
    
</style>