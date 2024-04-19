<template>
    <div class="container-lg" v-if="door">
        <h3 class="title">
            {{ door.name }}, цвет - {{ door.door_color.name }}, {{ door.window === 1 ? "Со стеклом" : 'Без стекла' }}
        </h3>
        <div class="door">
            <div class="door__img">
                <span v-if="door.discount" class="door__img-discount"> Скидка {{ door.discount }}%</span>
                <div class="door__img-img">
                    <img :src="`${BACKEND_URL}/images_catalog/${door.door_color.catalog_img_id}?title=${door.door_color.name}`"
                        alt="">
                </div>
            </div>
            <div class="door__actions">
                <div class="door__header">
                    <div class="door__header-price">
                        <div class="header-price__title">
                            Цена за полотно
                        </div>
                        <div v-if="door.discount" class="header-price__alter">
                            {{ door.price }} р.
                        </div>
                        <div class="header-price__price">
                            <span> {{ door.price_discount || door.price }}</span> р.
                        </div>
                    </div>
                    <div class="door__header-complect">
                        <div class="header-price__title">
                            Цена за состав
                        </div>
                        <div v-if="door.discount" class="header-price__alter">
                            {{ doorMobileValue.totalPrice }} р.
                        </div>
                        <div class="header-complect__price">
                            <span>{{ doorMobileValue.totalPriceDiscount || doorMobileValue.totalPrice }} </span>р.
                        </div>
                        <div class="header-complect__input">
                            <button @click="quantityActions('remove')"><i class="fa-solid fa-arrow-left"></i></button>
                            <input @input="quantityActions('input')" v-model="doorMobileValue.quantity"
                                class=" form-control" type="text">
                            <button @click="quantityActions('add')"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <span>количество дверей</span>
                    </div>
                    <div class="door__header-basket">
                        <div class="header-basket__btn">
                            <button @click="addDoorToBasket" type="button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                В корзину
                            </button>
                        </div>
                        <div class="header-basket-status">
                            {{ door.door_statuse.name }}
                            <img :src="`${BACKEND_URL}/images_catalog/${door.door_statuse.catalog_img_id}?title=${door.door_statuse.name}`"
                                alt="">
                        </div>
                        <div v-if="doorMobileValue.isCombo" class="header-basket-combo alert alert-info">
                            Активировано специальное предложение
                        </div>
                    </div>
                </div>
                <div class="door__main">
                    <div class="door__main-materials">
                        <h6>Материал покрытия</h6>
                        <ul>
                            <li @click="changeMaterialDoor(material)"
                                :class="doorMobileValue.material.id == material.id ? 'active' : ''"
                                v-for="material in door.combo.materials">
                                {{ material.name }}
                            </li>
                            <!-- :class="doorMobileValue.material.id == material.id ? 'active' : ''" -->
                        </ul>
                    </div>
                    <div class="door__main-colors">
                        <h6>Цвет</h6>
                        <ul class="main-colors__colors">
                            <li @click="changeDoorColor(color)" v-for="color in doorMobileValue.colors">
                                <img :class="color.id == door.door_color.id ? 'active' : ''"
                                    :src="`${BACKEND_URL}/door_colors/${color.image}/image`" alt="">
                                {{ color.name }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="door__footer">
                    <div class="door__footer-window">
                        <h6>Остекление</h6>
                        <select @change="changeSelects('window', $event)" class="form-select" v-if="door.window === 1"
                            name="" id="">
                            <option value="yes">Со сетклом</option>
                            <option value="no">Без</option>
                        </select>
                        <select disabled class="form-select" v-else name="" id="">
                            <option value="">Нет</option>
                        </select>
                    </div>
                    <div class="door__footer-soung">
                        <h6>Звукоизоляця</h6>
                        <select @change="changeSelects('soung', $event)" class="form-select" v-if="door.soung === 1"
                            name="" id="">
                            <option value="yes">Звукоизоляця</option>
                            <option value="no">Без</option>
                        </select>
                        <select disabled class="form-select" v-else name="" id="">
                            <option value="">Нет</option>
                        </select>
                    </div>
                    <div class="door__footer-open">
                        <h6>Система открывания</h6>
                        <select @change="changeSelects('open', $event)" class="form-select" name="" id="">
                            <option v-for="open in door.door_open_system"
                                :selected="open.open_system.id === door.combo.open.id" :value="open.open_system.id">
                                {{ open.open_system.name }}
                            </option>
                        </select>
                    </div>
                    <div class="door__footer-thick">
                        <h6>Толщина стены</h6>
                        <select @change="changeSelects('thick', $event)" class="form-select" name="" id="">
                            <option v-for="thick in door.door_thick" :selected="thick.thick.id === door.combo.thick.id"
                                :value="thick.thick.id">
                                {{
                                    thick.thick.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-light">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Корзина</h1>
                        <button type="button" class="btn btn-danger px-3" data-bs-dismiss="modal"
                            aria-label="Close">x</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Остатся</button>
                        <a href="/basket" class="btn btn-primary">Перейти в корзину</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BACKEND_URL from '@/BACKEND__URL';
import DoorMixins from '@/components/Mixins/DoorMixins';
export default {
    mixins: [DoorMixins],
}
</script>

<style scoped>
button {
    border: solid 1px #ccc;
    padding: 10px;
    background: none;
}

.title {
    margin: 3rem 0px 2rem 0px;
}

.door {
    display: flex;
    align-items: flex-start;
    margin: 0px 0px 3rem 0px;
    gap: 20px;
}

.door__img {
    display: flex;
    flex-direction: column;
    border: solid 1px #ccc;
    flex: 1 1 30%;
}

.door__img-img {
    padding: 1.5rem 3rem 2rem 3rem;
    height: 650px;
}

.door__img-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.door__img-discount {
    background: #8f332f;
    color: #fff;
    text-transform: uppercase;
    width: 75%;
    padding: 0.3rem 0.8rem;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
}

.door__actions {
    border: solid 1px #ccc;
    flex: 1 1 70%;
    padding: 30px 25px;
}

.door__header {
    display: flex;
    gap: 25px;
    border-bottom: solid 1px #ccc;
    padding: 0px 0px 50px 0px;
    margin: 0px 0px 1.5rem 0px;
}

.door__header-price {
    border-right: solid 1px #ccc;
    padding: 0px 20px 0px 0px;
    flex: 1 1 33.333%;
}

.header-price__title {
    font-size: 15px;
    color: #333;
    margin: 0px 0px 0.5rem 0px;
}

.header-price__alter {
    font-size: 16px;
    color: #333;
    text-decoration: line-through;
}

.header-price__price {
    line-height: 1.5rem;
    font-weight: 700;

}

.header-price__price span {
    color: #8d9465;
    font-size: 30px;
    letter-spacing: 0.2rem;
}

.header-complect__price {
    font-weight: bold;
}

.header-complect__price span {
    font-size: 20px;
    letter-spacing: 0.2rem;
}

.header-complect__input {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0px 0px 0px;
}

.header-complect__input button {
    transition: 0.3s ease;
}

.header-complect__input button:hover {
    background: #Ccc;
}

.header-complect__input input {
    width: 30%;
}

.door__header-complect {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1 1 33.333%;

}

.door__header-complect>span {
    justify-content: center;
    margin: 10px 0px 0px 0px;
    font-style: italic;
    font-size: 13px;
}

.door__header-basket {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1 1 33.333%;

}

.header-basket-status {
    text-transform: uppercase;
    font-size: 14px;
    color: #8f332f;
    align-self: center;
    display: flex;
    align-items: center;
    gap: 5px;
}

.header-basket-combo {
    animation: myAnim 1s ease 0s infinite normal forwards;
    text-align: center;
}

.header-basket__btn {}

.header-basket__btn button {
    width: 100%;
    transition: 0.3s ease;
}

.header-basket__btn button:hover {
    background: #8f332f;
    color: #fff;
}

.door__main {
    display: flex;
    margin: 30px 0px 0px 0px;
    gap: 50px;
    margin: 0px 0px 1.5rem 0px;
}

.door__main-materials {
    flex: 1 1 35%;
}

.door__main-materials h6 {
    margin: 0px 0px 20px 0px;
}

.door__main-materials ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.door__main-materials ul>li {
    font-size: 14px;
    border: solid 1px #c0c0c0;
    cursor: pointer;
    padding: 15px 35px;
}

.door__main-materials ul>li.active {
    border-color: #8f332f;
}

.door__main-colors {
    flex: 1 1 65%;
}

.door__main-colors h6 {
    margin: 0px 0px 20px 0px;
}

.main-colors__colors {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    gap: 25px 15px;
    margin: 0;
    padding: 0;
}

.main-colors__colors li {
    display: flex;
    cursor: pointer;
    gap: 10px;
}

.main-colors__colors li {
    font-size: 12px;
}

.main-colors__colors li img {
    width: 30px;
    height: 30px;
}

.main-colors__colors li img.active {
    border: solid 1px #8f332f;
}

.door__footer {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    gap: 25px 10px;
}

.door__footer-window {}

.door__footer-soung {}

.door__footer-open {}

.door__footer-thick {}

@media (max-width: 992px) {
    .door {
        flex-wrap: wrap;
    }

    .door__img-img {
        align-self: center;
        width: calc(250px + 100 * (100vw / 992));
    }

    .door__header,
    .door__main,
    .door__footer {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
    }

    .door__header-price {
        border: none;
    }

}

@keyframes myAnim {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.2;
    }

    100% {
        opacity: 1;
    }
}
</style>