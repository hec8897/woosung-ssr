<template>
    <div class='page'>
        <ul>
            <li
                class='btn_page'
                :class="{btn_active:prev}"
                @click="PevPage"
            >
            이전
            </li>
            <li 
                v-for="i in NumberLength" 
                :key="i" 
                :class="{active:Active == i}"
                @click="pageNumber(i)"
                v-if="i < limit && limit-5 < i+1"
            >{{i}}</li>
            <li
            class='btn_page'
            :class="{btn_active:next}"
            @click="NextPage()"
            >
            다음
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['dataLength','standard'],
    //dataLength : 원본 데이터.length
    //standard : 데이터 테이블 row 길이
    data(){
        return{
            Active:1,
            prev:false,
            next:'',
            limit:'6',
            NumberLength:null
        }
    },
    created(){
        let page = Number(this.$route.params.page)
        this.pageNumber(1)
        if(this.$route.params.page > 5){
            this.limit = Math.round(page/10)*10
        }
    },
    mounted(){  
        let Standard = Number(this.standard)
        this.NumberLength = Math.round(this.dataLength/Standard)+1
        this.prev = this.$route.params.page > 5?true:false
        this.next = this.limit < this.NumberLength?true:false

    },
    watch: {
        '$route' (to, from) {
            //라우터 변동 감시
            // this.pageNumber(to.params.page)
            this.pageNumber(1)

        },
        dataLength(){
            let Standard = Number(this.standard)
            this.prev = this.$route.params.page > 5?true:false
            this.next = this.limit < this.NumberLength?true:false
            
            this.NumberLength = this.dataLength > 15 ? Math.round(this.dataLength/Standard)+1 : Math.round(this.dataLength/Standard)
        }
    },

    methods:{
        pageNumber(i){
            let page = Number(i);
            let Standard = Number(this.standard);
            this.Active = page;
            let limit = (page+1)*Standard;

            this.$emit("child",{page})
        },  
        NextPage(){
            if(this.next){
                let i = Number(this.limit)
                this.pageNumber(i)
                this.limit = i+=5;
                this.prev = true
            }
        },
        PevPage(){
            if(this.prev){
                let i = Number(this.limit)
                this.limit = i-=5;
                this.pageNumber(this.limit-1)
            }
        }
    }
    
    
}
</script>

<style lang="scss">
div.page{
    margin: 20px 0px;
    ul{
        padding: 0;
        text-align: center;
        li{
            display: inline-block;
            margin: 5px;
            cursor: pointer;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border: 1px solid #d0d0d0;
            &.active{
                font-weight: bold;
                background: mediumaquamarine;
                color: #fff;
                border: 1px solid  mediumaquamarine;
            }
           
            &.btn_page{
                color: #d0d0d0;
            }
            &.btn_active{
                font-weight: bold;
                color :#222;
            }
             &:hover{
                background: mediumaquamarine;
                color: #fff;
            }
        }
    }
}
    
</style>