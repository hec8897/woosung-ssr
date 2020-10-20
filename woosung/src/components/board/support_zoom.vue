<template>
    <div class='support'>
        <section class='section1 zoom'>
            <div class='wrap'>
                <h2>고객지원센터</h2>
                <div class='zoom_table'>
                    <div class='head'>
                        <p>고객지원센터
                            <b v-if="board.cate === 'error'">시스템 장애</b>
                            <b v-else-if="board.cate === 'update'">업데이트</b>
                            <b v-else-if="board.cate === 'info'">공지사항</b>
                            <b v-else-if="board.cate === 'notice'">정보</b>

                            <span> {{$moment(board.date).format('YYYY-MM-DD')}}</span>
                        </p>
                        <h4>{{board.title}}</h4>
                    </div>
                    <div class='desc' v-html="board.desc"></div>
                    <div class='foot' v-if="files!==''">
                        <p v-for="(file,i) in files" :key='i'>
                            <a v-bind:href="'../woosung_api/upload_support/'+file" download> {{file}}</a>
                            <b-icon icon="download" />
                        </p>
                    </div>
                </div>
                <router-link tag='div' to="/board/support" class='btn'>목록</router-link>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        props: ['idx', 'data'],
        metaInfo() {
            return {
                title: '우성소프트',
                titleTemplate: `%s | ${this.board.title}`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
                meta: [{
                        name: 'description',
                        content: `${this.board.title}`
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
                files: "",
                board: {
                    no: 0,
                    cate: '',
                    title: "",
                    desc: "",
                    date: ''
                }
            }
        },
        created() {
            let idx = this.idx;
            const BaseData = `http://13.124.215.190/admin/api/support/${idx}`
            this.$Axios.post(BaseData, {
                    idx
                })
                .then((result) => {
                    this.board = result.data.result[0];

                    if (this.board.files != null) return this.files = this.board.files.split(',');

                    this.$Axios.post(
                        'http://13.124.215.190/admin/api/support/join', {
                            idx,
                            join: this.board.join + 1
                        })

                })
        }
    }
</script>

<style lang="scss">
    @import './table.scss';
</style>