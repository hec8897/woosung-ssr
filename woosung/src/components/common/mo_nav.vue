<template>
<transition name='fade'>
        <div class='mo_nav' v-if="show">
            <div class='inner'>
                <ul>
                    <li>
                        <router-link to='/about' tag='span'>회사 소개</router-link>
                    </li>
                    <li>
                        <router-link to='/product' tag='span'>제품 소개</router-link>
                        <div class='sub_menu'>
                            <router-link to='/product/pro' tag='p'>Win-Win Pro</router-link>    
                            <router-link to='/product/plus' tag='p'>Win-Win Pro<sup>+</sup></router-link>    
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
                        <router-link to='/information/info4' tag='p'>농자재 소식</router-link>       
                        <p onclick="alert('서비스 준비중입니다.')">병충해 알림</p>
                    </div>
                </li>
                    <li>
                    <router-link to='/board/faq' tag='span'>고객 지원 센터</router-link>
                        <div class='sub_menu'>
                            <router-link to='/board/faq' tag='p'>자주하는 질문</router-link>    
                            <router-link to='/board/qna' tag='p'>묻고 답하기</router-link>    
                            <router-link to='/board/support' tag='p'>고객지원센터</router-link>  
                        </div>
                    </li>
                    <li>팜카페</li>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props:['show'],

}
</script>

<style lang="scss">
@import '@/assets/define.scss';

div.mo_nav {
  width: 100%;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;

  div.inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ul {
      li {
        text-align: center;
        font-size: 20px;
        margin: 15px 0px;
        color: #444;

        span {
          cursor: pointer;
          &.router-link-active {
          font-weight: bold;
          }
        }

        p {
          cursor: pointer;
          font-size: 14px;
          margin: 10px 0px;
          color: #444;
          font-weight: normal;
          &.router-link-exact-active.router-link-active{
            color: $PointColor;
            font-weight: bold;

          }
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>