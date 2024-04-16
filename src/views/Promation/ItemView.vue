<template>
    <div class="container-lg">
        <div class="d-flex flex-column align-items-center">
            <div v-if="$route.params.id == 1" class="my-5 d-flex flex-column  gap-3">
                <h2>{{ data.title }}</h2>
                <div class="d-lg-flex">
                    <div class="item__flex">
                        <img class="img-fluid"
                            :src="`http://127.0.0.1:8000/api/promotions/${data.id}/img?name=${data.image}`" alt="">
                    </div>
                    <div class="item__flex">
                        <div class="line">
                            <p class="fs-4 text-muted">
                                <span class="text-bold">Скидка 35% </span> на полотна коллекций NEO CLASSIC, PORTA
                                CLASSIC (кроме LUX) во всех
                                облицовочных материалах, кроме шпона и эмали по шпону.
                            </p>
                            <p class="fs-5 text-muted">
                                <span class="text-bold">Скидка 30%</span>
                                на полотна коллекций TIVOLI и на все полотна раздвижных систем (межкомнатные
                                перегородки, телескоп, пенал, раздвижные двери). Скидка распространяется на полотна во
                                всех облицовках, кроме шпона и эмали по шпону, алюминиевых полотен и перегородок, и
                                кроме моделей с полноформатным зеркалом.
                            </p>
                            <p class="fs-5 text-muted">
                                <span class="text-bold">Скидка 20%</span>
                                на все остальные полотна (во всех облицовочных материалах, включая алюминиевые полотна и
                                перегородки).
                            </p>
                            <p class="fs-5 text-muted">
                                При заказе в нашем <router-link to=""> интернет-магазине</router-link> и <router-link
                                    to="">фирменных салонах</router-link>.
                            </p>
                            <p class="fs-5 text-muted">
                                Смотрите другие <router-link to="">акции на межкомнатные двери.</router-link>
                            </p>
                            <p class="fs-6 text-muted">
                                По любым вопросам можно проконсультироваться по телефону <br>
                                <a class="fw-bold" href="tel:+7 (495)159-80-42"> +7 (495)159-80-42</a>
                            </p>
                        </div>
                        <div class="mt-5">
                            <p class="text-muted">
                                {{ data.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="my-5 d-flex flex-column  gap-3">
                <h2>{{ data.title }}</h2>
                <div class="d-lg-flex">
                    <div class="item__flex">
                        <img class="img-fluid"
                            :src="`http://127.0.0.1:8000/api/promotions/${data.id}/img?name=${data.image}`" alt="">
                    </div>
                    <div class="item__flex">
                        <div class="line">
                            <p class="fs-4 text-muted">
                                Скидка 35% на дверные полотна Невидимок <router-link to="">Tivoli A-1 и
                                    A-2</router-link> во
                                всех облицовочных материалах.
                            </p>
                            <p class="fs-5 text-muted">
                                При заказе в нашем <router-link to=""> интернет-магазине</router-link> и <router-link
                                    to="">фирменных салонах</router-link>.
                            </p>
                            <p class="fs-5 text-muted">
                                Смотрите другие <router-link to="">акции на межкомнатные двери.</router-link>
                            </p>
                            <p class="fs-6 text-muted">
                                По любым вопросам можно проконсультироваться по телефону <br>
                                <a class="fw-bold" href="tel:+7 (495)159-80-42"> +7 (495)159-80-42</a>
                            </p>
                        </div>
                        <div class="mt-5">
                            <p class="text-muted">
                                {{ data.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h5 class="text-uppercase align-self-start mb-5">ДРУГИЕ АКЦИИ</h5>
            <div class="d-flex flex-column gap-5 ">
                <div class="d-lg-flex gap-5" v-for="item in items">
                    <div class="child">
                        <img class="img-fluid"
                            :src="`http://127.0.0.1:8000/api/promotions/${item.id}/img?name=${item.image}`"
                            :alt="item.title">
                    </div>
                    <div class="d-flex flex-column align-items-start child">
                        <h4><a :href="item.id != 3 ? `/promation/${item.id}/item` : `/instalment`">{{ item.title }}</a>
                        </h4>
                        <p class="my-3">{{ item.subtitle }}</p>
                        <a :href="item.id != 3 ? `/promation/${item.id}/item` : `/instalment`"
                            class="text-uppercase btn ">
                            ПОДРОБНЕЕ
                        </a>
                    </div>
                </div>
            </div>
            <div class="promation__quan">
                <span>Показано {{ items.length }} из {{ items.length }} </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: '',
            items: '',
        }
    },
    methods: {
        getData(id) {
            axios.get(`http://127.0.0.1:8000/api/promotions/${id}`)
                .then(res => {
                    this.data = res.data;
                });
            axios.get('http://127.0.0.1:8000/api/promotions/')
                .then(res => {
                    this.items = res.data;
                    this.items.splice(id - 1, 1)
                });
        }
    },
    mounted() {
        this.getData(this.$route.params.id)
    },
}
</script>

<style scoped>
.item__flex {
    flex: 1 1 50%;
}

.line p:last-child {
    margin: 0px 0px 50px 0px;
}

.line::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #000;
}

.text-muted a {
    color: #000;
}

.text-muted a:hover {
    text-decoration: none;
    color: #8f332f;
}

.d-lg-flex div.child:nth-child(1) {
    flex: 1 1 40%;
}

.d-lg-flex div.child:nth-child(2) {
    flex: 1 1 60%;
}

.d-lg-flex div:nth-child(2) a {
    color: #000;
}

.d-lg-flex div:nth-child(2) p {
    flex: 1 1 auto;
}

.d-lg-flex div:nth-child(2) a:hover {
    color: #8f332f;
}

.btn {
    border: solid 1px #8f332f;
    color: #313434;
    padding: calc(10px + 10 * (100vw / 1336)) calc(25px + 25 * (100vw / 1336));
}

.btn:hover {
    color: #8f332f;
    background: rgba(205, 203, 195, .3);
    border-color: #8f332f;
}

.promation__quan {
    margin: 50px 0px;
}

@media (max-width: 767px) {
    .btn {
        display: none;
    }
}

/* Landscape phones and smaller */
@media (max-width: 480px) {}
</style>