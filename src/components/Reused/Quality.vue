<template>
    <div class="quality">
        <div class="instalment__container">
            <div class="quality__text">
                <div class="quality__text-first">
                    <h6 class="text-uppercase">ОПЫТ PORTA PRIMA</h6>
                </div>
                <div class="quality__text-title">
                    <h2>30 лет экспертизы в производстве межкомнатных дверей высочайшего качества</h2>
                </div>
                <div class="quality__text-subtitle">
                    <p>Porta prima — это межкомнатные двери для жизни в гармонии с природой, но в городском ритме. Авторский
                        дизайн, экологичные материалы, технологичность и ответственность — четыре элемента стиля Porta
                        prima. И все это в категории смарт-премиум, для тех, кто рационально распоряжается финансами и не
                        снижает планку качества.</p>
                </div>
            </div>
        </div>
        <div class="quality__poster">
            <div class="quality__poster-text">
                <div class="quality__poster-title">
                    <h2>Скачать каталог межкомнатных дверей</h2>
                </div>
                <div class="quality__poster-subtitle">
                    <p>Все двери Porta prima в формате PDF</p>
                </div>
                <div class="quality__poster-link">
                    <a href="https://portaprima.ru/mezhkomnatnye-dveri/files/Catalog_Portaprima.pdf">Скачать каталог</a>
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
h2 {
    color: #333;
}

p {
    color: #666;
}

.quality {
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin: 0px 0px 4rem 0px;
}


.quality__text {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 20px;
    padding: 5rem 0px 0px 0px;
}

.quality__text-first h6 {
    color: #999;
    display: block;
    font-size: 11px;
    line-height: 20px;
    letter-spacing: .08em;
}



.quality__text-subtitle p {
    line-height: 27px;
    width: 75%;
    margin: 0 auto;
}

.quality__poster {
    width: 100%;
    height: calc(350px + 350 * (100vw / 1336));
    background: url("@/assets/instalment/quality_poster.jpg") center/cover;
    position: relative;
    top: 0;
    left: 0;
}

.quality__poster-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    top: 0;
    left: 0;
    top: 25%;
    left: 5%;
}

.quality__poster-link a {
    text-decoration: none;
    display: inline-block;
    background: #fff;
    color: #8f332f;
    padding: calc(8px + 4 * (100vw / 1336)) calc(18px + 5 * (100vw / 1336)) calc(10px + 4 * (100vw / 1336));
    border-radius: 5px;
    transition: .2s normal;
    font-weight: bold;
    border: none;
}

.quality__poster-link a:hover {
    background: #7b2b27;
    color: #fff;
    transition: .2s normal;
}

@media (max-width: 760px) {
    .quality__poster {
        background: url("@/assets/instalment/quality_poster.jpg") top/99% 50% no-repeat;

    }

    .quality__poster-text {
        width: 90%;
        top: 56%;
    }

    .quality__text-subtitle p {
        width: 100%;
    }

    .quality__poster {
        width: 100%;
    }
}

@media (max-width: 320px) {
    .quality__poster {
        background: url("@/assets/instalment/quality_poster.jpg") top/100% 40% no-repeat;
    }

    .quality__poster-text {
        top: 44%;
        width: 80%;
    }
}
</style>