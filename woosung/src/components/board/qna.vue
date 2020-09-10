<template>
    <div>
        <section class='section1'>
            <div class='wrap'>
                <h2>묻고 답하기</h2>
                <nav>
                    <div class='btn' @click="changeMode" v-if="writeMode">문의 게시판</div>
                    <router-link tag='div' class='btn' v-if="boardMode" to='qnawrite/'>문의하기</router-link>
                </nav>

                <table v-if="boardMode">
                    <thead>
                        <tr>
                            <td>접수번호</td>
                            <td>상태</td>
                            <td>제목</td>
                            <td>작성자</td>
                            <td>작성일</td>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link tag='tr' v-bind:to="'zoomqna/'+board.idx" v-for="(board,i) in boards" :key='i'
                            v-if='i < limit && i >= limit-Standard'>
                            <td>{{i+1}}</td>


                            <td>{{board.status}}</td>

                            <td v-if="board.private" class='r_text'>비공개 글입니다</td>
                            <td v-else>{{board.title}}</td>
                            <td>{{board.writer}}</td>
                            <td>{{$moment(board.date).format('YYYY-MM-DD')}}</td>

                        </router-link>
                    </tbody>
                </table>
                <list-number :dataLength='boards.length' :standard="Standard" @child="parent" />
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        metaInfo() {
            return {
                title: '우성소프트',
                titleTemplate: `%s | 묻고 답하기`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
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
                login: false,
                Standard: 15,
                //vuex로 로그인 관리 묻고답하기
                boardMode: true,
                writeMode: false,
                file: '',
                //true 문의 게시판 false 문의하기
                limit: 10,
                start: 0,
                boards: ''
            }
        },
        created() {
            const BaseData = "http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/qna"
            this.$Axios.get(BaseData)
                .then((result) => {
                    this.boards = result.data.result;
                })
        },
        methods: {
            parent(data) {
                this.limit = data.page * this.Standard;
            },
            changeMode() {
                this.boardMode == true ? this.boardMode = false : this.boardMode = true
                this.writeMode == true ? this.writeMode = false : this.writeMode = true
            },
        }
    }
</script>

<style lang="scss">
    @import './table.scss';
</style>