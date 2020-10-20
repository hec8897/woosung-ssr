<template>
<div class='support'>

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
    metaInfo() {
        return {
            title: '우성소프트',
            titleTemplate: `%s | ${this.board.tit}`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
            meta: [{
                    name: 'description',
                    content: `${this.board.tit}`
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
            test: '',
            board: {
                no: 0,
                cate: '',
                tit: "",
                desc: "",
                date: ''
            }
        }
    },
    created() {
        let idx = this.idx;
        const BaseData = `http://13.124.215.190/admin/api/faq/${idx}`
        this.$Axios.post(BaseData, {
                idx
            })
            .then((result) => {
                this.board = result.data.result[0];

                this.$Axios.post(
                    'http://13.124.215.190/admin/api/faq/join', {
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
