<template>
    <div >
        <div class="product" v-if="product.name === undefined">
            <div @click="showSingle(`${BACKEND_URL}/images_catalog/${product.id}?title=${product.title}`)"
                class="product_img">
                <img :src="`${BACKEND_URL}/images_catalog/${product.id}?title=${product.title}`" alt="">
            </div>
            <div class="product__title">
                {{ product.title }}
            </div>
            <div class="product__price">
                {{ product.price }} р.
            </div>
            <div class="product__btn">
                <button class="w-100 ">Добавить в корзину <span>-></span></button>
            </div>
        </div>
        <div class="product__door" v-else>
            <div v-if="product.discount" class="product__door-discount">
                Скидка {{ product.discount }}%
            </div>
            <div class="product__door-name">
                <router-link
                    :to="`/${$route.params.catalog_url}/${$route.params.child_url}${product.url}_${product.id}`">
                    <span> {{ product.name }}</span> <br>
                    <span class="color_name"> {{ product.door_color.name }}</span>
                </router-link>
            </div>
            <div class="product__door-img">
                <img :src="`${BACKEND_URL}/images_catalog/${product.door_color.catalog_img_id}?title=${product.door_color.name}`"
                    alt="">
            </div>
            <div class="product__door-price">
                <span v-if="product.price_discount"> {{ product.price }} руб.</span>
                <span v-if="product.price_discount"> {{ product.price_discount }} руб.</span>
                <span v-else>{{ product.price }} руб.</span>
            </div>
            <div class="product__door-status">
                <img :src="`${BACKEND_URL}/images_catalog/${product.door_statuse.catalog_img_id}?title=${product.door_statuse.name}`"
                    alt="">
                <span>{{ product.door_statuse.name }}</span>
            </div>
            <div class="product__door-btn">
                <router-link
                    :to="`/${$route.params.catalog_url}/${$route.params.child_url}${product.url}_${product.id}`"
                    class="w-100">Подробнее<span>-></span></router-link>
            </div>
        </div>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </div>

</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue';
import BACKEND_URL from '@/BACKEND__URL';
export default {
    setup() {
        const visibleRef = ref(false)
        const indexRef = ref(0)
        const imgsRef = ref([])
        const onShow = () => {
            visibleRef.value = true
        }
        const showSingle = (img) => {
            imgsRef.value = img;
            onShow()
        }
        const onHide = () => (visibleRef.value = false)
        return {
            visibleRef,
            indexRef,
            imgsRef,
            showSingle,
            onHide
        }
    },
    props: {
        product: {
            type: [Object, Array],
            require: true,
        }
    },
    data() {
        return {
            BACKEND_URL
        }
    },

}
</script>

<style scoped>
button {
    background: none;
    border: none;
    font-weight: bold;
}

.product {
    display: flex;
    flex-direction: column;
    width: 260px;
    padding: 25px 0px 0px 0px;
    height: 450px;
    background: #fff;
    transition: .3s ease all;
    gap: 25px;
    border-radius: 2px;
}

.product__btn button span {
    display: inline-block;
    color: #fff;
    transition: .3s ease all;
}

.product_img {
    display: flex;
    height: 140px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.product_img img {
    object-fit: cover;
    transition: .3s ease all;
}

.product__title {
    padding: 0px 30px;
    font-weight: bold;
}

.product__price {
    flex: 1 1 25%;
    align-self: center;
    display: flex;
    align-items: flex-end;
    font-size: 19.5px;
    font-weight: bold;
}

.product__btn {
    flex: 1 1 25%;
    display: flex;
    align-items: flex-end;
}

.product__btn button {
    transition: .3s ease all;
    padding: 23px 30px;
    border-top: 1px solid #ccc;
}

.product:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
}

.product:hover .product_img {
    background: url("../../assets/icons/1_icon.png") center no-repeat;
}

.product:hover .product_img img {
    opacity: .3;
}

.product:hover .product__btn button {
    background: #8f332f;
    border: none;
    color: #fff;
}

.product:hover .product__btn button span {
    transform: translateX(15px);
}

.product__status {
    text-align: center;
}

.product__door {
    transition: all ease 0.3s;
    height: 543px;
    width: 255px;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
    background: #fff;
    gap: 20px;

}

.product__door:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
}

.product__door-discount {
    padding: 5px 10px 5px 10px;
    background: #8f332f;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
}

.product__door-name {
    padding: 40px 10px 0px 10px;

}

.product__door-name a {
    display: block;
    text-decoration: none;
    transition: all 0.3s ease;

}

.product__door-name a:hover span {
    color: #8f332f !important;
}

.product__door-name a span:nth-child(1) {
    color: #333;
    font-weight: bold;
}

.product__door-name a span.color_name {
    font-size: 15px;
    color: #555;
}

.product__door-img {
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}

.product__door-img img {
    width: 33%;
    object-fit: cover;
}

.product__door-price {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.product__door-price span:nth-child(1) {
    font-size: 14px;
    text-decoration: line-through;
}

.product__door-price span:last-child {
    font-weight: bold;
    font-size: 16px;

    text-decoration: none;

}

.product__door-status {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    align-self: center;
}

.product__door-status span {
    text-transform: uppercase;
    font-size: 14px;
    color: #8f332f;
}

.product__door-btn a {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding: 10px 0px 12px 0px;
    line-height: 53px;
    transition: all ease 0.3s;
    color: #000;
    font-weight: bold;
}

.product__door-btn a span {
    color: #fff;
    transition: all ease 0.3s;
}

.product__door-btn a:hover {
    background: #8f332f;
    color: #fff;
}

.product__door-btn a:hover span {
    display: inline-block;
    transform: translateX(15px);

}
</style>