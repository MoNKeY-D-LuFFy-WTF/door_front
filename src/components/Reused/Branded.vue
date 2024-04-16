<template>
    <section class="branded">
        <div class="instalment__container">
            <div class="branded__text">
                <div class="branded__first">
                    <h6 class="text-uppercase">PORTA PRIMA В ВАШЕМ ГОРОДЕ</h6>
                </div>
                <div class="branded__title">
                    <h2>Фирменные салоны Porta prima</h2>
                </div>
                <div class="branded__subtitle">
                    <p>37 салонов по всей России для профессиональной консультации и выбора дверей.</p>
                </div>
                <div class="branded__link">
                    <main-link :link="``">Выбрать салон</main-link>
                </div>
            </div>
        </div>
        <div class="branded__img">
            <img src="@/assets/branded/1_branded.jpg" alt="">
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.branded {
    background: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.branded__text {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 0px 100px 0px 15px;
}

.branded__first h6 {
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    letter-spacing: .08em;
    color: #999;

}

.branded__title h2 {
    color: #333;
}

.branded__subtitle p {
    font-weight: 400;
    color: #666;
}


.branded__img {
    height: calc(250px + 240 * (100vw / 1336));
    flex: 1 1 65%;
}

.branded__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 992px) {
    .branded {
        flex-direction: column;
        gap: 25px;
    }

    .branded__text {
        padding: 0;
    }
}
</style>