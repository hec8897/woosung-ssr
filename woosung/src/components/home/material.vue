
<template>
    <div class='news_info'>
        <h2>농자재 정보
            <router-link tag='span' to="information/info4" class='more'><b>더보기</b> +</router-link>
        </h2>
        <ul>
            <router-link tag='li' v-for='list in lists' :key='list.idx' v-bind:to="'information/info4/zoom/'+list.idx">
                <div class='inner'>
                    <img v-bind:src="list.img">
                </div>
                <div class='text'>
                    <p>{{list.company}}</p>
                    <h4>{{list.name}}</h4>
                    <!-- <p> {{list.exp}}</p> -->

                </div>

            </router-link>
        </ul>
            <!-- <Carousel 
            :navigationEnabled="false" 
            :per-page-custom=[[1024,3],[768,3],[540,3]]
            :loop="true">

                <slide v-for='list in lists' :key='list.idx'> -->
                        <!-- <router-link tag='div' class='inner_ma' v-bind:to="'information/info4/zoom/'+list.idx"> -->
                        <!-- <div class='inner'>
                        <img v-bind:src="list.img">
                        </div>
                        <h4>{{list.name}}</h4> -->
                        <!-- <p> {{list.exp}}</p> -->
                        <!-- </router-link> -->
                <!-- </slide>

            </Carousel> -->
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
        this.lists = GetList.slice(0,3)
    })
    
},
}
</script>

<style lang="scss">
    @import '@/assets/define.scss';
    div.news_info {
        @media (max-width:1024px) {
            margin: 0 auto;
        }
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            li{
                flex: 1 1 20px;
                margin: 5px;
                text-align: center;
                margin-top: 10px;
                border: 1px solid #d0d0d0;
                img{
                    display: inline;
                    width: auto;
                    height: 100px;
                    padding: 10px 0px;
                }
                div.text{
                    border-top: 1px solid #d0d0d0;
                    padding: 10px 0px;
                    background-color: rgba(0, 0, 0, .03);
                    h4{
                        font-size: 0.875rem;
                        font-weight: bold;
                    }
                    p{
                        margin-bottom: 3px;
                        font-size: 0.75rem;
                    }
                }
            }
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




        }
        
                div.inner_ma {
                    text-align: center;
                    img{
                        max-width: 50px;
                    }
                    
                // img {
                //     margin-top: 5px;
                //     width: auto;
                //     max-height: 90px;
                // }

         

            }

    }
</style>