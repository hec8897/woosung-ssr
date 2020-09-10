<template>
    <section class='farm'>
        <div class='content wrap'>
            <h2>농업계 소식</h2>

            <ul class='content_main'>
                <li v-for="(content,i) in contents" v-if="i < limit && i >= limit-Standard" :key='i' @click="popupBoxShow(content)">
                    <!--  -->
                    <div class='img'>
                        <img v-bind:src="content.thumnail">
                    </div>
                    <div class='text'>
                        <h4>{{content.title}}</h4>
                        <p>{{content.desc}}</p>
                        <p class='date'>작성일: {{$moment(content.date).format('YYYY-MM-DD')}}</p>
                    </div>
                </li>
            </ul>

            <FarmPopup v-bind:show="show" v-bind:data="popupData" @child="closePopup" />

            <list-number :dataLength='contents.length' :standard="Standard" @child="parent" />


        </div>
    </section>
</template>

<script>
import FarmPopup from '@/components/modal/modal-news.vue'
    export default {
        components:{FarmPopup},
        data() {
            return {
                show: false,
                start: 0,
                limit: 10,
                Standard: 10,
                popupData: "",
                contents: ""
            }
        },
        created() {

            const BaseData = "http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_data"
            this.$Axios.get(BaseData)
                .then((result) => {
                    this.contents = result.data.result.filter((x) => {
                        return x.private == 1
                    })
                })

        },
        methods: {
            parent(data) {
                this.limit = data.page * this.Standard;
            },
            closePopup(data){
                this.show = data
            },
            popupBoxShow(data){
                this.show = true
                this.popupData = data
            },
            CateFilter(value) {
                if (value == '전체') {
                    this.mode = '전체'
                    this.filters = this.movies
                } else {
                    this.mode = value
                    this.filters = this.movies.filter(function (Data) {
                        return Data.cate == value
                    })
                }
            }
        },
    }
</script>

<style lang="scss">
    @import './common.scss';
</style>