<template>
    <div class="pay__order">
        <div class="service__content-title">
            <h4>ПОРЯДОК ПРОВЕДЕНИЯ ОПЛАТЫ</h4>
        </div>
        <div class="pay__order-content">
            <ol class="pay__order-list">
                <li>Покупатель делает заказ на сайте через корзину, форму обратной связи или по телефону.</li>
                <li>После этого менеджер магазина связывается с покупателем для согласования условий доставки,подтверждения
                    адреса, а также для проверки наличия товара на складе.</li>
                <li>После этого высылает покупателю по электронной почте или в мессенджер ссылку на оплату картой.</li>
                <li>При нажатии на кнопку «Оплатить участие». происходит переадресация на сайт платежной системы, на которой
                    находится форма для указания реквизитов карты, где участник вводит следующую информацию:</li>
                <ul class="pay__order-child">
                    <li>Тип карты.</li>
                    <li>Номер карты.</li>
                    <li>Дата окончания срока действия карты.</li>
                    <li>Имя и фамилия, как указано на карте.</li>
                    <li>Значения CVC2 или CVV2.</li>
                    <li>Специальный пароль для подтверждения оплаты.</li>
                    <li>После этого информация об операции передаётся в банк.</li>
                    <li>Если оплата одобрена банком, сайт portaprima.ru и участник получают подтверждение. Обработка
                        одобренной банком операции по оплате участия осуществляется автоматически не позднее следующего
                        рабочего дня после дня совершения операции.</li>
                </ul>
            </ol>
            <p>
                При возникновении проблем с оплатой заказа на странице банка, Вы можете связаться с ПАО «СБЕРБАНК РОССИИ» по
                телефону: <a href="tel:8 (800) 555-55-50">8 (800) 555-55-50</a>.
            </p>
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

li {
    font-size: calc(12px + 2 * (100vw / 1336));
    color: #333;
    line-height: calc(19px + 6 * (100vw / 1336));
}

ol li {
    list-style: decimal;
    margin: 0px 0px 10px 0px;
}

ol li::marker {
    color: #8f332f;
    font-weight: bold;
}

ol ul {
    margin: 20px 0px 0px 0px;
    padding: 0px 0px 0px 2.5rem;
}

ol ul li {
    list-style: disc;

}

.pay__order {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.pay__order-content {
    border-top: solid 1px #ccc;
    padding: 1.5rem 0px 0px 0px;
    margin: 0px 0px 3rem 0px;
}

.pay__order-content p a {
    color: #8f332f;
}

.pay__order-content p a:hover {
    text-decoration: none;
}
</style>