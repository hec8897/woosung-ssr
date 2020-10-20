<template>
<section class='farm-movie'>
        <div class='wrap'>
            <h2>
                정보 동영상
                <router-link tag='span' to='/information/info3' class='more'><b>더보기</b> +</router-link>
            </h2>
            <div class='youtubes'>
                
                <carousel 
                :navigationEnabled="true"
                :navigationPrevLabel="prevBtn"
                :navigationNextLabel="nextBtn"
                :loop='true'
                :per-page-custom=[[1024,4],[768,3],[480,2],[360,2]]
                >

                <slide v-for="(movie,i) in movies" :key='i'>
                    <div class='slide_inner'>
                        <img v-bind:src="'https://i.ytimg.com/vi/'+movie.youtubeId+'/0.jpg'">
                        <div class='hover' >
                        <img src="@/assets/image/youtube.png" @click="youtubeBoxShow(movie)"/>
                        </div>
                    </div>
                    <h3>{{movie.title}}</h3>
                </slide>

            </carousel>

            <MoviePopup 
            v-bind:show="show" 
            v-bind:data="popupData"
            @child="closePopup"
            />
            
            </div>
        </div>
    </section>
</template>

<script>
import MoviePopup from '@/components/modal/modal-movie.vue'

export default {
        components:{MoviePopup},
      data(){
        return{
            show:false,
            popupData:"",
            movies:[],
            nextBtn:`<div class='btn_circle'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="25" height="25"
            viewBox="0 0 226 226"
            style=" fill:#444444;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#444444"><path d="M67.74703,18.04469c-1.83625,0 -3.47828,1.11234 -4.18453,2.80734c-0.68859,1.71266 -0.2825,3.65484 1.04172,4.94375l87.20422,87.20422l-87.20422,87.20422c-1.18297,1.13 -1.65969,2.825 -1.23594,4.39641c0.40609,1.58906 1.64203,2.825 3.23109,3.23109c1.57141,0.42375 3.26641,-0.05297 4.39641,-1.23594l90.4,-90.4c1.76563,-1.76562 1.76563,-4.62594 0,-6.39156l-90.4,-90.4c-0.8475,-0.88281 -2.01281,-1.35953 -3.24875,-1.35953z"></path></g></g></svg></div>`,
            prevBtn:`<div class='btn_circle'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="25" height="25"
            viewBox="0 0 226 226"
            style=" fill:#444444;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#444444"><path d="M158.11172,18.04469c-1.18297,0.01766 -2.29531,0.51203 -3.1075,1.35953l-90.4,90.4c-1.76562,1.76563 -1.76562,4.62594 0,6.39156l90.4,90.4c1.13,1.18297 2.825,1.65969 4.39641,1.23594c1.58906,-0.40609 2.825,-1.64203 3.23109,-3.23109c0.42375,-1.57141 -0.05297,-3.26641 -1.23594,-4.39641l-87.20422,-87.20422l87.20422,-87.20422c1.34188,-1.30656 1.73031,-3.28406 1.00641,-4.99672c-0.72391,-1.73031 -2.41891,-2.825 -4.29047,-2.75437z"></path></g></g></svg></div>`,
            show:false,
            popupData:"",

        }
      },
      created() {
        const BaseData = "http://13.124.215.190/admin/api/youtube_data"
        this.$Axios.get(BaseData,{mode:'page'})
        .then((result)=>{
            let getData = result.data.result.filter((x)=>{
                return x.private == 1
            })
            this.movies = getData.slice(0,8)
        })
    },
    methods:{
        closePopup(data){
            this.show = data
        },
        youtubeBoxShow(data){
            this.show = true
            this.popupData = data
        }
    }   
}
</script>

<style lang="scss">
    @import '@/assets/mixin.scss';


    section.farm-movie{
        div.wrap{
            @media (max-width:767px) {
                width: 95%;
            }            
        h2{
            border-bottom: 1px solid #d0d0d0;
            padding-bottom: 15px;
            vertical-align: middle;
            text-align: left;
            margin-bottom: 15px;
            }
        }
        div.youtubes{
            text-align: center;
                .VueCarousel-navigation{
                    z-index: 90;
                    top: 55px;
                }
                .VueCarousel-navigation-next{
                    right: 25%;
                }
                .VueCarousel-navigation-prev{
                    left: 25%;
                }
                div.slide_inner{
                    cursor: pointer;
                    margin: 10px;
                    @include shadowDefault();
                    img{
                        width: 100%;
                    }
                    div.hover{
                        top: 0;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(255,255,255,0.2);
                        z-index: 90;
                        transition: .15s ease-in-out;
                        img{
                            width: 100px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            transition: 0.1s ease-in-out;
                        }
                        &:hover img{
                            width: 110px;
                        }
                    
                    }
                
                }
                h3{
                    width: 90%;
                    margin: 0 auto;
                    font-size: 0.875rem;
                    font-weight: bold;
                    text-align: center;
                }
        }
    }
    
</style>