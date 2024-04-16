<script>
export default {

}
</script>
<template>
    <div class="footer__copy">
        <div class="container-lg">
            <div>
                <div class="footer__copy-content">
                    <p>
                        &copy; 2024 Фирменный интернет-магазин и сеть салонов межкомнатных дверей «Porta prima»
                    </p>
                    <a href="">Политика обработки персональных данных</a>
                    <p>
                        Приведенная на сайте информация не является публичной офертой и носит информационно ознакомительный
                        характер.
                        <br>
                        Для уточнения наличия и характеристик товара просьба обращаться к менеджерам интернет магазина по
                        указанным номерам телефонов.
                    </p>
                </div>
                <div class="footer__copy-icons">
                    <span>Мы в соцсетях:</span>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                    <a href=""><i class="fa-brands fa-vk"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer__copy {
    padding: 20px 0px;
}

.container-lg {}

.container-lg>div {
    display: flex;
    justify-content: space-between;
}

.footer__copy-content {
    flex: 1 1 70%;
}


.footer__copy-content p:first-child {
    font-size: calc(13px + 2 * (100vw / 1336));
    margin: 0px 0px 20px 0px;
}

.footer__copy-content a {
    text-decoration: none;
    color: #999;
    border-bottom: solid 1px #ccc;
    font-size: calc(12px + 2 * (100vw / 1336));
}

.footer__copy-content a:hover {
    color: #8f332f;
    border-color: #8f332f;
    transition: all ease .3s;
}

.footer__copy-content p:last-child {
    font-size: calc(10px + 2 * (100vw / 1336));
    color: #aaa;
    margin: 20px 0px;

}

.footer__copy-icons {
    flex: 1 1 30%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: center;
}


.footer__copy-icons span {
    margin: 9px 20px 0px 0px;
    font-size: calc(13px + 2 * (100vw / 1336));
}

.footer__copy-icons a {
    font-size: 20px;
    color: #000;
    padding: 5px 10px;
}

.footer__copy-icons a:hover {
    background: #32323233;
    transition: all ease .3s;
}

@media (max-width: 767px) {
    .footer__copy-icons span {
        display: none;
    }
}

@media (max-width: 480px) {
    .container-lg>div {
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .footer__copy-icons {
        order: 1;
    }

    .footer__copy-content {
        order: 2;
    }

}
</style>