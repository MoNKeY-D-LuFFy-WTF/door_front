<script>
import BACKEND_URL from '@/BACKEND__URL';
import axios from 'axios';
export default {
    props: {
        scroll: {
            type: Boolean,
            require: true,
        },
        menu: {
            type: Boolean,
            require: true
        },
        resize: {
            type: Number,
            require: true
        }
    },
    data() {
        return {
            show: {
                input: false,
                burger: false,
            },
            BACKEND_URL,
            navbarCatalogs: ""
        }
    },
    methods: {
        toggleFindInput(e) {
            e.preventDefault();
            const body = document.body;
            if (this.show.input) {
                this.show.input = false;
                body.style.overflow = "auto";
            } else {
                this.show.input = true;
                body.style.overflow = "hidden";
            }
        },
        toggleShowBurger(e) {
            e.preventDefault();
            const body = document.body;
            if (this.show.burger) {
                this.show.burger = false;
                body.style.overflow = "auto";
            } else {
                this.show.burger = true;
                body.style.overflow = "hidden";

            }
        },
        getDataNavCatalog() {
            axios.get(`${this.BACKEND_URL}/catalogs`)
                .then(res => {
                    this.navbarCatalogs = res.data
                })
        },
    },
    mounted() {
        this.getDataNavCatalog();
    },

}
</script>

