<template>
<div class='widget'>
     <div class='kakao'>
         <a href='http://pf.kakao.com/_Wxkxhnxb/chat' target="blank">
            <img src="@/assets/image/kakao.png"/>
            <p>플러스친구</p>
        </a>
     </div>

     <div class='teamviewer'>
         <a href="https://woosung.s3.ap-northeast-2.amazonaws.com/default/TeamViewer.exe" download>
         <img src="@/assets/image/consulting.png"/>
         <p>원격 지원</p></a>
     </div>
     <div class='teamviewer'>
         <img src="@/assets/image/consult.png"/>
         <p><a href="tel:02-6959-8161" >상담신청</a></p>
     </div>

     <div class='phone'>
             <img src="@/assets/image/phone.png"/>
             <div>
                 <p><a href="tel:02-6959-8161" >02-6959-8161</a></p>
                 <p><a href="tel:1544-6301">1544-6301</a></p>
            </div>
     </div>
     <ContactModal v-if='false'/>
 </div>

</template>

<script>
import ContactModal from '@/components/modal/modal-contact'
export default {
    components:{ContactModal},
    created(){
        console.log(1)
    },
    data(){
        return{
            show:false
        }
    },
    methods: {
     openPopup(){
         this.show = true
         console.log(this.show)
     }
 }, 
    
}
</script>

<style lang="scss">
@import '@/assets/mixin.scss';

div.top_widget{
    cursor: pointer;
    background-color: $MainColor;
    position: fixed;
    right: 1%;
    bottom: 5%;
    z-index: 999;
    width: 50px;
    text-align: center;
    line-height: 50px;
    transition: .1s ease-in-out;
    @media (max-width:1200px) {
        bottom: 15%;
        
    }
    &:hover{
        background-color: darken($color: $MainColor, $amount: 10%);
    }
    svg{
        font-size: 25px;
        vertical-align: bottom;
        color: #fff;
    }
    p{
        font-size: 0.75rem;
        font-weight: bold;
        color: #fff;
    }
}

div.widget{
    position: fixed;
    top: 15%;
    right: 1%;
    border: 1px solid #999;
    background-color: #fff;
    padding: 10px;
    z-index: 900;
    @include shadowDefault();
    img{
        margin: 0 auto;
        margin-bottom: 10px;
        display: block;
    }
    
    @media (max-width:1200px) {
        top: 87%;
        bottom: 0;
        width: 100%;
        box-shadow: none;
        right: 0;
        border: 0px;
        border-top: 1px solid #d0d0d0;
        padding: 5px 10px;

    }
    &>div{
        cursor: pointer;
        text-align: center;
        margin-bottom: 10px;
        border-bottom: 1px dashed #666;
        padding: 10px 0px;
        vertical-align: top;
    
        @media (max-width:1200px) {
            display: inline-block;
            width: 32%;
            box-sizing: border-box;
            border: 0px;
            margin-bottom: 5px;
            padding: 5px 0px;
            &:nth-child(2){
                display: none;
            }
        }

        img{
            max-width: 40px;
        }
        p{
            font-size: 0.75rem;
            margin-top: 5px;
            font-weight: bold;
        }
    }
    div.phone{
        margin-bottom: 0;
        border: 0;
        img{
            width: 30px;
        }
   
        p{
            margin-top: 3px;
            @media (max-width:1200px) {
                // display: inline;
            }
        }
    }
}
    
</style>