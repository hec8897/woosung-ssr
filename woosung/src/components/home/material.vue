
<template>
    <div class='news_info'>
        <h2>농자재 정보
            <router-link tag='span' to="information/info4" class='more'><b>더보기</b> +</router-link>
        </h2>
        <div class='news_photo'>
            <Carousel 
            :navigationEnabled="false" 
            :per-page="3" 
            :loop="true">

                <slide v-for='list in lists' :key='list.idx'>
                    <div class='photos'>
                        <router-link tag='div' class='inner_ma' v-bind:to="'information/info4/zoom/'+list.idx">
                            <div class='photo'>
                                <img v-bind:src="list.img">
                            </div>
                            <h4>{{list.name}}</h4>
                            <p> {{list.exp}}</p>

                        </router-link>
                    </div>
                </slide>

            </Carousel>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
components:{
    Carousel,
    Slide,
},
data(){
    return{
        lists:[]
    }
},
created() {
    this.$Axios.get('http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_item')
    .then((result)=>{
        let GetList = result.data.result.filter((x)=>{
            return x.active == 1
        })
        this.lists = GetList.slice(0,9)
    })
    
},
}
</script>

<style lang="scss">
    @import '@/assets/define.scss';
    div.news_info {
        margin-left: 5%;
        @media (max-width:1024px) {
            margin: 0 auto;
        }

        div.news_photo {
            margin-top: 15px;
            text-align: left;
            overflow: hidden;

            @media (max-width:1200px) {
                text-align: center;
            }

            .VueCarousel-pagination {
                display: none;
            }

            div.photos {
                padding: 5px;
                box-sizing: border-box;
                vertical-align: middle;
                text-align: center;
                cursor: pointer;

                img {
                    margin-top: 5px;
                    width: auto;
                    max-height: 90px;
                }


                div.inner_ma {
                    div.photo {
                        width: 100%;
                        min-height: 100px;
                        height: auto;
                        background-color: $lightgray;
                        overflow: hidden;
                        border: 1px solid #d0d0d0;

                        @media (max-width:767px) {
                            height: auto;
                        }
                    }

                    h4 {
                        margin: 10px 0px;
                        text-align: center;
                    }

                    p {
                        height: 50px;
                        overflow: hidden;
                        text-align: left;
                        font-size: 0.75rem;
                        text-align: center;

                        @media (max-width:767px) {
                            height: auto;
                        }
                    }

                    b {
                        font-style: 0.6rem;
                    }

                }
            }
        }

    }
</style>