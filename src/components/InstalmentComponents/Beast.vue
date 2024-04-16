<template>
    <div class="instalment__container">
        <div class="beast__content my-5">
            <div class="beast__content-title">
                <h1>
                    Двери от производителя за
                    <b>1 938 руб.</b>
                    <br>
                    Лучшие условия по рассрочке в Porta prima.
                </h1>
            </div>
            <div class="beast__content-subtitle">
                <p>
                    Хватит экономить на качестве. Всего от 1 809 рублей в месяц за качественную дверь. И всего 6 месяцев.
                    Без
                    переплаты, с сохранением скидки, без первоначального взноса.</p>
            </div>
            <div class="beast__content-items">
                <div class="beast__content-item">
                    <i class="fa-solid fa-wallet"></i>
                    <div>
                        <b>
                            Новые двери за 0 рублей
                        </b>
                    </div>
                    <div>
                        <p>
                            Вы получаете новые двери, даже не имея в данный момент необходимой суммы на их приобретение.
                            <br>
                            Вы сразу
                            <router-link to="/">знаете размер ежемесячного платежа</router-link>
                            и можете, при желании, погашать платежи досрочно, или по мере поступления такой возможности.
                        </p>
                    </div>
                </div>
                <div class="beast__content-item">
                    <i class="fa-solid fa-dharmachakra"></i>
                    <div>
                        <b>
                            Рассрочка от фабрики
                        </b>
                    </div>
                    <div>
                        <p>Вы сами выбираете оптимальный вариант рассрочки. Наши специалисты всегда
                            готовы помочь вам в&nbsp;этом вопросе.<br><br>
                            Экономьте свое время, не&nbsp;тратя его на&nbsp;посещения банков с&nbsp;целью выяснения
                            возможности получения кредита. Porta&nbsp;prima все сделала за&nbsp;вас, и&nbsp;<router-link
                                to="/">даёт рассрочку от&nbsp;производителя</router-link>!
                        </p>
                    </div>
                </div>
                <div class="beast__content-item">
                    <i class="fa-solid fa-wallet"></i>
                    <div>
                        <b>
                            Рассрочка по карте Халва
                        </b>
                    </div>
                    <div>
                        <p>
                            Первый взнос 0 руб.
                            <br>
                            Переплата 0%.
                            <br>
                            От 6 до 24 мес.
                        </p>
                    </div>
                </div>
                <div class="beast__content-item">
                    <i class="fa-regular fa-clock"></i>
                    <div>
                        <b>
                            Рассрочка за 10-15 минут
                        </b>
                    </div>
                    <div>
                        <p>Рассматриваем анкету заявителя всего <router-link to="">10-15&nbsp;минут</router-link>!<br><br>
                            Вы&nbsp;дополнительно экономите свое время, так как процесс рассмотрения и&nbsp;оформления
                            заявки на&nbsp;покупку дверей в&nbsp;рассрочку займет минимум вашего времени.</p>
                    </div>
                </div>
            </div>
            <div class="beast__content-link">
                <main-link :link="`/`">Подобрать дверь</main-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.beast__content {
    display: flex;
    flex-direction: column;
}

.beast__content-title h1 {
    color: #333;
    font-weight: 400;
}

.beast__content-subtitle {
    margin: 0px 0px calc(35px + 25 * (100vw / 1336)) 0px;
}

.beast__content-subtitle p {
    max-width: 800px;
    color: #666;
    font-size: calc(15px + 3 * (100vw / 1336));
}

.beast__content-items {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8%;
    color: #666;
    margin: 0px 0px calc(35px + 25 * (100vw / 1336)) 0px;
}

.beast__content-item {
    flex: 1 1 25%;
}

.beast__content-item i {
    font-size: calc(35px + 25 * (100vw / 1336));
    margin: 0px 0px 10px 0px;
    color: #666;
}

.beast__content-item div {
    font-size: calc(15px + 3 * (100vw / 1336));
}

.beast__content-item div a {
    color: #8f332f;
    text-decoration: none;
    background: transparent;
}

.beast__content-link {
    align-self: center;
}


@media (max-width: 991px) {
    .beast__content-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }
}

@media (max-width: 767px) {
    .beast__content-items {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>