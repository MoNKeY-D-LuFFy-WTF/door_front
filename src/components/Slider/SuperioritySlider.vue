<template>
    <swiper :pagination="{
        clickable: true,
    }" :modules="modules" :loop="true" class="swiper" :slides-per-view="1" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide>
            <div class="superiority__item">
                <i class="fa-regular fa-file"></i>
                <h6>5 лет гарантии</h6>
                <p>
                    Собственное производство полного цикла. Контроль качества на каждом этапе. Две фабрики в Костроме и
                    Фрязино.</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="superiority__item">
                <i class="fa-solid fa-flag-checkered"></i>
                <h6>300+ моделей дверей</h6>
                <p>
                    70 вариантов cовременных покрытий и 10+ систем открывания.
                </p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="superiority__item">
                <i class="fa-brands fa-envira"></i>
                <h6>Без ПВХ и ДСП</h6>
                <p>
                    Межкомнатные двери Porta prima соответствуют европейским эко-страндартам. 100% экологичность.
                </p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="superiority__item">
                <i class="fa-solid fa-maximize"></i>
                <h6>Сервис «под ключ»</h6>
                <p>
                    Полный цикл услуг: замер, производство, доставка, монтаж.
                </p>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>
<style scoped>
.swiper {
    width: 100%;
}

.superiority__item {
    cursor: pointer;
    flex: 1 1 25%;
    margin: 0px 0px 40px 0px;
}

.superiority__item h6 {
    font-weight: 700;
    font-size: calc(16px + 4 * (100vw / 1336));
    line-height: 23px;
    color: #333;
    margin-bottom: 10px;
}

.superiority__item p {
    color: #666;
    padding: 30px 30px 0;
}

.superiority__item i {
    font-size: calc(35px + 25 * (100vw / 1336));
    margin: 0px 0px 10px 0px;
    color: #666;

}
</style>