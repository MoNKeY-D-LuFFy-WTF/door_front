<script>
export default {

}
</script>
<template>
    <div class="footer__title">
        <div class="container-lg">
            <div class="footer__content">
                <div class="footer__menu">
                    <div class="footer__menu-content">
                        <div class="footer__menu-title">
                            <a href="">Каталог</a>
                        </div>
                        <ul class="footer__menu-list">
                            <li><a href="">Межкомнатные двери</a></li>
                            <li><a href="">Подбор двери</a></li>
                            <li><a href="">Межкомнатные перегородки</a></li>
                            <li><a href="">Стеновые МДФ-панели</a></li>
                            <li><a href="">Накладки на металлическую дверь</a></li>
                            <li><a href="">Напольные плинтусы</a></li>
                            <li><a href="">Порталы Grande</a></li>
                            <li><a href="">Наличники</a></li>
                            <li><a href="">Коробки</a></li>
                            <li><a href="">Моноблоки для компланарной системы</a></li>
                            <li><a href="">Доборные элементы</a></li>
                        </ul>
                    </div>
                    <div class="footer__menu-content">
                        <div class="footer__menu-title">
                            <a href="">Покупателям</a>
                        </div>
                        <ul class="footer__menu-list">
                            <li><a href="">Новости</a></li>
                            <li><a href="">Отзывы</a></li>
                            <li><a href="">Полезная информация</a></li>
                            <li><a href="">Техническая информация</a></li>
                            <li><a href="">Паспорт изделия</a></li>
                            <li><a href="">Проекты</a></li>
                            <li><a href="">Договор присоединения</a></li>
                            <li><a href="">Вопрос-ответ</a></li>
                        </ul>
                        <div class="footer__menu-title">
                            <a href="">Акции</a>
                        </div>
                        <ul class="footer__menu-list">
                            <li><router-link to="/promation">Акции компании</router-link></li>
                            <li><router-link to="/instalment">Рассрочка</router-link></li>
                            <li><router-link to="/sale">Распродажа</router-link></li>
                        </ul>
                    </div>
                    <div class="footer__menu-content">
                        <div class="footer__menu-title">
                            <router-link to="/service/frozen">Сервис</router-link>
                        </div>
                        <ul class="footer__menu-list">
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
                    </div>
                    <div class="footer__menu-content">
                        <div class="footer__menu-title">
                            <a href="">Партнерам</a>
                        </div>
                        <ul class="footer__menu-list">
                            <li><a href="">Дизайнерам / архитекторам</a></li>
                            <li><a href="">Франшиза / дилерам</a></li>
                            <li><a href="">Скачать материалы</a></li>
                            <li><a href="">3D-модели</a></li>
                        </ul>
                        <div class="footer__menu-title">
                            <li><router-link to="/about/about">О компании</router-link></li>
                        </div>
                        <ul class="footer__menu-list">
                            <li><router-link to="/about/about">О фабрике</router-link></li>
                            <li><router-link to="/about/certificate">Сертификаты</router-link></li>
                            <li><router-link to="/about/production">Производство</router-link></li>
                            <li><router-link to="/about/vacancies">Вакансии</router-link></li>
                            <li><router-link to="/about/media_center">Медиа-центр</router-link></li>
                            <li><router-link to="/about/video">Видео</router-link></li>
                            <li><router-link to="/contacts">Контакты фабрики</router-link></li>
                            <li><router-link to="/map_site">Карта сайта</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer__contacts">
                    <div class="footer__contacts-phone">
                        <ul>
                            <li>Интернет-магазин</li>
                            <li><a href="tel:+7 (495) 16-17-555">+7 (495) 16-17-555</a></li>
                            <li><a class="footer__link-dotted" href="">Заказать звонок</a></li>
                        </ul>
                    </div>
                    <div class="footer__contacts-work">
                        Время работы (МСК): <br>
                        09:00 - 21:00 <br>
                        ежедневно
                    </div>
                    <div class="footer__contacts-address">
                        Адрес производства: <br>
                        Московская область, г. Фрязино, <br>
                        Заводской пр. д.2
                    </div>
                    <div class="footer__contacts-info">
                        <ul>
                            <li><a class="footer__link-dotted" href="">Информационная рассылка</a></li>
                            <li><a class="footer__link-solid" href="">info@portaprima.ru</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer__title {
    background: #313434;
    padding: 35px 0;
}

.footer__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.footer__menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    gap: 20px;
}



.footer__menu::after {
    content: "";
    display: inline-block;
    width: 1px;
    background: #fff;
    margin: 0px 40px 0px 0px;
}

.footer__menu-content {
    flex: 1 1 25%;
}

.footer__menu-title {
    line-height: 3.5;
}

.footer__menu-title a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}

.footer__menu-title a:hover {
    border-bottom: solid 1px #fff;
}

.footer__menu-list li a.router-link-active {
    color: #fff;
    border-bottom: solid 1px #fff;
}

.footer__menu-list li>a {
    text-decoration: none;
    font-size: 14px;
    line-height: 2;
    color: #c9c8c3;
}

.footer__menu-list li>a:hover {
    transition: all ease .3s;
    color: #fff;
    border-bottom: solid 1px #fff;
}

.footer__contacts {
    color: #c9c8c3;
    display: flex;
    flex-direction: column;
    gap: 25px;
}


.footer__contacts-phone li>a:not(.footer__link-dotted) {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;
}


.footer__link-dotted {
    text-decoration: none;
    color: #e6d7c2;
    border-bottom: dotted 1px #e6d7c2;
    font-size: 14px;
}

.footer__link-dotted:hover {
    transition: all ease .3s;
    border-bottom-color: #fff;
    color: #fff;
}

.footer__link-solid {
    text-decoration: none;
    color: #e6d7c2;
    border-bottom: solid 1px #e6d7c2;
    font-size: 14px;
}

.footer__link-solid:hover {
    transition: all ease .3s;
    border-bottom-color: #fff;
    color: #fff;
}




@media (max-width: 992px) {
    .footer__content {
        flex-direction: column;
        align-items: center;
    }

    .footer__menu {
        margin: 0px 0px 20px 0px;
        justify-content: center;
    }

    .footer__menu::after {
        display: none;
    }

    .footer__contacts {
        flex-direction: row;
        position: relative;
        top: 0;
        left: 0;
        margin: 20px 0px 0px 0px;

    }

    .footer__contacts::before {
        content: "";
        width: 100%;
        height: 1px;
        background: #fff;
        display: inline-block;
        position: absolute;
        top: -30%;
        left: 0;
    }
}

@media (max-width: 767px) {
    .footer__contacts {
        flex-direction: column;
        width: 100%;
    }

    .footer__menu {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer__contacts::before {
        top: -5%;
    }
}

@media (max-width: 480px) {
    .footer__contacts {
        margin: 0;
    }

    .footer__contacts::before {
        display: none;
    }

    .footer__menu {
        display: none;
    }
}
</style>