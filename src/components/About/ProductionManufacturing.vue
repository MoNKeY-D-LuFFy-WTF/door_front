<template>
    <div class="production__manufact">
        <div class="service__content-title">
            <h4>Изготовление межкомнатных дверей PortaPrima</h4>
        </div>
        <img src="@/assets/production/02.webp" alt="">
        <div class="production__manufact-content">
            <img src="@/assets/production/01.webp" alt="">
            <div class="manufact-content__text">
                <p>Популярные у потребителей двери торговой марки PortaPrima производятся в настоящее время на двух
                    российских
                    предприятиях, расположенных в Костроме и Фрязино (Московская область).</p>
                <p>Изделия отличаются высоким качеством исполнения и при этом вполне доступны по цене широкому
                    потребительскому
                    сегменту.</p>
                <p>На костромском заводе выполняется полный цикл изготовления продукта — от первоначальной обработки
                    древесных
                    заготовок до выпуска погонажных изделий и дверных полотен. На фабрике межкомнатных дверей во Фрязино по
                    большей части происходит сборка дверных конструкций. Также здесь разрабатываются опытные образцы,
                    проводятся
                    эксперименты с новыми технологиями и материалами.</p>
            </div>
        </div>
        <div class="manufact-content-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oFw_sExKi-A" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""></iframe>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
    font-size: 16px;
    color: #333;
}

.production__manufact {
    margin: 1.5rem 0px 2rem 0px;
}

.production__manufact>img {
    width: 30%;
}

.service__content-title h4 {
    display: inline-block;
}

.production__manufact-content {
    display: flex;
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
    gap: 30px;
    margin: 0px 0px 4rem 0px;

}

.production__manufact-content>img {
    object-fit: cover;
    width: 100%;
    flex: 1 1 40%;
    height: 100%;
}

.production__manufact>img {
    float: right;
    transform: translateY(-20px);
}

.manufact-content__text {
    flex: 1 1 60%;
    padding: 0px 20px 0px 0px;
}

.manufact-content-video {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 992px) {
    .production__manufact-content>img {
        display: none;
    }
}

@media (max-width: 767px) {
    .production__manufact>img {
        display: none;
    }

    .manufact-content__text {
        padding: 0;
    }
}

</style>