<template>
    <div class="frozen">
        <div class="frozen__form">
            <div class="frozen__form-title">
                <h3>Вызов замерщика</h3>
            </div>
            <div class="frozen__form-subtitle">
                <p>Профессиональный замер проемов, и помощь в подборе модели и цвета двери или перегородки.</p>
            </div>
            <CallFrozen />
        </div>
        <div class="frozen__content">
            <div class="service__content-title">
                <h4>ВЫЗОВ ЗАМЕРЩИКА</h4>
            </div>
            <div class="frozen__content-text">
                <p>Установка и изготовление межкомнатных дверей по размерам – значимый и ответственный этап любого ремонта.
                    Специалисты фабрики Porta prima снимают замеры проемов на объектах в Москве и области. Если Вы
                    проживаете в других регионах РФ, рекомендуется обратиться к дистрибьюторам фабрики.
                </p>
                <p>
                    Замер, выполненный специалистом Porta prima, позволяет:
                </p>
                <ul>
                    <li> исключить ошибки при оформлении заказа дверей; </li>
                    <li>правильно рассчитать размеры полотен, количество наличников и тип коробки;</li>
                    <li>рассчитать нужное количество доборов для двери.</li>
                </ul>
                <p>
                    Дату и время снятия замеров Вы определяете самостоятельно. Мы возвращаем стоимость данной услуги при
                    оформлении заказа на межкомнатные двери. С помощью бесплатного замера от Porta prima вы сможете купить
                    межкомнатные двери под размеры, и не будет никаких неприятных неожиданностей.
                </p>
                <p>
                    Чтобы получить более подробную консультацию по этому вопросу или заказать замер в Москве и области,
                    воспользуйтесь одним из следующих способов связи:
                </p>
                <ul>
                    <li>телефон:
                        <phone class="phone" /> доб. 253, 255, 260;
                    </li>
                    <li>e-mail:
                        <email class="email" />;
                    </li>
                    <li>вызов замерщика в онлайн-режиме.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import CallFrozen from '@/components/Form/CallFrozen.vue';
export default {
    components: {
        CallFrozen
    },
}
</script>

<style scoped>
.frozen {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    margin: 0.5rem 0px 4rem 0px;
}

.frozen__form {
    width: 700px;
    border: solid 1px #ccc;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
}

.frozen__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.frozen__form-title h3 {
    font-size: calc(25px + 7 * (100vw / 1336));
    font-weight: 400;
}

.frozen__form-subtitle p {
    font-size: calc(13px + 2 * (100vw / 1336));
    opacity: .8;
    line-height: 1.3;
}

.frozen__content-text {
    border-top: solid 1px #ccc;
    padding: 15px 0px 0px 0px;
}

.frozen__content-text p {
    color: #333;
    font-size: calc(14px + 2 * (100vw / 1336));
    margin: 0px 0px 30px 0px;

}

.frozen__content-text li {
    list-style-type: disc;
    font-size: calc(13px + 2 * (100vw / 1336));
    margin: 0px 0px 11px 0px;
}

.frozen__content-text li::marker {
    color: #8f332f;
}

.phone {
    text-decoration: underline;
    color: #8f332f;
}

.phone:hover {
    text-decoration: none;
}

.email {
    text-decoration: underline;
    color: #8f332f;
}

.email:hover {
    text-decoration: none;
}

@media (max-width: 767px) {
    .frozen__form {
        width: 100%;
    }
}
</style>