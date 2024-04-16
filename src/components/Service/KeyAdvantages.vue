<template>
    <div class="door-key__advantages">
        <div class="service__content-title">
            <h4>ПРЕИМУЩЕСТВА УСЛУГИ «ДВЕРЬ ПОД КЛЮЧ»</h4>
        </div>
        <div class="advantages__content">
            <p>Приобретая межкомнатные двери под «ключ» в компании Porta Prima, Вы получаете следующие преимущества. </p>
            <ul class="advantages__list">
                <li><b>Экономия ресурсов.</b>Большинство клиентов компании Porta Prima – состоятельные и
                    прагматичные
                    люди, которые знают цену своему времени и силам. Доверяя все работы нашим специалистам, Вы
                    освобождаете себя от лишних забот и можете заниматься более важными делами с уверенностью, что
                    установка межкомнатной двери находится под должным контролем.</li>
                <li><b>Высокое качество исполнения.</b> Все специалисты, устанавливающие межкомнатные двери «под
                    ключ»,
                    являются профессионалами своего дела. Их опыт, навыки и знания позволяют добиваться результатов,
                    удовлетворяющих требования даже самых взыскательных клиентов. Все работы осуществляются
                    максимально
                    аккуратно и бережно, чтобы сохранить неизменными первоклассный вид двери и имеющуюся отделку
                    помещений.</li>
                <li><b>Персональный подход. </b>С Вами будет работать персональный менеджер, который ведет заказ на
                    всех
                    этапах оказания услуги!
                </li>
            </ul>
            <div class="advantages__one-solution">
                <div class="one-solution__img">
                    <img src="@/assets/service/faq_bg.webp" alt="">
                    <h4>Как выбрать <br> двери?</h4>
                    <h4>Как изменить размеры проемов?</h4>
                    <h4>Как подобрать <br> фурнитуру?</h4>
                    <h4>Монтаж, когда, <br> сколько?</h4>
                </div>
                <div class="solution-img__cards">
                    <div class="solution-img__card">
                        <h4> Предлагаем <b>подбор дверей</b> на сайте или в ближайшем к вам салоне!</h4>
                    </div>
                    <div class="solution-img__card">
                        <h4>Окажем <b>квалифицированную помощь</b> в комплектации двери!</h4>
                    </div>
                    <div class="solution-img__card">
                        <h4>
                            Профессионально установим, упаковку заберем, гарантию предоставим!
                        </h4>
                    </div>
                </div>
                <div class="one-solution__title">
                    <h2>
                        <b>ОДНО РЕШЕНИЕ —</b> <br>
                        Porta prima <span>«ДВЕРЬ ПОД КЛЮЧ»</span>
                    </h2>
                </div>
                <div class="one-solution__subtitle">
                    <p><b><i class="fa-solid fa-key"></i>«Дверь под ключ» от Porta prima это:</b></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.door-key__advantages {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.advantages__content {
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
}

.door-key__included {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 0px 1.7rem 0px;
}


.advantages__content a {
    color: #8f332f;
}

.advantages__content a:hover {
    text-decoration: none;
}

.advantages__content p {
    font-size: 16px;
}

.advantages__list li {
    font-size: 14px;
    color: #333;
    line-height: 24px;
    margin: 0px 0px 5px 0px;
    list-style: decimal;
}

.advantages__list li::marker {
    color: #8f332f;
    font-weight: bold;
}


.advantages__one-solution {
    align-self: center;
    position: relative;
    top: 0;
    left: 0;
    z-index: 5;
}

.one-solution__img h4 {
    position: absolute;
    font-size: calc(16px + 4 * (100vw / 1336));
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(150px + 100 * (100vw / 1336));
    height: calc(120px + 100 * (100vw / 1336));
    border-radius: 50%;
    font-weight: 400;
    box-shadow: 0px 0px 10px #ccc;
}

.one-solution__img h4:nth-child(2) {
    top: 25%;
    left: 10%;
    background: #8f332f;
    color: #fff;
    z-index: 1;
}

.one-solution__img h4:nth-child(3) {
    top: 12%;
    left: 26%;
    background: #fff;
    z-index: 2;
}

.one-solution__img h4:nth-child(4) {
    top: 14%;
    left: 46%;
    background: #222;
    color: #fff;
    z-index: 1;
}

.one-solution__img h4:nth-child(5) {
    top: 28%;
    left: 63%;
    background: #fff;
    z-index: 1;
}

.one-solution__img img {
    width: 100%;
    object-fit: cover;
}

.solution-img__cards {
    display: none;
    gap: calc(15px + 35 * (100vw / 1336));
}

.solution-img__card {
    height: calc(50px + 100 * (100vw / 1336));
    padding: 15px 15px 0px 15px;
    margin: 20px 0px 0px 0px;
    box-shadow: 0px 0px 10px #ccc;
    flex: 1 1 20%;
}

.solution-img__card:nth-child(1) {
    background: #8f332f;
    color: #fff;
}

.solution-img__card:nth-child(2) {
    color: #fff;
    background: #222;
}

.solution-img__card h4 {
    font-size: calc(10px + 3 * (100vw / 1336));
    font-weight: 400;
}

.one-solution__title {
    margin: 5rem 0px 3rem 0px;
    text-align: center;
}

.one-solution__title h2 {
    font-weight: 400;
    color: #444;
}

.one-solution__title h2 span {
    color: #8f332f;
}

.one-solution__subtitle {
    text-align: center;
}

.one-solution__subtitle p b {
    font-size: calc(20px + 4 * (100vw / 1336));
    font-weight: 700;
}

.one-solution__subtitle p b i {
    color: #8f332f;
    margin: 0px 10px 0px 0px;
}


@media (max-width: 1200px) {
    .solution-img__cards {
        display: flex;
    }
}

@media (max-width: 992px) {
    .solution-img__cards {
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 5px;
    }

    .solution-img__cards div {
        padding: 1.3rem;
        margin: 1rem 0px 0px 0px;
    }

    .one-solution__img {
        display: flex;
        flex-direction: column;
    }

    .one-solution__img h4 {
        position: static;
        border-radius: 0%;
        width: auto;
        height: auto;
        display: block;
        text-align: start;
        padding: 1.3rem;
    }

    .one-solution__img img {
        order: 5;
    }

    .one-solution__img h4 br {
        display: none;
    }
}
</style>