<template>
    <div class="complect__content">
        <div class="instalment__container">
            <h2>Например, расчет для полотна и комплекта межкомнатной двери:</h2>
        </div>
        <div class="complect__items">
            <div class="item-right">
                <div class="complect__item-text">
                    <div class="complect__item-title">
                        <h2>
                            <b>
                                Модель Tivoli A-1
                                <span>Модель Tivoli A-1 </span>
                            </b>
                        </h2>
                    </div>
                    <div class="complect__item-subtitle">
                        <p>
                            <b>Полотно Tivoli A-1, эмаль</b> <br>
                            15 550 11 625 руб. — цена за полотно со скидкой 25%.
                            <b>1 938 руб./мес.</b> — рассрочка на 6 месяцев.
                        </p>
                        <p>
                            <b>Комплект Tivoli A-1, эмаль</b>
                            27 560 23 685 руб. — цена за комплект со скидкой.
                            3 948 руб. / мес. — рассрочка на 6 месяцев.
                        </p>
                    </div>
                    <div class="complect__item-link">
                        <revers-link :link="`/`">Купить в рассрочку</revers-link>
                    </div>
                </div>
                <div class="complect__item-img">
                    <img src="@/assets/instalment/1_complect.jpg" alt="">
                </div>
            </div>
            <div class="item-left">
                <div class="complect__item-img">
                    <img src="@/assets/instalment/2_complect.jpg" alt="">
                </div>
                <div class="complect__item-text">
                    <div class="complect__item-title">
                        <h2>
                            <b>
                                Tivoli A-1 невидимка с зеркалом <br>
                                <span>
                                    3 058 руб./мес
                                </span>
                            </b>
                        </h2>
                    </div>
                    <div class="complect__item-subtitle">
                        <p>
                            <b>Полотно Tivoli A-1 невидимка,
                                грунтованное под отделку с зеркалом</b>
                            22 930 18 344 руб. — цена за полотно со скидкой 20%. <br>
                            <b>3 058 руб./мес.</b> — рассрочка на 6 месяцев.
                        </p>
                        <p>
                            <b> Комплект Tivoli A-1 невидимка,
                                грунтованное под отделку с зеркалом</b>
                            45 270 40 648 руб. — цена за комплект со скидкой.
                            6 774 руб. / мес. — рассрочка на 6 месяцев.

                        </p>
                    </div>
                    <div class="complect__item-link">
                        <revers-link :link="`/`">Купить в рассрочку</revers-link>
                    </div>
                </div>
            </div>
            <div class="item-right">
                <div class="complect__item-text">
                    <div class="complect__item-title">
                        <h2>
                            <b>
                                Sorrento-R В2 <br>
                                <span>2 454 руб./мес.</span>
                            </b>
                        </h2>
                    </div>
                    <div class="complect__item-subtitle">
                        <p>
                            <b> Полотно Sorrento-R В2, эмаль</b>
                            18 400 14 720 руб. — цена за полотно со скидкой 20%. <br>
                            <b> 2 454 руб./мес.</b> — рассрочка на 6 месяцев.
                        </p>
                        <p>
                            <b> Комплект Sorrento-R В2, эмаль</b>
                            27 140 23 460 руб. — цена за комплект со скидкой.
                            3 910 руб. / мес. — рассрочка на 6 месяцев.
                        </p>
                    </div>
                    <div class="complect__item-link">
                        <revers-link :link="`/`">Купить в рассрочку</revers-link>
                    </div>
                </div>
                <div class="complect__item-img">
                    <img src="@/assets/instalment/3_complect.jpg" alt="">
                </div>
            </div>
            <div class="item-left">
                <div class="complect__item-img">
                    <img src="@/assets/instalment/4_complect.jpg" alt="">
                </div>
                <div class="complect__item-text">
                    <div class="complect__item-title">
                        <h2>
                            <b>
                                Tivoli К-1, натуральный шпон <br>
                                <span>
                                    3 534 руб./мес.
                                </span>
                            </b>
                        </h2>
                    </div>
                    <div class="complect__item-subtitle">
                        <p>
                            <b>Полотно Tivoli К-1, натуральный шпон</b>
                            26 500 21 200 руб. — цена за полотно со скидкой 20%. <br>
                            <b>3 534 руб./мес. </b> — рассрочка на 6 месяцев.
                        </p>
                        <p>
                            <b> Комплект Tivoli К-1, натуральный шпон</b>
                            40 450 35 150 руб. — цена за комплект со скидкой. <br>
                            5 859 руб. / мес. — рассрочка на 6 месяцев.
                        </p>
                    </div>
                    <div class="complect__item-link">
                        <revers-link :link="`/`">Купить в рассрочку</revers-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="complect__link mb-5">
            <main-link :link="``">Подобрать дверь</main-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
    font-weight: 400;
    font-size: calc(30px + 20 * (100vw / 1336));
    line-height: 55px;
}


.complect__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(55px + 15 * (100vw / 1336));
}


.item-right {
    display: flex;
    align-items: center;
    padding-left: 3%;
}

.item-left {
    display: flex;
    align-items: center;
    padding-right: 3%;
}

.complect__item-img {
    flex: 1 1 60%;
}


.complect__item-img img {
    object-fit: cover;
    width: 100%;
    height: calc(400px + 240 * (100vw / 1336));
}

.complect__item-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 56%;
    gap: 40px;
    padding: 0px 0px 5% 0px;
}

.item-left .complect__item-text {
    padding: 2% 0px 5% 5%;
}


.complect__item-title h2 b>span {
    color: #128b47;
}

.complect__item-subtitle {
    width: 77%;
}

.complect__item-subtitle p {
    font-size: calc(15px + 4 * (100vw / 1336));
    color: #666;

}


@media (max-width : 992px) {
    .complect__items {
        flex-direction: column;
    }

    .item-right,
    .item-left {
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        flex-direction: column;
        align-items: center;
    }

    .item-right .complect__item-text {
        order: 2;
        padding: 2% 0px 5% 5%;

    }

    .item-right .complect__item-img {
        order: 1;
    }
}
</style>