<template>
    <div class="production__kostromskoe">
        <img src="@/assets/production/04.webp" alt="">
        <div class="production__kostromskoe-content">
            <div class="production__kostromskoe-imgs">
                <img src="@/assets/production/03.webp" alt="">
                <img src="@/assets/production/04.webp" alt="">
                <img src="@/assets/production/05.webp" alt="">
            </div>
            <div class="production__kostromskoe-text">
                <div class="service__content-title">
                    <h4>Костромское производство</h4>
                </div>
                <div class="kostromskoe-text__content">
                    <p>Техпроцесс изготовления погонажных изделий, применяемый на костромском предприятии, состоит из
                        нескольких
                        этапов:</p>
                    <ul>
                        <li><b>Получение пиломатериала</b> — из сырья хвойных деревьев изготавливаются доски с помощью
                            новейшего
                            лентопилочного оборудования;</li>
                        <li><b>Сушка </b> — пиломатериал подвергается просушке в автоматизированном комплексе,
                            обеспечивающем
                            контроль влажности на протяжении всего процесса;
                        </li>
                        <li><b>Обработка </b>— на высокотехнологичном оборудовании европейского производства выполняется
                            дальнейшая обработка заготовок;</li>
                        <li><b>Раскрой </b>— для последующего производства погонажных изделий необходимо раскроить
                            подготовленный пиломатериал;
                        </li>
                        <li><b>Склеивание </b>— посредством современных горячих прессов производится склеивание древесных
                            элементов;</li>
                        <li><b>Строжка и облицовка </b> — профильная строжка заготовок осуществляется с помощью
                            четырехсторонних
                            станков, облицовочный процесс происходит на линии окутывания;</li>
                        <li><b>Шлифовка </b>— высококачественное шлифование достигается за счет применения дисковых и
                            ленточных
                            станков;</li>
                        <li><b>Покраска</b> — придание изделиям определенного цвета происходит в специальных окрасочных
                            камерах.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="production__img">
            <img src="@/assets/production/06.webp" alt="">
            <img src="@/assets/production/07.webp" alt="">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
    font-size: 16px;
    color: #333;
}

.production__kostromskoe {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0px 0px 2rem 0px;
}

.production__kostromskoe-content {
    display: flex;
    gap: 30px;
}

.production__img {
    display: flex;
    align-items: center;
    gap: 50px;
}

.production__img img {
    width: 100%;
    object-fit: cover;
}

.production__img img:first-child {
    width: 570px;
}

.production__img img:last-child {
    height: 284px;
}

.production__kostromskoe-imgs {
    flex: 1 1 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.production__kostromskoe-imgs img {
    width: 360px;
}

.production__kostromskoe-text {
    flex: 1 1 75%;

}

.service__content-title h4 {
    display: inline-block;
}

.kostromskoe-text__content {
    padding: 1rem 0px 0px 0px;
    border-top: solid 1px #ccc;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.kostromskoe-text__content ul {
    margin: 0px 0px 0px 2rem;
    flex: 1 1 auto;
    padding: 0;
}

.kostromskoe-text__content ul li {
    list-style: disc;
    margin: 0px 0px 10px 0px;
}

.kostromskoe-text__content ul li::marker {
    color: #8f332f;
}

.production__kostromskoe>img {
    display: none;
}

@media (max-width: 992px) {}

@media (max-width: 767px) {

    .production__kostromskoe-imgs {
        display: none;
    }

    .production__kostromskoe>img {
        display: block;
    }

    .production__img {
        gap: 10px;
    }

    .production__img img:first-child {
        flex: 1 1 30%;
        width: 180px;
        height: 176px;
    }

    .production__img img:last-child {
        flex: 1 1 70%;
        height: 176px;
    }
}

@media (max-width: 480px) {
    .production__img img:first-child {
        display: none;
    }
}
</style>