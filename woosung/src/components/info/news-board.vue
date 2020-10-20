<template>
    <section class='farm'>
        <div class='content wrap'>
            <h2>농업계 소식</h2>

            <ul class='content_main'>
                <li v-for="(content,i) in contents" v-if="i < limit && i >= limit-Standard" :key='i'
                    @click="popupBoxShow(content)">
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
        metaInfo() {
            return {
                title: '우성소프트',
                titleTemplate: `%s | 농업계 소식`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
                meta: [{
                        name: 'description',
                        content: `30년전 우성소프트의 사명(社名)은 우성의 프로그램을 사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다. 30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로 고객의 성공이 회사의 사명(使命)이 되었습니다.`
                    },
                    {
                        name: 'keyword',
                        content: `PLS, pls 판매기록, 우성소프트, 우성컴퓨터, 작물보호제, 기업 역량, 회사 연혁`
                    },
                ],
            }
        },
        components: {
            FarmPopup
        },
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

            const BaseData = "http://13.124.215.190/admin/api/farm_data"
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
            closePopup(data) {
                this.show = data
            },
            popupBoxShow(data) {
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