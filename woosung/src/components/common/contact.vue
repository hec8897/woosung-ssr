<template>
<section class='consult_section'>
        <div class='wrap'>
            <h2>온라인 상담 문의</h2>
            <div class='consult'>

                <input type='text' placeholder="신청자" v-model="InsertData.write"/>
                <input type='text' placeholder="연락처" v-model="InsertData.contact"/>
                <select v-model="InsertData.desc">
                    <option value="" disabled selected>상담 내용</option>
                    <option v-for="(cate,i) in cates" :key='i' :value="cate"> {{cate}}</option>
                </select>

                <p>                        
                    <input v-model="checked" type="checkbox" id="checkbox_2" />
                    <label for="checkbox_2">개인정보수집 및 이용에 동의합니다.</label>
                </p>

                <div class="p_box">
                <p>우성소프트 개인정보를 중요시 하며 정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다.</p>
                    <ol>
                        <li>
                            개인정보의 수집목적 <br>
                            회사는 수집한 개인정보를 상담 문의 목적을 위해 활용합니다.
                        </li>
                        <li>
                            수집하는 개인정보 항목 <br>
                            회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. <br>
                            수집항목 : 이름, 이메일주소, 휴대폰번호, 전화번호, 그 외 개인이 직접 입력한 내용
                        </li>
                        <li>
                            수집하는 개인정보의 처리 및 보존기간<br>
                            회사는 개인정보의 처리목적이 달성될 때까지 개인정보를 보유하고, 목적이 달성된 후에는 지체없이 파기합니다. <br>
                            다만, 사전동의를 받은 경우 또는 관련 법규에 의하여 보존 필요성이 있는 경우에는 보존할 수 있습니다.
                        </li>
                        <li>
                            동의 거부 권리 및 동의 거부 시 불이익<br>
                            고객은 본 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용에 제한이 있을 수있습니다.
                        </li>
                    </ol>
                </div>

                <div class='btn' @click="postData">상담신청하기</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            checked:false,
            cates:['Win-Win Pro','결제 연동','Win-Win 포스','기타'],
            // localLists:['서울,경기,인천','대전','세종','부산','울산','대구','광주','제주','강원','충남','충북','경북','경남','전남','전북'],
            InsertData:{
                mode:"insert",
                cate:"conatct",
                write:"",
                contact:"",
                desc:"",
                status:"상담 신청",
                tit:"온라인 상담 신청",
                private:1,
                password:'woosung'
            }
        }
    },
    methods: {
        postData(){
            if(this.checked == false){
                alert('개인정보 수집 및 이용에 동의해주세요')
            }
            else if(this.InsertData.write == ""){
                alert('사업장 이름을 입력해주세요')
            }
            else if(this.InsertData.contact == ""){
                alert('연락처를 입력해주세요')
            }
            else{
                
                // const BaseData = "../woosung_api/qna.create.php";
                
                this.$Axios.post(BaseData,this.InsertData)
                .then((result)=>{
                    if(result.data.phpResult == 'ok'){
                        alert('접수되었습니다.')
                    }
                })
            }
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/mixin.scss';

section.consult_section{
    h2{
        text-align: center;
        font-weight: bold;
        margin-bottom: 50px;
    }
    div.consult{
        border-top: 2px solid #222;
        border-bottom: 1px solid #d0d0d0;
        text-align: center;
        padding: 30px 0;

        input[type=text],input[type=number],select{
            width: 32%;
            height: 40px;
            margin: 0px 0.5%;
            display:inline-block;
            box-sizing: border-box;
        }
        p{
            text-align: left;
            padding-left:0.5%;
            margin: 10px 0px;
            input{
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-right: 5px;
                vertical-align: text-top;
            }
            label{
                cursor: pointer;
            }
        }
        div.p_box{
            width: 100%;
            height: 150px;
            border: 2px solid #d9d9d9;
            background: #f9f9f9;
            padding: 20px;
            box-sizing: border-box;
            overflow: hidden;
            overflow-y: scroll;
            font-size: 15px;
                ol{
                    list-style: decimal;
                    margin-left: 10px;
                    text-align: left;
                    li{
                        font-size: 14px;
                        line-height: 20px;
                        margin-bottom: 10px;
                    }
                }
        }
    }
    div.btn{
        padding: 15px 50px;
        background-color: $PointColor;
        color: #fff;
    }
}
    
</style>