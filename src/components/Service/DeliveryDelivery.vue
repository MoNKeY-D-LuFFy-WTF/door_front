<template>
    <div class="delivery__delivery">
        <div class="service__content-title">
            <h4>ДОСТАВКА</h4>
        </div>
        <div class="delivery__delivery-content">
            <div class="delivery__delivery-items">
                <div class="delivery__delivery-item">
                    <img src="@/assets/service/delivery/sohrannost.gif" alt="">
                    <div class="delivery-item__text">
                        <h6>Сохранность дверей</h6>
                        <p>
                            Специально оборудованные автомобили собственного автопарка компании позволяют обеспечить
                            сохранность <router-link to="/">межкомнатных дверей</router-link> в период доставки.
                        </p>
                    </div>
                </div>
                <div class="delivery__delivery-item">
                    <img src="@/assets/service/delivery/delivery.gif" alt="">
                    <div class="delivery-item__text">
                        <h6>Высокая скорость доставки</h6>
                        <p>Доставка дверей по складской программе осуществляется в срок до 5 дней с момента оформления
                            заказа в Москве и Московский области.</p>
                    </div>
                </div>
                <div class="delivery__delivery-item">
                    <img src="@/assets/service/delivery/ceny.gif" alt="">
                    <div class="delivery-item__text">
                        <h6>Конкурентоспособные цены</h6>
                        <p>Собственный парк автомашин позволяет установить минимальные тарифы доставки во все районы Москвы
                            и Московский области.</p>
                    </div>
                </div>
                <div class="delivery__delivery-item">
                    <img src="@/assets/service/delivery/ohvat.gif" alt="">
                    <div class="delivery-item__text">
                        <h6>Удобный сервис</h6>
                        <p>Сервисная служба предварительно согласует и дату, и время доставки с покупателем и организует
                            доставку дверей в наиболее удобное время.</p>
                    </div>
                </div>
                <div class="delivery__delivery-item">
                    <img src="@/assets/service/delivery/service.gif" alt="">
                    <div class="delivery-item__text">
                        <h6>Доставка в другие города России</h6>
                        <p>Отдел логистики компании Porta prima - оказывает клиентам полный спектр услуг по доставке товара
                            со склада производства до адреса покупателя в различные города России в соответствии с <a
                                href="https://portaprima.ru/uslugi/dostavka/address.pdf">адресным перечнем</a>.</p>
                    </div>
                </div>
                <div class="delivery__delivery-item">
                    <img src="@/assets/service/delivery/country.jpg" alt="">
                </div>
            </div>
            <div class="delivery__delivery-advantages">
                <h6 class="title-red">Преимущества покупки дверей Porta prima он-лайн из любого уголка России:</h6>
                <ul>
                    <li>Стильные межкомнатные двери в соответствии с трендом интерьерной моды Италии!</li>
                    <li>Гарантия качества от производителя - 5 лет!</li>
                    <li>Покупка дверей, не выходя из дома от известной фабрики!</li>
                    <li>Подбор дверей к Вашему интерьеру на сайте!</li>
                    <li>Заказ в один клик, консультации специалистов, сохранность груза!</li>
                </ul>
            </div>
            <div class="delivery__delivery-advantages">
                <h6 class="title-red">Как заказать двери?</h6>
                <ul>
                    <li>Выбирайте модель в каталоге межкомнатных дверей от производителя Porta prima!</li>
                    <li>Нажмите на кнопку "Купить в 1 клик"!</li>
                    <li>С Вами свяжется персональный менеджер для уточнения параметров заказа и оформит доставку в Ваш
                        город!</li>
                </ul>
                <p>Для расчета и уточнения стоимости доставки в Ваш город обращайтесь к менеджеру Интернет - магазина.</p>
            </div>
            <div class="delivery__delivery-advantages">
                <h6 class="title-red">Низкие цены на доставку по России!</h6>
                <p>Доставка 4 дверей для однокомнатной квартиры, например в Архангельск стоит 2912 руб., что не более 4% от
                    стоимости дверей!
                    Стоимость доставки уже включает:</p>
                <ul>
                    <li>Обрешетка для сохранности дверей от механических повреждений!</li>
                    <li>Страхование груза всего 0,17% от его стоимости!</li>
                </ul>
                <div class="delivery__delivery-table">
                    <h6>Пример расчета доставки</h6>
                    <div class="delivery-table__wrapper">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Пункт назначения</th>
                                    <th scope="col">Время в пути</th>
                                    <th scope="col">Кол-во к-тов</th>
                                    <th scope="col">Вес</th>
                                    <th scope="col">Цена за 1 кг.</th>
                                    <th scope="col">Цена с обрешеткой 25%</th>
                                    <th scope="col">Стоимость груза</th>
                                    <th scope="col">Страховка 0.17%</th>
                                    <th scope="col">Итого до терминала</th>
                                    <th scope="col">Доставка от терминала до адреса*</th>
                                    <th scope="col">Итого (руб.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Архангельск</td>
                                    <td>3 суток</td>
                                    <td>4</td>
                                    <td>142,40</td>
                                    <td>12,80 </td>
                                    <td>2278,40</td>
                                    <td>78444</td>
                                    <td>133 </td>
                                    <td>2412</td>
                                    <td>500</td>
                                    <td>2912</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Владивосток </td>
                                    <td>12 с-к</td>
                                    <td>4</td>
                                    <td>142,40</td>
                                    <td>37,40</td>
                                    <td>6657,20</td>
                                    <td>78444</td>
                                    <td>133</td>
                                    <td>6791</td>
                                    <td>500</td>
                                    <td>7291</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><em>*- Доставка от терминала транспортной компании до адреса клиента указана ориентировочно, точная
                            стоимость рассчитывается индивидуально.</em></p>
                    <h6 class="title-red text-uppercase">
                        ВАМ НУЖНО ТОЛЬКО ВЫБРАТЬ ДВЕРИ, ВСЕ ОСТАЛЬНОЕ СДЕЛАЕМ ЗА ВАС!
                    </h6>
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

a {
    color: #8f332f;
}

a:hover {
    text-decoration: none;
}

li {
    list-style: disc;
    font-size: calc(12px + 2 * (100vw / 1336));
    color: #333;
    line-height: calc(19px + 6 * (100vw / 1336));
    margin: 0px 0px 10px 0px;
}

li::marker {
    color: #8f332f;
}

.delivery__delivery-content {
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
    margin: 0px 0px 2rem 0px;
}

.delivery__delivery {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.delivery__delivery-items {
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    align-items: center;
    gap: 10px;
}

.delivery__delivery-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.delivery__delivery-item img {
    object-fit: cover;
}

.delivery__delivery-item img:not(.delivery__delivery-item img:last-child) {
    width: 45px;
}

.delivery__delivery-item:last-child img {
    width: 400px;
}

.delivery__delivery-item:last-child {
    justify-self: center;
}

.title-red {
    color: #8f332f;
    margin: 0px 0px 15px 0px;
}

.delivery__delivery-table .delivery-table__wrapper table {
    text-align: center;
    font-size: 13px;
}



.delivery__delivery-table .delivery-table__wrapper table thead tr th {
    font-weight: 400;
    padding: 0px 10px 20px 10px;
    background: #f0f0f0;
    line-height: calc(20px + 5 * (100vw / 1336));
    color: #25292d;

}

.delivery__delivery-table .delivery-table__wrapper table tbody tr th {
    font-weight: 400;

}

.delivery__delivery-table .delivery-table__wrapper tbody tr td {
    padding: 10px 15px;
    font-size: calc(14px + 2 * (100vw / 1336));
    color: #25292d;

}

@media (max-width: 950px) {

    .delivery__delivery-table .delivery-table__wrapper {
        width: calc(280px + 500 * (100vw / 950));
        overflow-x: auto;
    }

    .delivery__delivery-table .delivery-table__wrapper table {
        width: 100%;
    }
}

@media (max-width: 570px) {

    .delivery__delivery-items {
        grid-template: 1fr / 1fr;
    }

    .delivery__delivery-item {
        flex-direction: column;
        align-items: center;
    }

    .delivery__delivery-table .delivery-table__wrapper {
        width: calc(300px + 100 * (100vw / 570));
    }

}
</style>