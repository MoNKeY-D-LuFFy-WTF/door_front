<template>
    <swiper :pagination="{
        clickable: true,
    }" :modules="modules" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
    }" :loop="true" class="swiper">
        <swiper-slide class="swiper__item" v-for="slide in data"
            :style="`background: url(${backURL}/banners/${slide.id}/img) center/cover no-repeat;`">
            <div class="swiper__title">
                {{ slide.title }}
            </div>
            <div class="swiper__subtitle">
                <p>{{ slide.subtitle }}</p>
            </div>
            <div class="swiper__button">
                <router-link :to="!slide.url ? `/`:slide.url ">
                    Подробнее
                </router-link>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            data: '',
            backURL: "http://127.0.0.1:8000/api",
        }
    },
    methods: {
        getData() {
            axios.get(`${this.backURL}/banners`)
                .then(response => {
                    this.data = response.data;
                    console.log(this.data);
                });
        },
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    mounted() {
        this.getData()
    },


}
</script>
<style scoped>
.swiper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.swiper__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: #fff;
}

.swiper__title {
    margin: 0px 40% 0px 0px;
    font-size: calc(35px + 25 * (100vw / 1336));
}

.swiper__subtitle {
    margin: 0px 40% 0px 0px;
    font-size: calc(10px + 8 * (100vw / 1336));
}

.swiper__button {
    margin: 0px 40% 0px 0px;

}

.swiper__button a {
    text-decoration: none;
    padding: 10px 25px;
    border-radius: 5px;
    background: #8f332f;
    color: #fff;
}

.swiper__button a:hover {
    background: #7b2b27;
}

@media (max-width: 767px) {
    .swiper__item {
        background-position: top !important;
        background-size: 100% 150px !important;
        justify-content: flex-end;
        gap: 5px;
    }

    .swiper {
        height: 50vh;
    }

    .swiper__title,
    .swiper__subtitle,
    .swiper__button {
        margin: 0;
        color: #000;
        text-align: center;

    }

    .swiper__button {
        margin: 0px 0px 45px 0px;

    }
}

@media (max-width: 480px) {}
</style>