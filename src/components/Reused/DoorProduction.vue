<template>
    <div class="door-production">
        <div class="instalment__container">
            <div class="door-production__content">
                <div class="door-production__title">
                    <h2>О производстве дверей Porta prima</h2>
                </div>
                <div class="door-production__items">
                    <div class="door-production__item">
                        <a href="https://www.youtube.com/watch?v=oFw_sExKi-A" target="_blank">
                            <img src="@/assets/instalment/1_door_production.jpg" alt="">
                            <h6>Как делают межкомнатные двери на фабриках Porta prima</h6>
                        </a>
                    </div>
                    <div class="door-production__item">
                        <a href="https://www.youtube.com/watch?v=ABOMnfAaGNw&t=348s" target="_blank">
                            <img src="@/assets/instalment/2_door_production.jpg" alt="">
                            <h6>Фабрики Porta prima: 30 лет экспертизы в создании межкомнатных дверей</h6>
                        </a>
                    </div>
                    <div class="door-production__item">
                        <a href="https://www.youtube.com/watch?v=G9BoTDVYwdE" target="_blank">
                            <img src="@/assets/instalment/3_door_production.jpg" alt="">
                            <h6>Из чего сделаны двери Porta prima</h6>
                        </a>
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
.door-production {
    background: #333;
    color: #fff;
    padding: calc(50px + 50 * (100vw / 1336)) 0px 3rem 0px;
}

.door-production__content {
    display: flex;
    flex-direction: column;
}

.door-production__title {
    margin: 0px 0px 6% 0px;
}

.door-production__items {
    display: flex;
    justify-content: space-between;
    gap: calc(30px + 30 * (100vw / 1336));
}

.door-production__item {
    position: relative;
    top: 0;
    left: 0;
}

.door-production__item a {
    display: inline-block;
    width: 110%;
    height: 100%;
    display: flex;
    background: #000;
    transition: all .3s normal;
}

.door-production__item img {
    width: 100%;
    object-fit: cover;
}

.door-production__item a:hover img {
    opacity: .6;
    transition: all .3s normal;
}

.door-production__item a h6 {
    position: absolute;
    bottom: 10%;
    left: 7%;
    font-weight: 600;
    font-size: calc(15px + 3 * (100vw / 1336));
    line-height: 24px;
    color: #fff;

}



@media (max-width: 992px) {
    .door-production__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }

    .door-production__item a {
        width: 100%;
    }
}

@media (max-width: 575px) {
    .door-production__items {
        grid-template-columns: 1fr;
        align-items: center;
    }

}
</style>