<script>
export default {

}
</script>

<template>
    <div class="footer__title">
        <div class="footer__title-content">
            <nav class="footer__nav">
                <ul>
                    <li><a href="">Каталог</a></li>
                    <li><a href="">Акции</a></li>
                    <li><router-link to="/service/frozen">Сервис</router-link></li>
                    <li><a href="">О компании</a></li>
                    <li><a href="">Покупателям</a></li>
                    <li><a href="">Партнерам</a></li>
                </ul>
            </nav>
            <div class="footer__icons">
                <ul>
                    <li><a href=""><i class="fa-brands fa-vk"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
                    <li><a href=""><i class="fa-solid fa-square-plus"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-tiktok"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="footer__title-contacts">
            <ul>
                <li><a href="tel:+7 (499) 490-32-78">+7 (499) 490-32-78</a></li>
                <li><a href="milto:im@portaprima.ru">im@portaprima.ru</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.footer__title {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
}

.footer__title::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: .2px;
    background: #888;
    margin: calc(20px + 20 * (100vw / 1337)) 0px;
}

.footer__title-content {
    display: flex;
    flex-direction: column;
    gap: calc(25px + 25 * (100vw / 1336));
}


.footer__nav ul {
    display: flex;
}

.footer__nav ul li {
    margin: 0 19px 0px;
}

.footer__nav ul li:first-child {
    margin: 0px 19px 0px 0px;
}

.footer__nav ul li>a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: calc(10px + 6 * (100vw / 1336));

}

.footer__nav ul li>a:hover {
    color: #8f332f;
    transition: color .2s ease;
}

.footer__icons ul {
    display: flex;
    gap: 10px;
}

.footer__icons ul li>a {
    color: #999;
    padding: 7px 10px;
    border-radius: 3px;
    border: solid 1px #999;
    font-size: calc(10px + 6 * (100vw / 1336));

}

.footer__icons ul li>a:hover {
    color: #fff;
    transition: color .2s ease;
}

.footer__title-contacts ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1.9;
}

.footer__title-contacts ul li>a {
    text-decoration: none;
    color: #fff;
    font-size: calc(10px + 6 * (100vw / 1336));

}

.footer__title-contacts ul li>a:hover {
    color: #8f332f;
    transition: color .2s ease;

}

@media (max-width: 767px) {
    .footer__title {
        justify-content: center;
    }

    .footer__title-content {
        align-items: center;
    }

    .footer__nav ul {
        justify-content: center;
        flex-wrap: wrap;
    }

    .footer__nav ul li {
        margin: 0 19px 10px;
    }

}

/* Landscape phones and smaller */
@media (max-width: 480px) {}
</style>