<template>
    <section class='section1 zoom'>
        <passwordQna v-if="board.private == '1'" v-bind:password='board.password' @child="parent" />
        <div class='wrap' v-else>
            <h2>묻고 답하기</h2>
            <div class='zoom_table'>
                <div class='head'>
                    <p>묻고 답하기
                      {{board.cate}} <span>
                            {{$moment(board.date).format('YYYY-MM-DD')}}</span></p>
                    <h4>{{board.title}}</h4>
                    <p>작성자: {{board.writer}}</p>
                </div>
                <div class='desc'>
                    <p>{{board.desc}}</p>
                    <div class='answer'>
                        <h3 class='b_text'>답변</h3>
                        <textarea v-if="board.recive!=null" v-html="board.recive" resize="none" readonly></textarea>
                        <p v-else>답변 대기 중 입니다.</p>
                    </div>
                </div>
            </div>
            <router-link tag='div' to="/board/qna" class='btn'>목록</router-link>
        </div>
    </section>
</template>

<script>
    import passwordQna from './password-qna';
    export default {
        props: ['idx'],
        components: {
            passwordQna
        },
        created() {
            let idx = this.idx;
            const BaseData = `http://13.124.215.190/admin/api/qna/${idx}`
            this.$Axios.post(BaseData, {
                    idx
                })
                .then((result) => {
                    this.board = result.data.result[0];
                    this.mode = 'load'
                })
        },
        data() {
            return {
                board: {
                    no: 0,
                    cate: '',
                    tit: "",
                    desc: "",
                    recive: "",
                    status: "",
                    date: ''
                }
            }
        },
        methods: {
            parent() {
                this.board.private = 0
            },
        }
    }
</script>
<style lang="scss">
@import './table.scss';
div.btn{
    margin-right: 5px;
}
    
</style>