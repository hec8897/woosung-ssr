<template>
    <div class='popup' v-if="show" @click="closePopup">
        <div class='farm_popup'>
            <iframe width="100%" height="100%" v-bind:src="data.link" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" top: allowfullscreen>
                ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    props:['show','data'],
    methods: {
        closePopup(){
            this.$emit("child",false)
        }
    }
}
</script>

<style lang="scss">
div.popup{
    div.farm_popup{
        width: 100%;
        max-width: 1024px;
        height: 60vh;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999;
        @media (max-width:1024px) {
            max-width: 90%;
        }
    }
    div.farm_popup{
        width: 80%;
        height: 80vh;
        @media (max-width:767px) {
            width: 95%;
            height: 80%;
            
        }
    }
}
</style>