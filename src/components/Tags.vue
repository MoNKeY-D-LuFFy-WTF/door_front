<template>
    <div v-if="$route.path === `/promation`" class="tag">
        <router-link to="/">Главная</router-link> → Акции
    </div>
    <div v-if="$route.path === `/sale`" class="tag">
        <router-link to="/">Главная</router-link>
        → <router-link to="/promation">Акции </router-link>
        → Распродажи
    </div>
    <div v-if="$route.path === `/service/frozen`" class="tag">
        <router-link to="/">Главная</router-link>
        → <router-link to="/service/frozen">Сервис </router-link>
        → Вызов замерщика
    </div>
    <div v-if="$route.path === `/service/door_key`" class="tag">
        <router-link to="/">Главная</router-link>
        → Дверь под ключ
    </div>
    <div v-if="$route.path === `/service/pay`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/service/frozen">Сервис</router-link> →
        Информация об оплате
    </div>
    <div v-if="$route.path === `/service/delivery`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/service/frozen">Сервис</router-link> →
        Служба доставки
    </div>
    <div v-if="$route.path === `/service/return`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/service/frozen">Сервис</router-link> →
        Обмен и возврат
    </div>
    <div v-if="$route.path === `/service/installation`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/service/frozen">Сервис</router-link> →
        Установка дверей
    </div>
    <div v-if="$route.path === `/service/guarantee`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/service/frozen">Сервис</router-link> →
        Гарантийное обслуживание
    </div>
    <div v-if="$route.path === `/service/preparation`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/service/frozen">Сервис</router-link> →
        Подготовка проёмов
    </div>
    <div v-if="$route.path === `/service/finishing`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/service/frozen">Сервис</router-link> →
        Отделка стен и полотен
    </div>

    <div v-if="$route.path === `/about/about`" class="tag">
        <router-link to="/">Главная</router-link>→
        О компании
    </div>
    <div v-if="$route.path === `/about/certificate`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/about/about"> О компании</router-link> →
        Сертификаты
    </div>
    <div v-if="$route.path === `/about/production`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/about/about"> О компании</router-link> →
        Собственное производство
    </div>
    <div v-if="$route.path === `/about/vacancies`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/about/about"> О компании</router-link> →
        Вакансии
    </div>
    <div v-if="$route.path === `/about/media_center`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/about/about"> О компании</router-link> →
        СМИ о нас
    </div>
    <div v-if="$route.path === `/about/video`" class="tag">
        <router-link to="/">Главная</router-link>→
        <router-link to="/about/about"> О компании</router-link> →
        Наше видео
    </div>
    <div v-if="$route.path === `/contacts`" class="tag">
        <router-link to="/">Главная</router-link>→
        Контакты
    </div>
    <div v-if="$route.path === `/map_site`" class="tag">
        <router-link to="/">Главная</router-link>→
        Карта сайта
    </div>
    <div v-if="tags !== undefined" class="tag container-lg">
        <span><router-link to="/">Главная </router-link>-></span>
        <span v-if="tags.child.url !== undefined"> <router-link :to="tags.parent.url">{{
        tags.parent.name
    }}</router-link></span>
        <span v-else>{{ tags.parent.name }}</span>
        <span v-if="tags.child.url !== undefined">->{{ tags.child.name }}</span>
    </div>
    <div v-if="$route.path === `/basket`" class="tag">
        <router-link to="/">Главная</router-link>→
        Корзина
    </div>
</template>

<script>
export default {
    props: {
        tags: {
            type: [Object, Array],
            require: false,
        }
    },

}
</script>

<style>
.tag {
    align-self: flex-start;
    font-size: 14px;
}

.tag a {
    color: #999;
    transition: color .3s normal;

}

.tag a:hover {
    color: #000;
}

@media (max-width: 575px) {
    .tag {
        display: none;
    }
}
</style>