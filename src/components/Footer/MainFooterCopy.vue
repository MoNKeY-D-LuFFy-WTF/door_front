<script>
export default {

}
</script>

<template>
    <div class="footer__copy">
        <p>2024 &copy; Все права защищены. Любая информация, содержащаяся на настоящем сайте, носит исключительно справочный
            характер, и не является публичной офертой.</p>
        <p>Все материалы данного сайта являются объектами авторского права. Копирование и распространение любых материалов
            сайта без предварительного согласия правообладателя и активной ссылки на сайт запрещено.</p>
    </div>
</template>

<style scoped>
.footer__copy {
    max-width: 60%;
    font-size: 13px;
}

.footer__copy p {
    color: #999;
    line-height: 1.4;
}

@media (max-width: 767px) {
    .footer__copy {
        max-width: 100%;
        text-align: center;
    }
}
</style>