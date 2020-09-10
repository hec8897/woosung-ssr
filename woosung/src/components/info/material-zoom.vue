<template>
    <section class='material_view wrap'>
        <div class='head'>
            <h2><span class='sub_tit'>{{content.company}}</span> - {{content.name}} </h2>
            <p>{{content.exp}}</p>
            <img v-bind:src="content.img">
        </div>
        <div class='body'>
            <div v-html="content.desc" class='desc'></div>
            <div class='file' v-if="content.file"><a v-bind:href="content.file" target='blank'>첨부파일 다운받기</a>
                <b-icon icon="download"></b-icon>
            </div>
        </div>
        <div class='btns'>
            <router-link tag='div' to='/information/info4' class='btn'>목록</router-link>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['idx'],
        metaInfo() {
            return {
                title: '우성소프트',
                titleTemplate: `%s | ${this.content.company} - ${this.content.name}`, // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 
                meta: [{
                        name: 'description',
                        content: `30년전 우성소프트의 사명(社名)은 우성의 프로그램을 사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다. 30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로 고객의 성공이 회사의 사명(使命)이 되었습니다.`
                    },
                    {
                        name: 'keyword',
                        content: `${this.content.name}, PLS, pls 판매기록,경농,농협케미컬,동방아그로,바이엘,성보화학,신젠타,인바이오,함국삼공,팜한농,한얼사이언스`
                    },
                ],
            }
        },
        data() {

            return {
                content: Array
            }
        },
        created() {
            this.$Axios.post('http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_item/zoom', {
                    idx: this.idx
                })
                .then((result) => {
                    this.content = result.data.result[0]
                    //데이터 업데이트

                    this.$Axios.post(
                        'http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_item/join', {
                            idx: this.content.idx,
                            join: this.content.join + 1
                        })
                    //조회수 업데이트
                })
        },
    }
</script>

<style lang="scss">
    section.material_view {
        div.head {
            margin-bottom: 20px;
            text-align: center;

            img {
                max-height: 350px;
                margin: 20px 0px;
            }
        }

        div.body {
            border-bottom: 1px solid #d0d0d0;
            padding-bottom: 50px;

            div.desc {
                img {
                    max-width: 100%;
                    display: block;
                    margin: 0 auto;
                }

                * {
                    text-align: inherit;
                }
            }

            div.file {
                text-align: center;
                font-weight: bold;

                a {
                    margin-right: 5px;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }

        div.btns {
            text-align: right;
        }
    }
</style>