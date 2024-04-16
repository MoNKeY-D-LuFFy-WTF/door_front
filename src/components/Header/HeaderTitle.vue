<script>
import { useRoute } from 'vue-router';
import axios from "axios";
import BACKEND_URL from '@/BACKEND__URL';
export default {
    props: {
        scroll: {
            type: Boolean,
            require: true,
        },
        resize: {
            type: Number,
            require: true,
        }
    },
    data() {
        return {
            lineShow: true,
            show: {
                inputFind: false,
                menu: true,
            },
            findData: '',
            responseFindData: [],
            route: useRoute(),
        }
    },
    methods: {
        toggleInputFind(e) {
            e.preventDefault();
            if (this.show.inputFind) {
                this.show.inputFind = false;
            } else {
                this.show.inputFind = true;
            }
        },
        findAll() {
            if (this.findData !== '') {
                axios.get(`${BACKEND_URL}/doors/find/${this.findData.toLowerCase()}`)
                    .then(res => {
                        this.responseFindData = res.data;
                        this.responseFindData.forEach(element => {
                            if (element.door_catalog_child) {
                                element.endUrl = element.door_catalog_child.catalog.url + element.door_catalog_child.url + element.url + "_" + element.id;
                            }
                        });
                        console.log(this.responseFindData);
                    })
            } else {
                this.responseFindData = [];
            }
        }
    },
    computed: {
        toggleMenuBurger() {
            if (this.show.menu) {
                this.show.menu = false;
            } else {
                this.show.menu = true;
            }
            return this.$emit('toggleMenuBurger', this.show.menu);
        },
    },
    mounted() {
        if (this.route.path == "/") {
            this.lineShow = false;
        } else {
            this.lineShow = true;
        }
    },

}
</script>
<template>
    <transition>
        <div v-if="scroll || resize > 760" class="container-lg">
            <div class="haeder__content">
                <div class="header__logo">
                    <router-link to="/">
                        <img src="@/assets/logo/logo.webp" alt="">
                    </router-link>
                </div>
                <div class="haeder__items">
                    <ul class="header__list">
                        <li class="d-flex align-items-center">
                            <transition>
                                <div v-if="!scroll" class="burger__menu">
                                    <button @click="toggleMenuBurger" class="btn d-flex align-items-center gap-3"><i
                                            class="fa-solid fa-bars"></i>Меню</button>
                                </div>
                            </transition>
                            <div class="d-flex header__list-find">
                                <a @click="toggleInputFind" class="header__list-icon" href="#">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </a>
                                <transition name="slide-fade">
                                    <input v-model.trim="findData" @change="findAll" v-if="show.inputFind"
                                        class="header__list-input"
                                        :style="!scroll ? `width: 35%; left: 40.5%;` : `width: 50%;left: 17%;`"
                                        placeholder="Поиск по сайту Porta prima" type="text">
                                </transition>
                                <ul v-if="show.inputFind && responseFindData.length" class="response__list">
                                    <li class="my-2" v-for="dataFind in responseFindData" :key="dataFind.id">
                                        <a :href="dataFind.endUrl">
                                            {{ dataFind.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li v-show="lineShow" class="haeder__list-line"></li>
                        <Transition>
                            <li v-if="scroll">
                                <span> Время работы (МСК):</span> <br>
                                09:00 - 21:00 <br>
                                ежедневно
                            </li>
                        </Transition>
                        <li v-show="lineShow" class="haeder__list-line"></li>
                        <Transition>
                            <li v-if="scroll" class="d-flex align-items-center header__list-city gap-3">
                                <div class="header__list-icon">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div class="d-flex flex-column">
                                    <span>
                                        Ваш город: Москва
                                    </span>
                                    <a class="header__list-link" href="#">сменить город</a>
                                </div>
                            </li>
                        </Transition>
                        <li v-show="lineShow" class="haeder__list-line"></li>
                        <li class="d-flex flex-column">
                            <Transition>
                                <span v-if="scroll">Call-центр</span>
                            </Transition>
                            <a class="header__list-phone" href="tel:+7 (495) 149-64-51"> +7 (495) 149-64-51 </a>
                            <a class="header__list-order" href="">Заказать звонок</a>
                        </li>
                        <transition>
                            <li v-if="!scroll" class="header__nav-item basket min">
                                <router-link class="header__nav-link" to="/basket">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </router-link>
                                <div class="header__nav-basket shadow">
                                    <p>Ваша корзина пуста!</p>
                                    <p>Воспользуйтесь <router-link to="/mejkomnatnie_dveri">каталогом
                                            дверей</router-link>, чтобы добавить
                                        товары в
                                        корзину покупок.</p>
                                </div>
                            </li>
                        </transition>
                        <li v-show="lineShow" class="haeder__list-line"></li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
img {
    max-width: 100%;
    object-fit: cover;
}

ul,
li {
    list-style: none;
}

button:hover {
    background: #cdcbc34d
}

span {
    color: #b2aaa2;
}

header {
    position: relative;
    top: 0;
    left: 0;
}

.haeder__content {
    display: flex;
    gap: calc(24px + 16 * (100vw / 1336));
    align-items: center;
    padding: 15px 0px 0px 0px;
}

.header__logo {
    width: 200px;
    margin: 0px 0px 25px 0px;

}

.haeder__items {
    flex: 1 0 auto;
}

.header__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.response__list {
    width: 50%;
    position: absolute;
    max-height: 350px;
    overflow-y: auto;
    z-index: 50;
    top: 100%;
    left: 10%;
    background: #fff;
    padding: 25px 0px;

}

.response__list li {}

.response__list li a {
    display: block;
    color: #777;
}

.haeder__list-line {
    background: #e4e2e0;
    display: inline-block;
    width: 1px;
    height: calc(30px + 20 * (100vw / 1280));
}

.header__list {
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
}

.header__list-input {
    background: none;
    border: none;
    font-size: calc(10px + 10 * (100vw / 1336));
    color: #777;
    position: absolute;
    width: 51.7%;
    height: 100%;
    left: 17%;
    background: #fff;
}

.header__list-input:focus-visible {
    outline: none;
}

.header__list-link {
    align-self: flex-start;
    font-size: calc(9px + 4 * (100vw / 1336));
    text-decoration: none;
    color: #8f332f;
    border-bottom: dotted 1px;
}

.header__list-link:hover {
    color: #000;
}

.header__list-icon {
    font-size: calc(16px + 10 * (100vw / 1336));
    color: #8f332f;
}

a.header__list-phone {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    font-size: calc(10px + 13 * (100vw / 1336));
}

a.header__list-phone:hover {
    color: #8f332f;
}

.header__list-order {
    text-decoration: none;
    color: #000;
    border-bottom: dotted 1px;
    align-self: flex-start;
    font-weight: 200;
    font-size: calc(8px + 10 * (100vw / 1336));
}

.header__list li:nth-child(1) a {
    transition: all .1s ease 0s;
    padding: calc(8px + 8 * (100vw / 1280));
}

.header__list li:nth-child(1) a:hover {
    transition: all .1s ease 0s;
    background: #cdcbc34d;
}

.header__nav-item {
    position: relative;
    top: 0;
    left: 0;
}

.header__nav-item:hover .header__nav-basket {
    animation: slideBottom ease forwards .3s;
}


.header__nav-link {
    font-size: calc(12px + 4 * (100vw / 1336));
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: calc(10px + 10 * (100vw / 1336));
    color: #8f332f;
}

.header__nav-link:hover {
    background: #cdcbc34d;
}

.header__nav-link>i {
    font-size: 30px;
}

.header__nav-basket {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 2;
    background: #fff;
    width: 400px;
    padding: 10px 20px 10px 20px;
    opacity: 0;
    visibility: hidden;
}

.burger__menu button {
    padding: calc(13px + 5 * (100vw / 1336));
    font-weight: bold;
    border: none;

}

.burger__menu button:active {
    border: none;
}

.burger__menu button>i {
    font-size: 30px;
    color: #8f332f;
}


.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.8s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20%);
    width: 0px;
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}


