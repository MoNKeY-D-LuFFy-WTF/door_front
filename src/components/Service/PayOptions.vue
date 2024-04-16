<template>
    <div class="service__pay">
        <div class="service__content-title">
            <h4>ВАРИАНТЫ ОПЛАТЫ</h4>
        </div>
        <div class="pay__options">
            <div class="pay__option">
                <div class="pay__option-img">
                    <img src="@/assets/service/pay/i-payment-1.png" alt="">
                </div>
                <div class="pay__option-text">
                    <h6>Наличный расчет.</h6>
                    <p>
                        Оплата осуществляется по факту доставки при оформление стандартной продукции без предварительной
                        врезки. Так же оплату можно произвести в кассе при производстве.
                    </p>
                </div>
            </div>
            <div class="pay__option">
                <div class="pay__option-img">
                    <img src="@/assets/service/pay/i-payment-2.png" alt="">
                </div>
                <div class="pay__option-text">
                    <h6>Оплата по ссылке.</h6>
                    <p>
                        Оплата возможна при оформлении заказа через официальный сайт.
                    </p>
                </div>
            </div>
            <div class="pay__option">
                <div class="pay__option-img">
                    <img src="@/assets/service/pay/i-payment-3.png" alt="">
                </div>
                <div class="pay__option-text">
                    <h6>Банковской картой онлайн по номеру счета или по QR коду.</h6>
                    <p>
                        Оплата банковской картой сразу при оформлении заказа. Квитанция со всеми необходимыми реквизитами и
                        указанной суммой высылается Вам по электронной почте после подтверждения заказа.
                    </p>
                </div>
            </div>
            <div class="pay__option">
                <div class="pay__option-img">
                    <img src="@/assets/service/pay/i-payment-4.png" alt="">
                </div>
                <div class="pay__option-text">
                    <h6>Банковский перевод для физических лиц.</h6>
                    <p>
                        Оплата заказа через любой банк без открытия банковского счета. Квитанция со всеми необходимыми
                        реквизитами и указанной суммой высылается Вам по электронной почте после подтверждения заказа.
                    </p>
                </div>
            </div>
            <div class="pay__option">
                <div class="pay__option-img">
                    <img src="@/assets/service/pay/i-payment-5.png" alt="">
                </div>
                <div class="pay__option-text">
                    <h6>100 % оплата с расчетного счета.</h6>
                    <p>
                        Доступна юридическим лицам после получения счета по электронной почте. Цены при оплате с расчетного
                        счета с учетом НДС такие же, как за наличный расчет.
                    </p>
                </div>
            </div>
            <div class="pay__option">
                <div class="pay__option-img">
                    <img src="@/assets/service/pay/i-payment-3.png" alt="">
                </div>
                <div class="pay__option-text">
                    <h6>Рассрочка от фабрики и по карте Халва.</h6>
                    <p>
                        Первый взнос 0 руб. Переплата 0%. От 6 до 24 мес.
                    </p>
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

.service__pay {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 0px 5rem 0px;
}

.pay__options {
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    gap: 20px;
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
    align-items: start;
}

.pay__option {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}


.pay__option-img img {
    object-fit: cover;

}

.pay__option-text {
    display: flex;
    flex-direction: column;
    align-items: start;
}

@media (max-width: 700px) {
    .pay__options {
        grid-template: 1fr /1fr;
    }
}
</style>