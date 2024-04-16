<template>
    <div>
        <div v-if="video" class="wrapper__video">
            <img src="@/assets/instalment/poster__video.jpg" alt="poster__video">
            <video-btn @click="videoPlay" class="video__btn" />
        </div>
        <div v-else>
            <iframe class="video" src="https://www.youtube.com/embed/j0a9PI16m8g?autoplay=1" allow="autoplay"
                frameborder="0" allowfullscreen=""></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'video-ui',
    data() {
        return {
            video: true,
        }
    },
    methods: {
        videoPlay() {
            this.video = false
        }
    }
}
</script>

<style scoped>
img {
    object-fit: cover;
    width: 100%;
}

.wrapper__video {
    position: relative;
    top: 0;
    left: 0;
}

.wrapper__video .video__btn {
    position: absolute;
    top: 40%;
    left: 45%;
}

.video {
    width: 100%;
    height: calc(200px + 290 * (100vw / 1336));
}


@media (max-width: 480px) {
    .wrapper__video .video__btn {
        top: 30%;
        left: 40.5%;
    }
}
</style>