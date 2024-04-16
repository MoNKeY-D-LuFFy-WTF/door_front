<template>
    <div class="instalment__poster">
        <div class="container-lg text-white">
            <div class="d-flex instalment__poster-title w-50 flex-column align-items-center text-center">
                <div>
                    <p class="text-uppercase">Двери мечты с Porta prima</p>
                </div>
                <div class="mb-4">
                    <h1>
                        Дверь в рассрочку без переплаты.
                        <br>
                        Первый взнос 0 руб.
                    </h1>
                </div>
                <div class="d-flex gap-3">
                    <main-link :link="`/`">Условия</main-link>
                    <revers-link :link="`/`">Оформить рассрочку</revers-link>
                </div>
            </div>
        </div>
    </div>
    <div class="instalment__poster-content">
        <div class="container-lg">
            <div class="instalment__poster-items p-5">
                <div class="d-flex flex-column align-items-center">
                    <span class="first-text">0₽</span>
                    <span class="last-text">первый взнос</span>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <span class="first-text">0%</span>
                    <span class="last-text"> переплата</span>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <span class="first-text"> 6 мес.</span>
                    <span class="last-text"> рассрочка</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
* {
    margin: 0;
    padding: 0;
}

.instalment__poster {
    background: url('@/assets/instalment/poster.jpg') center/cover;
    width: 100%;
    height: calc(270px + 250 * (100vw / 1336));
    position: relative;
    top: 0;
    left: 0;
}

.instalment__poster div>div {
    padding: 6% 0px 0px 0px;
}

.instalment__poster-content {
    color: #fff;
    background: #333333;
}

.instalment__poster-items {
    display: flex;
    flex-wrap: wrap;
}

.instalment__poster-items div {
    flex: 1 1 33.333%;
}

.first-text {
    font-size: calc(45px + 25 * (100vw / 1336));
    font-weight: 900;
    transition: .2s normal;

}

.first-text:hover {
    transition: .2s normal;
    color: #7b2b27;
}

.last-text {
    font-size: 18px;
    line-height: 27px;
}

@media (max-width: 767px) {
    .instalment__poster {
        background: url('@/assets/instalment/poster.jpg') top/cover no-repeat;
        background-size: 100% calc(150px + 50 * (100vw / 767));
    }

    .instalment__poster-items {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .instalment__poster {
        height: calc(500px + 100 * (100vw / 1336));
    }

    div.instalment__poster-title {
        width: 100% !important;
        color: #000 !important;
        padding: 0 !important;
        position: absolute;
        bottom: 10%;
        left: 0;
    }
}

/* Landscape phones and smaller */
@media (max-width: 480px) {}
</style>