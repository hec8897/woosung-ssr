<template>
    <div class='info'>
        <div class='head_banner'>
            <h3>정보공유</h3>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
div.info{
      div.head_banner{
        width: 100%;
        height: 500px;
        background-size: cover;;
        background-image: url(../assets/image/info/head_banner.jpg);
        background-position: center;
        h3{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 2.2rem;
            font-weight: bold;
            color: #444;
            text-align: center;
            letter-spacing: 2px;
        }
      }
}
    
</style>