<template>
    <div class="door-key__wrapper py-5">
        <div class="instalment__container">
            <div class="door-key__content">
                <h6 class="text-transform">КАК МЫ РАБОТАЕМ</h6>
                <div class="door-key__title">
                    <h2>Дверь «под ключ», <br>
                        или «почему выбирают Porta prima?»</h2>
                </div>
                <div class="door-key__subtitle">
                    <p>Полный цикл дверного сервиса Porta prima с заботой о клиенте: <br>
                        замер, производство, доставка, монтаж.</p>
                    <div class="key__subtitle-btn">
                        <main-link :link="`/instalment`">Заказать дверь под ключ</main-link>
                    </div>
                </div>
                <div class="door-key__items">
                    <div class="door-key__item">
                        <h4>01</h4>
                        <h6>Выбор двери</h6>
                        <p>Онлайн или в салоне, более 300 моделей, консультации специалиста.</p>
                    </div>
                    <div class="door-key__item">
                        <h4>02</h4>
                        <h6>Замер</h6>
                        <p>Выезд мастера на объект. Замер проемов.</p>
                    </div>
                    <div class="door-key__item">
                        <h4>03</h4>
                        <h6>Договор, изготовление</h6>
                        <p>Согласование сроков и условий. Дверь со склада или под заказ.</p>
                    </div>
                    <div class="door-key__item">
                        <h4>04</h4>
                        <h6>Доставка и монтаж</h6>
                        <p>Доставка, установка. Приёмка работ. Гарантия.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.door-key__wrapper {
    background: #333;
    color: #fff;
}


.door-key__content {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.door-key__content::after {
    content: "";
    margin: 25px 0px 10px 0px;
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #fff;
}

.door-key__content>h6 {
    font-size: 11px;
    font-weight: 400;
}

.door-key__title h2 {
    font-size: calc(36px + 12 * (100vw / 1336));
    font-weight: 400;
    line-height: calc(40px + 15 * (100vw / 1336));
}


.door-key__subtitle {
    display: flex;
    justify-content: space-between;
}

.door-key__subtitle p {
    font-weight: 400;
    font-size: calc(13px + 4 * (100vw / 1336));
    line-height: calc(18px + 9 * (100vw / 1336));
}


.door-key__items {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 35px;
}


.door-key__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.door-key__item h4 {
    font-weight: 400;
    font-size: calc(24px + 6 * (100vw / 1336));
    line-height: 39px;
    display: flex;
    align-items: center;
    gap: 30px;
    transition: color .2s normal;
}

.door-key__item h4:hover {
    transition: color .2s normal;
    color: #8f332f;
}

.door-key__item h4::after {
    content: "";
    display: inline-block;
    width: 100%;
    border-top: dotted 3px #fff;
}

.door-key__item:last-child h4::after {
    display: none;
}

.door-key__item p {
    font-size: calc(14px + 3 * (100vw / 1336));
    line-height: 27px;
    padding: 0px 20px 0px 0px;
}

@media (max-width: 992px) {
    .door-key__subtitle {
        flex-direction: column;
        gap: 40px;
    }

    .door-key__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 572px) {
    .door-key__items {
        grid-template-columns: 1fr;
    }

    .door-key__item h4::after {
        display: none;
    }
}
</style>