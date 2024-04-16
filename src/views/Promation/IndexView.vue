<template>
    <div class="container-lg">
        <div class="promation">
            <Tags />
            <div class="promation-title">
                <h3>Aкции на межкомнатные двери</h3>
            </div>
            <div class="promation__items">
                <div v-for="item in data" class="promation__item">
                    <div class="promation__item-img">
                        <router-link :to="item.id !== 3 ? `/promation/${item.id}/item` : '/instalment'"> <img
                                :src="`http://127.0.0.1:8000/api/promotions/${item.id}/img?name=${item.image}`"
                                :alt="item.title">
                        </router-link>
                    </div>
                    <div class="promation__item-text">
                        <div class="promation__item-title">
                            <router-link :to="item.id !== 3 ? `/promation/${item.id}/item` : '/instalment'">
                                {{ item.title }}
                            </router-link>
                        </div>
                        <div class="promation__item-subtitle">
                            <p>{{ item.subtitle }} <br> Акция действует до {{ item.date }}</p>
                        </div>
                        <div class="promation__item-link">
                            <router-link
                                :to="item.id !== 3 ? `/promation/${item.id}/item` : '/instalment'">Подробнее</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="promation__quan">
                <span>Показано {{ data.length }} из {{ data.length }} </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Tags from '@/components/Tags.vue';
export default {
    components: {
        Tags
    },
    data() {
        return {
            data: ''
        }
    },
    methods: {
        getData() {
            axios.get("http://127.0.0.1:8000/api/promotions").then(res => {
                this.data = res.data;
            })
        }
    },
    mounted() {
        this.getData();
    },
}
</script>

<style scoped>
.promation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin: 20px 0px;
}

.promation-title {
    align-self: flex-start;
}

.promation__items {
    display: flex;
    flex-direction: column;
    gap: calc(45px + 25 * (100vw / 1336));
}

.promation__item {
    display: flex;
    gap: 25px;
}

.promation__item-img {
    flex: 1 1 40%;
    background: #8f332f;
}

.promation__item-img:hover img {
    opacity: 0.8;
}

.promation__item-img img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.promation__item-text {
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
}

.promation__item-title {
    margin: 0px 0px 10px 0px;
}

.promation__item-title a {
    color: #000;
    font-size: calc(19px + 6 * (100vw / 1336));
}

.promation__item-title a:hover {
    color: #8f332f;
}

.promation__item-subtitle {
    flex: 1 1 auto;
}

.promation__item-subtitle p {
    color: #313434;
}

.promation__item-link {
    margin: 0px 0px 20px 0px;
}

.promation__item-link a {
    border: solid 1px #8f332f;
    text-decoration: none;
    text-transform: uppercase;
    color: #313434;
    padding: calc(10px + 10 * (100vw / 1336)) calc(25px + 25 * (100vw / 1336));
}

.promation__item-link a:hover {
    color: #8f332f;
    background: rgba(205, 203, 195, .3);
    border-color: #8f332f;
}

.promation__quan {
    color: #050505;
    font-size: calc(15px + 2 * (100vw / 1336));
    margin: 20px 0px;
}

@media (max-width: 767px) {
    .promation__item-img {
        width: 341px;
        height: 228px;
    }

    .promation__item-img img {
        width: 100%;
    }

    .promation__item-link {
        margin: 20px 0px 0px 0px;
    }

    .promation__item {
        flex-wrap: wrap;
        align-items: flex-start;
    }
}
</style>