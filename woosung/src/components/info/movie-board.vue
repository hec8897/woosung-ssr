<template>
<section class='movie wrap'>
                <h2>정보 동영상</h2>

                <ul class='nav'>

                    <li 
                        v-bind:class="{active:mode=='전체'}"
                        @click="CateFilter('전체')">
                        전체
                    </li>

                    <li
                        v-for="midCate in midCates" 
                        @click="CateFilter(midCate)"
                        :key='midCate.idx'
                        v-bind:class="{active:mode==midCate}">
                        {{midCate}}
                    </li>

                </ul>

                <ul class='content'>

                    <li v-if="filters[0]==undefined" class='none'>
                        <p>등록된 영상이 없습니다.</p>
                    </li>

                    <li 
                    v-for="(filter,i) in filters" 
                    :key='i' 
                    v-if="i < limit && i >= limit-Standard"
                    >
                        <div class='thumbnail' @click="youtubeBoxShow(filter)">
                            <img v-bind:src="'https://i.ytimg.com/vi/'+filter.youtubeId+'/0.jpg'">
                            썸네일 이미지
                        </div>
                        <div class='text-box'>
                            <h3 @click="youtubeBoxShow(filter)">{{filter.title}}</h3>
                            <p>{{filter.desc}}</p>
                            <p class='date'>게시일 : {{$moment(filter.date).format('YYYY-MM-DD')}}</p>
                        </div>
                    </li>
                </ul>

                <list-number 
                    :dataLength='filters.length' 
                    :standard="Standard"
                    @child="parent" />

                <MoviePopup 
                    v-bind:show="show" 
                    v-bind:data="popupData"
                    @child="closePopup"/>

    
            </section>
</template>

<script>
import MoviePopup from '@/components/modal/modal-movie.vue'
export default {
    components:{MoviePopup},
    metaInfo(){
      return{
        title:'우성소프트',
        titleTemplate: `%s | 정보 동영상`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
        meta:[
          {name: 'description', content:`30년전 우성소프트의 사명(社名)은 우성의 프로그램을 사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다. 30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로 고객의 성공이 회사의 사명(使命)이 되었습니다.`},
          {name: 'keyword', content:`PLS, pls 판매기록, 우성소프트, 우성컴퓨터, 작물보호제, 기업 역량, 회사 연혁`},
        ],
      }
    },
    data(){
        return{
            mode:'전체',
            filters:"",
            movies:"",
            start:0,
            limit:10,
            Standard:10,
            midCates:['우성소프트','농사 정보','농약 정보','농진청 유튜브','유용한 정보'],
            show:false,
            popupData:"",

        }
    },
    watch:{
  
    },
    created() {
        const BaseData = "http://13.124.215.190/admin/api/youtube_data"
        this.$Axios.get(BaseData)
        .then((result)=>{
            
            this.movies = result.data.result.filter((x)=>{
                return x.private == 1
            })
            this.mode = '전체'
            this.filters = this.movies;
        })
    },
    methods: {
        parent(data){
            this.limit = data.page*this.Standard;
        },
        closePopup(data){
            this.show = data
        },
        youtubeBoxShow(data){
            this.show = true
            this.popupData = data
        },
        CateFilter(value){
            if(value == '전체'){
                this.mode = '전체'
                this.filters = this.movies
            }
            else{
                this.mode = value
                this.filters = this.movies.filter(function(Data){
                    return Data.cate == value
                })
            }
        }
    },
}
</script>

<style lang="scss">
@import './common.scss';

section.movie{
    
    ul.content{
        @media (max-width:767px) {
            margin-top: 50px;
        }
        li{
            border-bottom: 1px solid #d0d0d0;;
            padding: 20px 0px;
            @media (max-width:767px) {
                text-align: center;
            }
            &:nth-child(1){
                border-top: 1px solid #d0d0d0;
            }
            &>div{
                vertical-align: middle;
            }
            &.none{
                padding: 50px 0px;
            }
            div.thumbnail{
                        width: 320px;
                        height: 200px;
                        background-color: $lightgray;
                        display: inline-block;
                        overflow: hidden;
                        border-radius: 3px;
                        cursor: pointer;
                        img{
                            margin-top: -20px;
                            width: 100%;
                        }
                        @media (max-width:1024px) {
                            display: block;
                            margin: 0 auto;
                        }
                    }
                    div.text-box{
                        max-width: 60%;
                        margin-left: 2%;
                        display: inline-block;
                        @media (max-width:1024px) {
                            max-width: 90%;
                            margin: 0;
                            margin-top: 20px;
                            text-align: left;
                        }

                        h3{
                            font-size: 1.25rem;
                            margin-bottom: 20px;
                            cursor: pointer;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        p{
                            font-size: 0.875rem;
                        }
                        p.date{
                            margin-top: 20px;
                        }
                    }
                    div.youtube_box{
                        width: 70%;
                        height: 500px;
                        background-color: #d0d0d0;
                        margin: 20px auto;
                        display: none;
                        @media (max-width:767px) {
                            width: 90%;
                            height: 250px;

                        }

                    }
                }
            }
    }
    
</style>