@media (min-width: 992px) and (max-width: 1199px) {
    .header__list-input {
        width: 53.8%;
    }
}

@media (max-width: 991px) {
    .header__list-city {
        display: none !important;
    }


    .header__list li:nth-child(4) {
        display: none !important;
    }

    .header__list-input {
        left: 22%;
        width: 78%;
    }
}

@media (max-width: 767px) {

    .header__list li:nth-child(1),
    .header__list li:nth-child(2),
    .header__list li:nth-child(3),
    .header__list li:nth-child(6),
    .header__list li:nth-child(8) {
        display: none !important;
    }

    .header__list li:nth-child(7) {
        align-self: flex-end !important;
    }

    .haeder__content {
        gap: 100px;
    }

    .haeder__items {
        flex: 0 0 auto;
        margin: 0 auto;
    }
}

@media (max-width: 574px) {
    .header__logo {
        display: none;
    }

    .d-flex.flex-column>span {
        display: none;
    }

    li.d-flex.flex-column {
        flex-direction: row !important;

    }

    .haeder__items {
        margin: 0;
    }

    ul.header__list {
        padding: 0;
    }

    .header__list-phone {
        margin: 0px 20px 0px 0px;
    }
}

@keyframes slideBottom {
    from {
        transform: translate(0, -15px);
        opacity: 0;
        visibility: hidden;
        transition: transform ease 0.5S;
    }

    to {
        transform: translate(0, 0);
        opacity: 1;
        visibility: visible;
        transition: transform ease 0.5S;
    }
}
</style>