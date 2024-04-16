<template>
    <div v-if="show" class="modal__agreement">
        <div class="modal__agreement-content p-3">
            <button @click="closeModel(false, false)" class="x">x</button>
            <p>Согласие на обработку персональных данных</p>
            <p>Настоящим в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006 года
                свободно,
                своей волей и в своем интересе выражаю свое безусловное согласие на обработку моих персональных данных
                ООО
                "ФАБРИКА ДВЕРЕЙ" (ОГРН 1155050003888, ИНН 5050119240), зарегистрированным в соответствии с
                законодательством
                РФ по адресу:
                ЗАВОДСКОЙ ПР-Д, Д. 4, СТР. 1, ФРЯЗИНО, МОСКОВСКАЯ ОБЛАСТЬ, Россия, 141190 (далее по тексту - Оператор).
            </p>
            <p>
                1. Согласие дается на обработку одной, нескольких или всех категорий персональных данных, не являющихся
                специальными или биометрическими, предоставляемых мною, которые могут включать:
            </p>
            <p>
                - Имя; <br>
                - Телефон; <br>
                - Комментарий. <br>
            </p>
            <p>
                2. Оператор может совершать следующие действия: сбор; запись; систематизация; накопление; хранение;
                уточнение (обновление, изменение); извлечение; использование; блокирование; удаление; уничтожение.
            </p>
            <p>
                3. Способы обработки: как с использованием средств автоматизации, так и без их использования.
            </p>
            <p>
                4. Цель обработки: предоставление мне услуг/работ, включая, направление в мой адрес уведомлений,
                касающихся
                предоставляемых услуг/работ, подготовка и направление ответов на мои запросы, направление в мой адрес
                информации о мероприятиях/товарах/услугах/работах Оператора.
            </p>
            <p>
                5. В связи с тем, что Оператор может осуществлять обработку моих персональных данных посредством
                программы
                для ЭВМ «1С-Битрикс24», я даю свое согласие Оператору на осуществление соответствующего поручения ООО
                «1С-Битрикс», (ОГРН 5077746476209), зарегистрированному по адресу: 109544, г. Москва, б-р Энтузиастов,
                д. 2,
                эт.13, пом. 8-19.
            </p>
            <p>
                6. Настоящее согласие действует до момента его отзыва путем направления соответствующего уведомления на
                электронный адрес vinokurov@portaprima.ru или направления по адресу ЗАВОДСКОЙ ПР-Д, Д. 4, СТР. 1,
                ФРЯЗИНО,
                МОСКОВСКАЯ ОБЛАСТЬ, Россия, 141190.
            </p>
            <p>
                7. В случае отзыва мною согласия на обработку персональных данных Оператор вправе продолжить обработку
                персональных данных без моего согласия при наличии оснований, предусмотренных Федеральным законом
                №152-ФЗ «О
                персональных данных» от 27.07.2006 г.
            </p>
            <div class="buttons">
                <opacity-btn :type="`button`" @click="closeModel(false, true)">Принимаю</opacity-btn>
                <button @click="closeModel(false, false)" class="btn">Не принимаю</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'm-agreement',
    props: {
        show: {
            require: false,
            type: Boolean,
        }
    },
    methods: {
        closeModel(close, ok) {
            return this.$emit('closeModel', close, ok)
        }
    },

}
</script>

<style scoped>
.modal__agreement {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: #00000081;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal__agreement-content {
    border-radius: 10px;
    height: 85%;
    width: 45%;
    margin: 0 auto;
    position: relative;
    top: 0;
    left: 0;
    background: #fff;
    overflow-y: auto;
}

.modal__agreement-content button.x {
    position: absolute;
    top: 2%;
    right: 2%;
    background: #8f332f;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    padding: 5px 15px;
    text-align: center;
    border-radius: 50%;
    opacity: 0.5;
    border: 0;
    margin: 0;
    transition: opacity .2s normal;
}

.modal__agreement-content button.x:hover {
    opacity: 1;
    transition: opacity .2s normal;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 2%;
}

.buttons button {
    flex: 1 1 50%;
    padding: 15px 0px;
}

.buttons button.btn {
    border: solid 1px #000;
}

@media (max-width: 900px) {
    .modal__agreement-content {
        width: 95%;
    }
}
</style>