<template>
    <section class='login_page wrap'>
        <h2>패스워드 입력</h2>
        <div class='login_inputs'>
            <ul>
                <li>
                    <input type='password' placeholder="비밀번호를 입력하세요" v-model="inputPassword">
                </li>
                <li>
                    <div class='btn' @click="login">로그인</div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['password'],

        data() {
            return {
                inputPassword: ''
            }
        },

        methods: {
            login() {
                if (this.inputPassword === this.password) {
                    this.$emit("child", true)
                } else {
                    alert('패스워드가 다릅니다.')
                }
            }

        },
    }
</script>

<style lang="scss">
    @import '@/assets/define.scss';

    section.login_page {
        h2 {
            text-align: center;
        }

        ul {
            margin-top: 50px;
            padding: 0;

            @media (max-width:767px) {
                margin-top: 20px;

            }

            li {
                width: 98%;
                max-width: 450px;
                height: 60px;
                margin: 20px auto;

                @media (max-width:767px) {
                    width: 90%;
                    height: 50px;
                }

                input {
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;

                }

                div.btn {
                    width: 100%;
                    height: 100%;
                    line-height: 60px;
                    padding: 0;
                    background-color: $PointColor;
                    font-size: 1.125rem;
                    color: white;
                    margin-top: 0px;
                    text-align: center;
                    box-sizing: border-box;

                    &:hover {
                        background-color: lighten($color: $PointColor, $amount: 10%);
                    }

                    @media (max-width:767px) {
                        line-height: 50px;
                    }
                }

            }

            p {
                width: 100%;
                max-width: 450px;
                margin: 10px auto;

                @media (max-width:767px) {
                    width: 90%;
                }

                a {
                    float: right;
                    text-decoration: underline;
                }
            }
        }
    }
</style>