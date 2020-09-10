<template>
    <div class='board'>
        <div class='board_head'>
            <h3>고객지원센터</h3>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import '@/assets/mixin.scss';

div.board{
    h2{
        font-weight: bold;
        margin-bottom: 30px;
        text-align: center;
    }
    div.board_head{
        width: 100%;
        height: 500px;
        background-image: url(../assets/image/board/faq_head.jpg);;
        h3{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 2.2rem;
            color: #fff;
            text-align: center;
            letter-spacing: 2px;
            width: 100%;
        }
    }
}
    
</style>