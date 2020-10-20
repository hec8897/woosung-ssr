<template>
    <div class='notice'>

        <h2>
            <span>공지사항</span>
            <router-link tag="span" to="/board/support" class='more'>
                <b>더보기 +</b>
            </router-link>
        </h2>

        <ul class='notices'>
            <li v-for='notice in notices' :key='notice.idx'>
                <router-link tag='p' v-bind:to="'/board/zoom/'+notice.idx" v-html="notice.title" />
                <span>{{$moment(notice.date).format('YYYY-MM-DD')}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                notices:null
                }
        },
        created() {
            const BaseData = "http://13.124.215.190/admin/api/support"
            this.$Axios.get(BaseData)
                .then((result) => {
                    let DataResult = result.data.result.filter((x) => {
                        return x.active == 1 && x.fixed == 1 && x.cate!='cafe'
                    });
                    this.notices = DataResult.slice(0,5)
                })
        },
    }
</script>

<style lang="scss">
@import '@/assets/define.scss';

div.notice{
    ul{
        li{
            text-align: left;
            font-size: 1rem;
            margin: 10px 0px;
            overflow: hidden;
            cursor: pointer;
                p{
                    width: 80%;
                    height: 100%;
                    display: inline-block;
                    vertical-align: middle;
                    @include textOverFlow();
                    &:hover{
                        text-decoration: underline;
                    }
                }
                span{
                    position: absolute;
                    right: 0;
                    font-size: 0.875rem;
                }
            }
        }
}
    
</style>