<template>
    <div class="header__navbar">
        <div class="container-lg">
            <nav class="header__nav">
                <div class="header__burger">
                    <a @click="toggleShowBurger" href="#">
                        <i class="fa-solid fa-bars"></i>
                        <span>Меню</span>
                        <img src="@/assets/logo/logo.webp" alt="Porto prima logo">
                    </a>
                    <transition>
                        <nav v-if="show.burger" class="header__burger-nav">
                            <span @click="toggleShowBurger">x</span>
                            <ul class="haeder__burger-list">
                                <li><a href="#">На главную</a></li>
                                <li><a href="#">Каталог</a></li>
                                <li><router-link to="/promation">Акции</router-link></li>
                                <li><a href="#">Сервис</a></li>
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Покупателям</a></li>
                                <li><a href="#">Портнерам</a></li>
                                <li><a href="#">Адрес салонов</a></li>
                            </ul>
                            <div class="header__burger-tel">
                                <span>Call-центер</span>
                                <a href="tel:+7 (495) 445-88-02">+7 (495) 445-88-02</a>
                                <a class="burger-tel__link" href="">Заказать звонок</a>
                            </div>
                            <div class="header__burger-clock">
                                <span>Время работы (МСК):</span>
                                09:00 - 21:00 <br>
                                eжедневно
                            </div>
                            <div class="header__burger-city">
                                <i class="fa-solid fa-location-dot"></i>
                                <div>
                                    <span>Ваш город: Москва</span>
                                    <a class="burger-city__link" href="">Сменить город</a>
                                </div>
                            </div>
                        </nav>
                    </transition>

                </div>
                <transition>
                    <ul v-if="menu" class="header__nav-list">
                        <li class="header__nav-item active">
                            <router-link class="header__nav-link active" to="/">
                                Каталог
                            </router-link>
                            <ul class="header__nav-child">
                                <li v-for="itemCatalog in  navbarCatalogs">
                                    <router-link :to="itemCatalog.url">
                                        {{ itemCatalog.name }}
                                        <i v-if="itemCatalog.catalog_child !== null" class="child__arrow">></i>
                                    </router-link>
                                    <ul v-if="itemCatalog.catalog_child !== null" class="child__arrow-list">
                                        <li v-for="child in itemCatalog.catalog_child">
                                            <router-link :to="itemCatalog.url + child.url">
                                                {{ child.name }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="header__nav-item">
                            <router-link class="header__nav-link" to="/promation">
                                Акции
                            </router-link>
                            <ul class="header__nav-child">
                                <li><router-link to="/promation">Акции компании</router-link></li>
                                <li><router-link to="/instalment">Рассрочка</router-link></li>
                                <li><router-link to="/sale">Распродажа</router-link></li>
                            </ul>
                        </li>
                        <li class="header__nav-item">
                            <router-link class="header__nav-link" to="/service/frozen">
                                Сервис
                            </router-link>
                            <ul class="header__nav-child ">
                                <li><router-link to="/service/frozen">Вызов замерщика</router-link></li>
                                <li><router-link to="/service/door_key">Дверь под ключ</router-link></li>
                                <li><router-link to="/service/pay">Оплата</router-link></li>
                                <li><router-link to="/service/delivery">Доставка</router-link></li>
                                <li><router-link to="/service/return">Обмен и возврат</router-link></li>
                                <li><router-link to="/service/installation">Установка</router-link></li>
                                <li><router-link to="/service/guarantee">Гарантийное обслуживание</router-link></li>
                                <li><router-link to="/service/preparation">Подготовка проёмов</router-link></li>
                                <li><router-link to="/service/finishing">Отделка стен и полотен</router-link></li>
                            </ul>
                        </li>
                        <li class="header__nav-item">
                            <router-link class="header__nav-link" to="/about/about">
                                О компании
                            </router-link>
                            <ul class="header__nav-child ">
                                <li><router-link to="/about/about">О фабрике</router-link></li>
                                <li><router-link to="/about/certificate">Сертификаты</router-link></li>
                                <li><router-link to="/about/production">Производство</router-link></li>
                                <li><router-link to="/about/vacancies">Вакансии</router-link></li>
                                <li><router-link to="/about/media_center">Медиа-центр</router-link></li>
                                <li><router-link to="/about/video">Видео</router-link></li>
                                <li><router-link to="/contacts">Контакты фабрики</router-link></li>
                                <li><router-link to="/map_site">Карта сайта</router-link></li>
                            </ul>
                        </li>
                        <li class="header__nav-item">
                            <router-link class="header__nav-link" to="#">
                                Пакупателям
                            </router-link>
                        </li>
                        <li class="header__nav-item">
                            <router-link class="header__nav-link" to="#">
                                Партнерам
                            </router-link>
                        </li>
                        <li class="header__nav-item min">
                            <a @click="toggleFindInput" href="#">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <transition>
                                <div v-if="show.input" class="haeder__input-content">
                                    <span @click="toggleFindInput">x</span>
                                    <input class="haeder__input-search" placeholder="Поиск по сайту Porta prima"
                                        type="text">
                                </div>
                            </transition>
                        </li>
                        <transition>
                            <li v-if="scroll || resize < 760" class="header__nav-item basket min">
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
                    </ul>
                </transition>
            </nav>
        </div>
    </div>
</template>

<style scoped>
ul,
li {
    list-style: none;
}

a {
    text-decoration: none;
}

.header__navbar {
    background: #faf8f5;

}

li {
    position: relative;
    top: 0;
    left: 0;
}

.header__nav-item {
    display: flex;
    align-items: center;
    height: calc(50px + 10 * (100vw / 1336));
    width: calc(90px + 10 * (100vw / 1336));
    justify-content: center;
    position: relative;
    top: 0;
    left: 0;
}

.header__nav-child {
    position: absolute;
    top: 90%;
    padding: 15px 0px;
    left: 10%;
    background: #fff;
    transform: translate(0px, 40px);
    opacity: 0;
    visibility: hidden;
    width: 160%;
}

.child__arrow-list {
    padding: 0;
    width: 100%;
    position: absolute;
    left: 100%;
    padding: 15px 0px;
    top: -10%;
    background: #fff;
    box-shadow: 0 10px 10px rgba(80, 50, 45, .2);
    opacity: 0;
    visibility: hidden;

}

.header__nav-child li:hover .child__arrow-list {
    animation: showChild ease .3s;
    animation-fill-mode: forwards;
}

.header__nav-child li {
    position: relative;
    top: 0;
    left: 0;
}

.header__nav-item:nth-child(1) .header__nav-child {
    width: 300%;
    left: -10%;
}

.header__nav-item:nth-child(1) .header__nav-child li a {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


i.child__arrow {
    font-size: calc(15px + 5 * (100vw / 1336)) !important;
    font-weight: 900;
    color: #8f332f;
    transition: .3s ease all;
    transform: rotate(90deg);
}


.header__nav-item:nth-child(1) .header__nav-child li:hover i.child__arrow {
    transform: rotate(0deg);
}

.header__nav-item:nth-child(3) .header__nav-child {
    width: 240%;
}

.header__nav-item:nth-child(4) .header__nav-child {
    width: 180%;

}

.header__nav-item:hover .header__nav-child {
    animation: showChild ease .3s;
    animation-fill-mode: forwards;
}

.header__nav-child a {
    color: #000;
    display: inline-block;
    padding: 10px 15px;
    width: 100%;
    height: 100%;
}

.header__nav-child a:hover {
    background: #f6f4ed;
    color: #8f332f;
}




.header__nav-item.active {
    background: #8f332f;
}

.header__nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
}

.header__nav-link {
    color: #000;
    font-size: calc(12px + 4 * (100vw / 1336));
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 15px 0px 0px 0px;
}

.header__nav-link::after {
    content: "";
    margin: 0px 0px 10px 0px;
    height: 1px;
    background: #8f332f;
}

.header__nav-link:hover:after {
    animation: widthLine ease .2s;
    animation-fill-mode: forwards;
}

.header__nav-link.active {
    color: #fff;
}

.header__nav-item.min:not(.basket) {
    display: none;
}

.header__nav-link.active::after {
    content: "";
    background: #fff;
    margin: 0px 0px 10px 0px;
    height: 1px;
}

.header__nav-link:hover::after {
    animation: widthLine ease .2s;
    animation-fill-mode: forwards;
}

.header__nav-item a>i {
    color: #8f332f;
    font-size: calc(18px + 12 * (100vw / 1336));
}

.header__nav-item.basket {
    height: calc(50px + 10 * (100vw / 1336));
    width: calc(60px + 10 * (100vw / 1336));
}

.header__nav-item.basket a:hover {
    background: #cdcbc34d;
}

.header__nav-item.basket a:hover::after {
    content: "";
    display: none;
}

.header__nav-basket {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 2;
    background: #fff;
    width: calc(325px + 75 * (100vw / 1336));
    padding: 10px 20px 10px 20px;
    opacity: 0;
    visibility: hidden;
}
.header__nav-basket a {
    text-decoration: none;
    border: none;
}
.header__nav-basket .router-link-active {
    text-decoration: none;
    border: none;
    display: inline;
}

.header__nav-item.basket:hover .header__nav-basket {
    animation: slideBottom 0.2s ease forwards;
}

.header__nav-basket p>a {
    border-bottom: solid 1px #000;
    color: #000;
}

li.header__nav-item.basket>div.header__nav-basket p>a:hover {
    background: none;
    color: #8f332f;
    border: none;
}

.header__burger {
    display: none;
}

.haeder__input-search {
    font-size: calc(20px + 14 * (100vw / 1336));
    width: 100%;
    height: 50%;
    padding: 0px 50px 0px 20px;
    border: none;
}

.haeder__input-search:focus-visible {
    outline: none;
}

.haeder__input-content {
    background: #fff;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
}

.haeder__input-content span {
    align-self: flex-end;
    margin: 0px 40px 0px 0px;
    font-size: 50px;
    cursor: pointer;
}

.header__burger a>img {
    display: none;
}

.header__burger-nav {
    display: none;
    overflow: auto;
}


.router-link-active::after {
    content: "";
    display: inline-block;
    width: 70%;
    height: 1px;
    background: #8f332f;
}

.header__nav-child li .router-link-active::after {
    content: "";
    display: none;
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
    .header__nav-list li:not(.min) {
        display: none;
    }

    .header__burger-nav>span {
        cursor: pointer;
    }

    .header__nav-item.min:not(.basket) {
        display: flex;
    }

    .header__nav-item.min:not(.basket) a {
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 15px 0px 0px 0px;
    }

    .header__nav-item.min:not(.basket):hover {
        background: #cdcbc34d;
    }

    .header__burger {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: 10px;
        width: 50px;
        height: 50px;
    }

    .header__burger a {
        display: flex;
        align-items: center;
        gap: 15px;
        width: 100%;
        height: 100%;
        padding: 0px 0px 0px 10px;
    }

    .header__burger a:hover {
        background: #cdcbc34d;

    }

    .header__burger a>i {
        font-size: 25px;
        color: #8f332f;

    }

    .header__burger a>span {
        color: #000;
        font-weight: bold;
    }

    .header__nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header__nav-list {
        justify-content: center;
        margin: 5px;
    }

    .header__burger-nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background: #fff;
    }

    .header__burger-nav>span {
        align-self: flex-end;
        margin: 0px 20px 0px 0px;
        font-size: 30px;
    }


    .haeder__burger-list li {
        margin: 0px 0px 18px 0px;
    }

    .haeder__burger-list li a {
        font-size: 14px;
        font-weight: bold;
        color: #2d2d2d;
        border-bottom: dotted 1px #2d2d2d;
        display: inline;
        padding: 0;
    }

    .haeder__burger-list li a:hover {
        background: none;
    }

    .header__burger-nav div:not(.header__burger-city) {
        display: flex;
        flex-direction: column;
        margin: 0px 0px 20px 15px;
    }

    nav.header__burger-nav div a {
        display: inline;
    }

    .header__burger-clock span,
    .header__burger-city span {
        color: #b2aaa2;
        font-size: 14px;
    }

    nav.header__burger-nav div a:hover {
        background: none;
    }

    .header__burger-tel>span {
        font-size: 14px;
    }

    nav.header__burger-nav div.header__burger-tel a:nth-child(2):hover {
        color: #8f332f;
    }

    .header__burger-tel a:nth-child(2) {
        font-size: 18px;
        color: #2d2d2d;
        font-weight: bold;
    }


    .burger-tel__link {
        font-size: 14px;
        color: #8f332f;
        border-bottom: dotted 1px #8f332f;
    }

    nav.header__burger-nav div.header__burger-tel a.burger-tel__link:hover {
        color: #2d2d2d;
    }

    .header__burger-city {
        display: flex;
        align-items: center;
        margin: 0px 0px 30px 15px;
    }

    div .header__burger-city>i {
        font-size: 25px;
        color: #8f332f;

    }

    div .header__burger-city a.burger-city__link {
        padding: 0;
        font-size: 14px;
        border-bottom: dotted 1px #8f332f;
        color: #8f332f;
    }

    div .header__burger-city a.burger-city__link:hover {
        color: #2d2d2d;
    }
}

/* Landscape phones and smaller */
@media (max-width: 575px) {
    .header__burger a>span {
        display: none;
    }

    .header__burger a>img {
        display: block;
        max-width: 45%;
    }

    .header__burger a {
        gap: 25px;
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}




@keyframes widthLine {
    0% {
        width: 0%;
    }

    100% {
        width: 70%;
        display: inline-block;
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

@keyframes showChild {
    0% {
        opacity: 0;
        visibility: visible;
    }

    100% {
        opacity: 1;
        transform: translate(0px);
        visibility: visible;
    }
}
</style>