<template>
    <div class="garanty__wrapper">
        <div class="instalment__container">
            <div class="garanty__items">
                <div class="garanty__item">
                    <h2>5 лет</h2>
                    <span>гарантия на двери</span>
                </div>
                <div class="garanty__item">
                    <h2>3 года</h2>
                    <span>гарантия на монтаж</span>
                </div>
                <div class="garanty__item">
                    <h2>30 лет</h2>
                    <span>в производстве дверей</span>
                </div>
                <div class="garanty__item">
                    <h2>100%</h2>
                    <span>экологичность материалов</span>
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
.garanty__wrapper {
    background: #333;
    color: #fff;
}



.garanty__items {
    display: flex;
    justify-content: space-between;

}

.garanty__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

}

.garanty__item:first-child {
    margin: 0px 0px 0px 50px;
}



.garanty__item h2 {
    font-size: calc(50px + 20 * (100vw / 1336));
    line-height: calc(15px + 30 * (100vw / 1336));
    transition: color normal .2s;
    font-weight: 700;
}

.garanty__item h2:hover {
    transition: color normal .2s;
    color: #8f332f;
}

@media (max-width: 992px) {
    .garanty__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        align-items: center;
    }

    .garanty__item {
        margin: 0 !important;
        text-align: center;
        align-items: center;
    }
}

@media (max-width: 767px) {
    .garanty__items {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

@media (max-width: 480px) {}
</style>