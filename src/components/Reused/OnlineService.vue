<template>
    <div class="online-service mb-5">
        <div class="instalment__container">
            <div class="online-service__content">
                <div class="online-service__text">
                    <div class="online-service__title">
                        <h2>Онлайн-сервисы Porta prima</h2>
                    </div>
                    <div class="online-service__subtitle">
                        <p>Подберите идеальную дверь не выходя из дома.</p>
                    </div>
                </div>
                <div class="online-service__items">
                    <div class="online-service__item">
                        <h6>Получить подарок онлайн</h6>
                        <div class="online-service__wrapper">
                        </div>
                        <div class="online-service__link">
                            <h6>Получить подарок онлайн</h6>
                            <p>Подарим подарок, и подберем вам лучший вариант двери.</p>
                            <main-link :link="`/instalment`">Получить сейчас</main-link>
                        </div>
                    </div>
                    <div class="online-service__item">
                        <h6> Профессиональные консультации </h6>
                        <div class="online-service__wrapper">
                        </div>
                        <div class="online-service__link">
                            <h6>Профессиональные консультации</h6>
                            <p>Любым, удобным для вас способом.</p>
                            <main-link :link="`/`">Получить сейчас</main-link>
                        </div>
                    </div>
                    <div class="online-service__item">
                        <h6>Вызвать замерщика</h6>
                        <div class="online-service__wrapper">
                        </div>
                        <div class="online-service__link">
                            <h6>Вызвать замерщика</h6>
                            <p>Вызвать замерщика прямо на сайте.</p>
                            <main-link :link="`/`">Вызвать</main-link>
                        </div>
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
.online-service__content {
    display: flex;
    flex-direction: column;
    gap: calc(25px + 20 * (100vw / 1336));
}

.online-service__text {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.online-service__title h2 {
    color: #333;
}

.online-service__subtitle p {
    color: #666;
}

.online-service__items {
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.online-service__item {
    flex: 1 1 33.3333%;
    height: calc(150px + 100 * (100vw / 1336));
    color: #fff;
    background: #000;
    position: relative;
    top: 0;
    left: 0;
    border-radius: 5px;
}

.online-service__item:hover>h6 {
    display: none;
}

.online-service__item:hover .online-service__link {
    display: block;
}

.online-service__item:hover .online-service__wrapper {
    opacity: .5;
}

.online-service__wrapper {
    height: 100%;
    display: flex;
    align-items: flex-end;
    opacity: .85;
    border-radius: 5px;
}

.online-service__item>h6 {
    font-size: calc(14px + 4 * (100vw / 1336));
    padding: 0px 0px 0px 30px;
    position: absolute;
    top: 78%;
    color: #fff;
    z-index: 2;
}


.online-service__link {
    display: none;
    position: absolute;
    top: 35%;
    z-index: 2;
    padding: 0px 10px 0px 30px;
}



.online-service__link p,
.online-service__link a {
    font-size: calc(12px + 2 * (100vw / 1336));
}

.online-service__item:first-child .online-service__link {
    top: 23%;
}

.online-service__item:first-child .online-service__wrapper {
    background: url("@/assets/online-service/1_online-service.jpg") center/cover;
}

.online-service__item:nth-child(2) .online-service__wrapper {
    background: url("@/assets/online-service/2_online-service.jpg") center/cover;
}

.online-service__item:last-child .online-service__wrapper {
    background: url("@/assets/online-service/3_online-service.jpg") center/cover;
}

@media (max-width: 992px) {
    .online-service__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }
}

@media (max-width: 760px) {
    .online-service__items {
        grid-template-columns: 1fr;
    }
}
</style>