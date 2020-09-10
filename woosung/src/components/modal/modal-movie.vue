<template>
    <div class='popup' v-if="show" @click="closePopup">
        <div class='youtube_popup'>
            <iframe width="100%" height="100%" v-bind:src="'https://www.youtube.com/embed/'+data.youtubeId"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    props:['data','show'],
    methods: {
        closePopup(){
            this.$emit("child",false)
        }
    },
}
</script>

<style lang="scss">
div.popup{
        div.youtube_popup{
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
}
</style>