<template>
    <div>
                <section class='section1'>
            <div class='wrap'>
                <h2>고객지원센터</h2>

                <table v-if="boardMode">
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>분류</td>
                            <td>제목</td>
                            <td>조회수</td>
                            <td>작성일</td>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link 
                        v-bind:to="'zoom/'+board.idx" 
                        tag='tr' v-for='(board,i) in boards' 
                        v-if='i < limit && i >= limit-Standard' :key='i'>
                            <td>{{i+1}}</td>
                            <td>{{board.cate}}</td>
                            <td>{{board.title}}
                            </td>
                            <td>
                                {{board.join}}                       
                            </td>
                            <td>{{$moment(board.date).format('YYYY-MM-DD')}}</td>
                        </router-link>
                    </tbody>
                </table>
                <list-number 
                :dataLength='boards.length' :standard="Standard" @child="parent" />
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
        return{
            login:false,
            Standard: 15,
            //vuex로 로그인 관리 묻고답하기
            boardMode:true,
            writeMode:false,
            file:'',
            //true 문의 게시판 false 문의하기
            limit:10,
            start:0,
            boards:''
        }
        },
        created() {
            const BaseData = "http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/support"
            this.$Axios.get(BaseData)
                .then((result) => {
                    this.boards = result.data.result;
                })
        },
        methods: {
            parent(data) {
                this.limit = data.page * this.Standard;
            },
            changeMode(){
                this.boardMode == true?this.boardMode = false:this.boardMode = true
                this.writeMode == true?this.writeMode = false:this.writeMode = true
            },
        }
    }
</script>

<style lang="scss">
@import './table.scss';
    
</style>