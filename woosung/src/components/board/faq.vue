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

            <list-number 
            :dataLength='filters.length' 
            :standard="Standard" 
            @child="parent" />
            
        </section>
    </div>
</template>

<script>
    export default {
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