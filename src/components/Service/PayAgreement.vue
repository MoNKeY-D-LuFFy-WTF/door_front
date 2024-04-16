<template>
    <div class="pay__agreement">
        <div class="service__content-title">
            <h4>СОГЛАШЕНИЕ НА ОБРАБОТКУ ЛИЧНЫХ ДАННЫХ</h4>
        </div>
        <div class="pay__agreement-content">
            <p>Присоединяясь к настоящему Соглашению и оставляя свои данные на Сайте portaprima.ru, путем заполнения полей
                формы (оставления заявки) Пользователь:</p>
            <ul class="pay__agreement-list">
                <li>подтверждает, что все указанные им данные принадлежат лично ему;</li>
                <li>подтверждает и признает, что им внимательно в полном объеме прочитано Соглашение и условия обработки его
                    персональных данных, указываемых им в полях формы (регистрации), текст соглашения и условия обработки
                    персональных данных ему понятны;</li>
                <li>дает согласие на обработку Сайтом предоставляемых в составе информации персональных данных в целях
                    заключения между ним и Сайтом настоящего Соглашения, а также его последующего исполнения;</li>
                <li>дает согласие на передачу своих персональных данных партнерам мероприятий организатора;
                </li>
                <li>дает согласие на получение информационной рассылки о новостях Сайта, в том числе анонсов статей,
                    размещенных на Сайте и рекламных материалов от партнеров Сайта;</li>
                <li>выражает согласие с условиями обработки персональных данных.</li>
            </ul>
            <div class="pay__agreement-info">
                <ul>
                    <li>ООО "Торговый Дом ДОП №1"</li>
                    <li>Юридический адрес: 141190, Московская обл., г.Фрязино, Заводской проезд д.4, стр.1, пом.212</li>
                    <li>ИНН: 7719742029</li>
                    <li>ОГРН: 1107746059431</li>
                    <li>р/с: 4080281034 00000 49712</li>
                    <li>ПАО «Сбербанк России» г.Москва</li>
                    <li>к/с: 30101810400000000225</li>
                    <li>БИК: 044525225</li>
                    <li>Официальный лицензиат ТМ Portaprima</li>
                    <li>с 01.04.2013г. по 28.09.2021г.</li>
                </ul>
                <ul>
                    <li>ИП Блохин П.А.</li>
                    <li>Юридический адрес: Московская обл., г. Москва, поселение Сосенское, п Коммунарка</li>
                    <li>ИНН: 612902158553</li>
                    <li>ОГРНИП: 319505000037191</li>
                    <li>р/с: 40802810340000103124</li>
                    <li>ПАО Сбербанк г. Москва</li>
                    <li>к/с: 30101810400000000225</li>
                    <li>БИК: 044525225</li>
                </ul>
                <ul>
                    <li>ИП Тананова А.А.</li>
                    <li>Юридический адрес: Московская обл., г. Фрязино</li>
                    <li>ИНН: 505203474023</li>
                    <li>ОГРНИП: 322508100311250</li>
                    <li>р/с: 40802810840000221098</li>
                    <li>ПАО Сбербанк г. Москва</li>
                    <li>к/с: 30101810400000000225</li>
                    <li>БИК: 044525225</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
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

.pay__agreement {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.pay__agreement-content {
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
    margin: 0px 0px 2rem 0px;
}

.pay__agreement {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}




.pay__agreement-list li {
    list-style: disc;
    margin: 0px 0px 10px 0px;
}

.pay__agreement-list li::marker {
    color: #8f332f;
}

.pay__agreement-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
}

.pay__agreement-info ul li {
    color: #333;
    font-weight: 700;
    font-size: calc(14px + 2 * (100vw / 1336));
}

.pay__agreement-info ul {
    margin: 0;
    padding: 0;
}
</style>