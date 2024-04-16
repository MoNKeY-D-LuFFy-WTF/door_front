<template>
    <div class="container-lg">
        <div class="basket">
            <div class="basket__title">
                <h3>Корзина</h3>
            </div>
            <div v-if="response" class="alert alert-success">
{{response}}
            </div>
            <ul v-if="doors.length" class="basket__list">
                <li v-for="door in doors">
                    <div class="basket__list-door">
                        <img :src="`${BACKEND_URL}/images_catalog/${door.color.catalog_img_id}?title=${door.color.name}`"
                            alt="">
                        <ul class="list-door">
                            <li>
                                Полотно {{door.name}} 
                               <em>{{door.price_discount || door.price}} руб.</em> 
                            </li>
                            <li><b>Материал покрытия:</b> <em>{{door.material.name}} {{door.material.price}} руб.</em>
                            </li>
                            <li><b>Цвет:</b> <em>{{door.color.name}} {{door.color.price}} руб.</em></li>
                            <li><b>Система открывания:</b> <em>{{door.open_system.name}} {{door.open_system.price}}
                                    руб.</em>
                            </li>
                            <li><b>Толщина стены:</b> <em>{{door.thick.name}} {{door.thick.price}}
                                    руб.</em>
                            </li>
                            <li><b>Остекление:</b> <em>{{door.window == 1 ? `Есть 500 руб.` : 'Без стекла'}}</em> </li>
                            <li><b>Звукоизоляция:</b> <em>{{door.soung == 1 ? `Есть 600 руб.` : 'Без звукоизоляции'}}</em>
                            </li>
                            <li><b>Скидка:</b> <em>{{door.discount ? door.discount + "%" : "Нет" }}</em>
                            </li>
                        </ul>
                    </div>
                    <div class="basket__list-actions">
                        <button @click="actionQuantity('remove', door)"><i class="fa-solid fa-arrow-left"></i></button>
                        <input @input="actionQuantity('input', door)" v-model="door.quantity" class="form-control" type="text">
                        <button @click="actionQuantity('add', door)"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div class="basket__list-prices">
                        <span v-if="door.discount" class="list-prices__all">{{door.price_comp}} руб.</span>
                        <span class="list-prices__discount">{{ door.price_mobile_discount || door.price_mobile }} руб.</span>
                        <span v-if="door.quantity != 1" class="list-prices__quantity">{{door.quantity}} x {{door.price_comp_discount || door.price_comp}} руб.</span>
                    </div>
                    <div class="basket__list-close">
                        <button @click="removeDoor(door)" class="btn"> x</button>
                    </div>
                </li>
            </ul>
            <ul v-else class="basket__list"><em class="text-danger">Корзина пуста</em></ul>
            <div v-if="doors.length" class="basket__end">
                <div class="basket__end-btn">
                    <button @click="toggleModalForm(true)"> ОФОРМИТЬ ЗАКАЗ</button>
                </div>
                <div class="basket__end-price">
                    <h4>Итог</h4>
                    <div class="end-price__price">
                        <div class="end-price__all">{{doorMobileValue.totalPrice}} руб.</div>
                        <div class="end-price__discount">{{doorMobileValue.totalPriceDiscount}} руб.</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="form.show" class="form__wrapper">
            <BasketFrom  @closeModalForm="toggleModalForm" :price="doorMobileValue" :userDoors="doors"/>
        </div>
    </div>
</template>

<script>
    import BasketMixin from '@/components/Mixins/BasketMixn';
    import BasketFrom from '@/components/Form/BasketForm.vue';
    export default {
        mixins: [BasketMixin],
        components: {
            BasketFrom
        }
    }
</script>

<style scoped>
    ul,
    li {
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        background: none;
    }

    .basket {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0px 0px 2.5rem 0px;
    }

    .basket__title {
        margin: 2.5rem 0px;
    }

    .basket__list {
        border: solid 1px #ccc;
        padding: 1.5rem 2.5rem;
        width: 100%;
    }

    .basket__list li {
        display: flex;
        align-items: center;
    }

    .basket__list>li {
        margin: 0px 0px 1rem 0px;

    }

    .basket__list-door {
        flex: 1 1 auto;
        display: flex;
        align-items: flex-start;
        gap: 25px;
    }

    .basket__list-door img {
        height: 155px;
        width: 65px;
    }

    .list-door {}

    .list-door li:first-child {
        font-size: 18px;
    }

    .list-door li {
        font-size: 14px;
        display: flex;
        gap: 5px;
    }

    .list-door li em {
        color: #8f332f;
    }

    .basket__list-actions {
        display: flex;
        gap: 5px;
    }

    .basket__list-actions button {
        transition: 0.3s ease;
        border: solid 1px #ccc;
        padding: 0px 15px;
    }

    .basket__list-actions button:hover {
        background: #ccc;
    }

    .basket__list-actions input {
        width: 35%;
    }

    .basket__list-prices {
        display: flex;
        flex-direction: column;
    }

    .basket__list-close {
        align-self: flex-start;
    }

    .basket__list-close button {
        font-size: 20px;
        border: solid 1px #ccc;
    }

    .list-prices__all {
        text-decoration: line-through;
    }

    .list-prices__discount {
        font-size: 20px;
        font-weight: bold;
    }

    .list-prices__quantity {
        font-size: 14px;
        font-style: italic;
    }

    .basket__end {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: solid 1px #ccc;
        border-left: solid 1px #ccc;
        border-right: solid 1px #ccc;
        padding: 1rem 0px;
    }


    .basket__end-btn {}

    .basket__end-btn button {
        padding: 0.7rem 1.7rem;
        background: #8f332f;
        color: #fff;
    }

    .basket__end-price {
        display: flex;
        align-items: flex-end;
        gap: 10px;
    }

    .end-price__price {}

    .end-price__all {
        text-decoration: line-through;
        font-size: 18px;
    }

    .end-price__discount {
        font-size: 22px;
        font-weight: bold;
    }
    .form__wrapper {
        background: #00000085;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>