<template>
    <div class='support'>
        <div class='board_head'>
            <h3>고객지원센터</h3>
        </div>
        <section class='section1 zoom'>
            <div class='wrap'>
                <h2>자주 묻는 질문</h2>
                <div class='zoom_table'>
                    <div class='head'>
                        <p>자주 묻는 질문
                            <b v-if="board.cate === 'pro'">Win-Win Pro</b>
                            <b v-else-if="board.cate === 'pos'">Win-Win 포스</b>
                            <b v-else-if="board.cate === 'etc'">기타</b>

                            <span> {{$moment(board.date).format('YYYY-MM-DD')}}</span>
                            <span> 조회수 : {{board.join}}</span>
                        </p>
                        <h4>{{board.tit}}</h4>
                    </div>
                    <div class='desc' v-html="board.desc"></div>

                </div>
                <router-link tag='div' to="/board/faq" class='btn'>목록</router-link>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        props: ['idx', 'data'],
        data() {
            return {
                test: '',
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
            const BaseData = `http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/faq/${idx}`
            this.$Axios.post(BaseData, {
                    idx
                })
                .then((result) => {
                    this.board = result.data.result[0];

                    this.$Axios.post(
                        'http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/faq/join', {
                            idx: this.board.idx,
                            join: this.board.join + 1
                        })
                })
        }

    }
</script>

<style lang="scss">
    @import './table.scss';
</style>