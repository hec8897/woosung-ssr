<template>
    <div>
        <nav class='lnb faq_lnb'>
            <div class='wrap'>
                <ul>
                    <li v-for="(listCate,i) in listCates" :key='i' @click="filterData(listCate)"
                        v-bind:class="{active:listCate.value}">
                        <span v-if="listCate.Name=='all'">전체</span>
                        <span v-if="listCate.Name=='pro'">Win-Win pro</span>
                        <span v-if="listCate.Name=='pos'">Win-Win pos</span>
                        <span v-if="listCate.Name=='etc'">기타</span>
                    </li>
                </ul>
            </div>
        </nav>

        <section class='wrap'>
            <h2>자주 묻는 질문 FAQ</h2>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>분류</td>
                        <td>제목</td>
                        <td>날짜</td>
                        <td>조회수</td>
                    </tr>
                </thead>
                <tbody>
                    <router-link tag='tr' v-bind:to="'zoomfaq/'+filter.idx" v-for="(filter,i) in filters"
                        v-if='i < limit && i >= limit-Standard' :key='i'>
                        <td>{{i+1}}</td>
                        <td>
                            <span v-if="filter.cate=='pro'">win-win Pro</span>
                            <span v-else-if="filter.cate=='pos'">win-win 포스</span>
                            <span v-else-if="filter.cate=='etc'">기타</span>
                        </td>
                        <td>{{filter.tit}}</td>

                        <td>{{$moment(filter.date).format('YYYY-MM-DD')}}</td>
                        <td>{{filter.join}}</td>

                    </router-link>
                </tbody>
            </table>

            <list-number :dataLength='filters.length' :standard="Standard" @child="parent" />

        </section>
    </div>
</template>

<script>
    export default {
        metaInfo() {
            return {
                title: '우성소프트',
                titleTemplate: `%s | 우성소프트 자주 묻는 질문`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
                meta: [{
                        name: 'description',
                        content: `30년전 우성소프트의 사명(社名)은 우성의 프로그램을 사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다. 30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로 고객의 성공이 회사의 사명(使命)이 되었습니다.`
                    },
                    {
                        name: 'keyword',
                        content: `PLS, pls 판매기록, 우성소프트,우성컴퓨터, 지도, 작물보호제, 기업 역량, 회사 연혁`
                    },
                ],
            }
        },
        data() {
            return {
                Standard: 15,
                filterCate: 'all',
                listCates: [{
                        Name: 'all',
                        value: true
                    },
                    {
                        Name: 'pro',
                        value: false
                    },
                    {
                        Name: 'pos',
                        value: false
                    },
                    {
                        Name: 'etc',
                        value: false
                    },
                ],
                faq: '',
                filters: '',
                limit: 10,
                start: 0
            }
        },
        created() {
            const BaseData = "http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/faq"
            this.$Axios.get(BaseData)
                .then((result) => {
                    this.faqs = result.data.result;
                    this.filters = this.faqs;

                })
        },
        methods: {
            parent(data) {
                this.limit = data.page * this.Standard;
            },
            filterData(cates) {
                // this.ActiveCate = '전체'

                for (let i = 0; i < this.listCates.length; i++) {
                    this.listCates[i].value = false
                }

                cates.value = true
                if (cates.Name == 'all') {
                    this.filters = this.faqs
                } else {

                    this.filters = this.faqs.filter((x) => {
                        return x.cate == cates.Name
                    })
                }


                // eventBus.$emit('UpdateList', {
                //     DataLength: Math.ceil((this.filters.length) / 10),
                //     nowpage: this.limit - 10
                // })
                // this.start = 0
                // this.limit = 10
            },
        }
    }
</script>

<style lang="scss">
    @import './table.scss';

    nav.faq_lnb {
        border-bottom: 1px solid #d0d0d0;

        ul {
            width: 100%;
            height: 50px;
            text-align: center;

            li {
                cursor: pointer;
                width: 25%;
                float: left;
                height: 100%;
                border-left: 1px solid #d0d0d0;
                transition: .1s ease-in-out;
                box-sizing: border-box;
                line-height: 50px;

                &.active {
                    background-color: #d0d0d0;
                }

                &:last-child {
                    border-right: 1px solid #d0d0d0;
                }
            }
        }
    }
</style>