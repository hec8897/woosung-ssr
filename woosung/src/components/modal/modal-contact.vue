<template>
<div class='popup contact'>
        <div class='contact_box'>
            <h2>상담 신청</h2>
            <input type='text' v-model="InsertData.write" placeholder="신청자"/>
            <select v-model="InsertData.desc">
                    <option value="" disabled selected>상담 내용</option>
                    <option v-for="(cate,i) in cates" :key='i' :value="cate"> {{cate}}</option>
                </select>
            <input type='text' v-model="InsertData.contact" placeholder="연락처"/>
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
            <div class="checkbox">
                <input type="checkbox" id="checkbox_1" v-model="checked" />
                <label for="checkbox_1">개인정보수집 및 이용에 동의합니다.</label>
            </div>
            <div class='btns'>
                <div class='btn t_blue' @click="postData">상담신청하기</div>
                <div class='btn t_red' @click="popupclose">닫기</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        data(){
        return{
            checked:false,
            cates:['Win-Win Pro','결제 연동','Win-Win 포스','기타'],
            InsertData:{
                mode:"insert",
                cate:"conatct",
                write:"",
                contact:"",
                desc:"",
                status:"상담 신청",
                tit:"위젯 온라인 상담 신청",
                private:true,
                password:'woosung',
                date:this.$moment().format('YYYY-MM-DD')

            }
        }
    },
        methods: {
        popupclose(){
            this.$emit("child",false)
        },
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
                
                const BaseData = `http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/qna/new`

                
                this.$Axios.post(BaseData,this.InsertData)
                .then((result)=>{
                    if(result.data.query == 'ok'){
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

div.popup.contact{
    div.contact_box{
        width: 100%;
        height: 75vh;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999;
        h2{
            text-align: left;
            margin-bottom: 20px;
        }
        @media (max-width:1024px) {
            max-width: 90%;
        }
    }
    div.contact_box{
        width: 30%;
        background-color: #fff;
        padding: 50px 20px;
        box-sizing: border-box;
        @media (max-width:1200px) {
            width: 90%;
            max-width: 500px;
            padding: 30px 20px;
            height: 90vh;
        }
        @media (max-width:1024px) {
            padding: 30px 20px;
            height: 90vh;
        }
        p{
            text-align: left;
        }
        div.p_box{
            height: 40%;
            @media (max-width: 1024px) {
                height: 30%;
            }
        }

        input,select{
            width: 100%;
            margin-bottom: 10px;
            font-size: 0.75rem;
            box-sizing: border-box;
            &::placeholder{
                font-size: 0.75rem;
            }
        }
     
        div.checkbox{
            margin-top: 20px;
            text-align: left;
        
            input{
                width: 20px;
                height: 20px;
                display: inline;
            }
            label{
                cursor: pointer;
                vertical-align: top;
                margin-left: 20px;
            }
        }
        div.btns{
            position: absolute;
            bottom: 10px;
            left: 50%;
            width: 90%;
            transform: translateX(-50%);
            div.btn{
                width: 100%;
                margin-bottom: 10px;
                margin-top: 0px;
                    text-align: center!important;
                &.t_red{
                    background-color: $redPoint;
                    color: white;
                }
                &.t_blue{
                    background-color: $PointColor;
                    color: white;
                }
            }
        }
    }

}

    
</style>