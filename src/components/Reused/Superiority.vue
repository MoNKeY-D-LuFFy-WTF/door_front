<template>
    <div class="instalment__container">
        <div class="superiority ">
            <div class="superiority__text">
                <div class="superiority__title">
                    <h2>Функциональное превосходство</h2>
                </div>
                <div class="superiority__subtitle">
                    <p>
                        Porta prima в переводе с итальянского означает «Дверь № 1», что призвано отразить высокое
                        качество и
                        итальянский стиль в дизайне. Фабрика Porta prima создает и реализует межкомнатные двери с 1993
                        года.
                    </p>
                </div>
            </div>
            <div class="superiority__items">
                <div class="superiority__item">
                    <i class="fa-regular fa-file"></i>
                    <h6>5 лет гарантии</h6>
                    <p>
                        Собственное производство полного цикла. Контроль качества на каждом этапе. Две фабрики в
                        Костроме и
                        Фрязино.</p>
                </div>
                <div class="superiority__item">
                    <i class="fa-solid fa-flag-checkered"></i>
                    <h6>300+ моделей дверей</h6>
                    <p>
                        70 вариантов cовременных покрытий и 10+ систем открывания.
                    </p>
                </div>
                <div class="superiority__item">
                    <i class="fa-brands fa-envira"></i>
                    <h6>Без ПВХ и ДСП</h6>
                    <p>
                        Межкомнатные двери Porta prima соответствуют европейским эко-страндартам. 100% экологичность.
                    </p>
                </div>
                <div class="superiority__item">
                    <i class="fa-solid fa-maximize"></i>
                    <h6>Сервис «под ключ»</h6>
                    <p>
                        Полный цикл услуг: замер, производство, доставка, монтаж.
                    </p>
                </div>
            </div>
            <SuperioritySlider class="slider" />
        </div>
    </div>
</template>
<script>
import SuperioritySlider from '@/components/Slider/SuperioritySlider.vue';
export default {
    components: {
        SuperioritySlider
    }
}
</script>

<style scoped>
.superiority {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: calc(40px + 40 * (100vw / 1336));
    margin: 4rem 0px 0px 0px;
}

.superiority__text {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(25px + 10 * (100vw / 1336));
}


.superiority__subtitle {
    color: #666;
}

.superiority__items {
    display: flex;
    justify-content: space-between;
    gap: calc(30px + 15 * (100vw / 1336));
}

.superiority__item {
    cursor: pointer;
    flex: 1 1 25%;
    transition: all .2s normal;
}

.superiority__item:hover {
    transform: translateY(-10%);
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
}

.superiority__item i {
    font-size: calc(35px + 25 * (100vw / 1336));
    margin: 0px 0px 10px 0px;
    color: #666;

}

.slider {
    display: none;
}

@media (max-width: 992px) {}

@media (max-width: 767px) {
    .superiority__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }
}

@media (max-width: 740px) {
    .superiority__items {
        display: none;
    }

    .slider {
        display: block;
    }
}
</style>