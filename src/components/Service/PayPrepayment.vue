<template>
    <div class="pay__prepayment">
        <div class="service__content-title">
            <h4>КОГДА ТРЕБУЕТСЯ ПРЕДОПЛАТА</h4>
        </div>
        <div class="pay__prepayment-content">
            <ul class="pay__prepayment-list">
                <li>
                    <h6>100% предоплата.</h6>
                    <p>При заказе дверей из категории «Экспресс заказ» или с нестандартной продукцией.</p>
                </li>
                <li>
                    <h6>100% предоплата.</h6>
                    <p>При доставки заказа через Транспортную компанию.</p>
                </li>
                <li>
                    <h6>Без предоплаты.</h6>
                    <p>При оформлении заказа дверей из категории «Складская программа» со стандартными размерами и без
                        предварительной врезки.</p>
                </li>
            </ul>
            <div class="pay__prepayment-important">
                <h4>ВАЖНАЯ ИНФОРМАЦИЯ</h4>
                <p>Отправка заказанного комплекта производится сразу после подтверждения факта оплаты.</p>
                <p>Заказанный Вами товар из категории «Складская программа» будет зарезервирован на складе на срок 5 дней. В
                    случае отсутствия уведомления о времени доставке в течение 5 дней бронь на Ваш заказ будет автоматически
                    снята.</p>
            </div>
            <div class="pay__prepayment-card">
                <div class="prepayment-card__card">
                    <p>К оплате принимаются банковские карты:</p>
                    <img src="@/assets/service/pay/visa-mastercard-mir.webp" alt="">
                </div>
                <p>
                    Проведение операций оплаты банковскими картами осуществляется с применением 3DSecure технологий защиты.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h6 {
    font-size: 16px;
    font-weight: bold;
    color: #323232;
    line-height: 24px;
}

p {
    font-size: 16px;
    color: #333;
}

.pay__prepayment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 0px 2.5rem 0px;
}

.pay__prepayment-content {
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
}

.pay__prepayment-list {
    padding: 0px 0px 0px 25px;
    margin: 0px 0px 4rem 0px;
}

.pay__prepayment-list li {
    list-style-type: disc;
    padding: 0px 0px 0px 30px;
}

.pay__prepayment-list li::marker {
    color: #8f332f;
}

.pay__prepayment-important {
    border: solid 2px #8f332f;
    padding: 1.5rem 2.5rem;
    margin: 0px 0px 2.5rem 0px;
}

.pay__prepayment-important h4 {
    font-size: calc(18px + 2 * (100vw / 1336));
    font-weight: 700;
}

.pay__prepayment-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.prepayment-card__card {
    display: flex;
    align-items: center;
    margin: 0px 0px 20px 0px;
}

.prepayment-card__card p {
    margin: 0;
}

.prepayment-card__card img {
    object-fit: cover;
    width: calc(100px + 70 * (100vw / 1336));
}
</style>