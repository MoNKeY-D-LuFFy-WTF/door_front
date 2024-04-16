<template>
    <div>
        <div class="container-lg">
            <div class="sale">
                <Tags />
                <mini-nav :data="data" />
                <div class="sale__content">
                    <div class="sale__text">
                        <div class="sale__title">
                            <h5>РАСПРОДАЖА</h5>
                        </div>
                        <div class="sale__list__title">
                            <h6>Распродажа полотен и погонажных изделий — скидка 50%</h6>
                        </div>
                        <ul class="sale__list">
                            <li>Imperia-R — Бежевый/Белый ясень, Клен</li>
                            <li>Maggiore — Дуб шампань, Серый дуб</li>
                            <li>Pianta — Тёмный орех</li>
                            <li>Elegante — Венге нуар, Тёмный орех</li>
                            <li>Torino — Белёный дуб, Венге, Серый Дуб, Белый ясень nano-flex, Белый ясень, Дуб антик,
                                Дымчатый дуб, Дуб шампань</li>
                            <li>Palazzo — Дуб антик, Серый дуб, Дуб капучино, Миланский Орех</li>
                            <li>Felicia — Тёмный орех</li>
                            <li>Vicenza — Венге нуар</li>
                            <li>Tivoli — Венге Ж2, Дуб Натуральный И1, Орех пепельный Ж2/, Итальянский орех Л1/М1,
                                Арктик белый А1, Дуб Антик Е2/Ж2</li>
                            <li>Плинтуса 65мм — Миланский орех</li>
                        </ul>
                        <div class="sale__subtitle">
                            <p>При покупке распродажной двери со складских остатков 600/700 мм, клиент может заказать
                                идентичные полотна размером 800/900 мм со скидкой 30%, но не более 3-х полотен к одной
                                распродажной двери.</p>
                            <p><b>С данными полотнами предлагаем ознакомиться на нашем производственном складе по
                                    адресу: </b><br>
                            </p>
                            <p>
                                Московская обл., Щелковский р-он, г. Фрязино, Заводской пр-д, д. 2, будни с 10.00 до
                                18.00.
                                Cуббота и воскресенье — выходные.
                            </p>
                            <p>
                                Схема проезда к производству <a
                                    href="https://portaprima.ru/upload/ammina.optimizer/jpg-webp/q80/images/karta%20proezda.webp">здесь</a>.
                            </p>
                        </div>
                    </div>
                    <div class="sale__map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3A5d3b54aed20bbf3625f1cfa1c6584f1fe614773a36ceb8e27ac3ad7dbe03d403"
                            frameborder="0" allowfullscreen="true" width="100%" height="300px"
                            style="display: block;"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Tags from "@/components/Tags.vue";
    export default {
        components: {
            Tags
        },
        data() {
            return {
                data: {
                    title: 'Распродажа',
                    list: [
                        {
                            link: '/promation',
                            text: 'Акции компании'
                        },
                        {
                            link: '/instalment',
                            text: 'Рассрочка'
                        },
                        {
                            link: '/sale',
                            text: 'Распродажа'
                        },
                    ],
                }
            }
        },
    }
</script>

<style scoped>
    .sale {
        margin: 1.5rem 0px 5rem 0px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .sale__content {
        display: flex;
        justify-content: space-between;
    }

    .sale__text {
        flex: 1 1 50%;
    }

    .sale__title h5 {
        display: inline-block;
        color: #313434;
        border-bottom: 3px solid #8f332f;
        font-weight: 700;
        line-height: 25px;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .sale__list__title h6 {
        font-weight: 700;
        color: #313434;

    }

    .sale__list li {
        list-style-type: disc;
        color: #313434;
        line-height: calc(15px + 11 * (100vw / 1336));
        margin-bottom: 0.5rem;
    }

    .sale__subtitle p {
        color: #313434;
        font-size: calc(12px + 3 * (100vw / 1336));
    }

    .sale__subtitle p a {
        font-weight: 900;
        color: #313434;
        transition: color normal .3s;
    }

    .sale__subtitle p a:hover {
        color: #8f332f;
        text-decoration: none;
    }

    .sale__map {
        flex: 1 1 50%;

    }

    @media (max-width: 775px) {
        .sale__content {
            flex-direction: column;
        }
    }
</style>