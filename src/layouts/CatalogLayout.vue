<template>
    <div class="catalog">
        <div class="container-lg">
            <div class="catalog__title">
                <h3>
                    <slot name="title"></slot>
                </h3>
            </div>
            <div class="catalog__content">
                <div class="catalog__saidbar">
                    <Saidbar />
                </div>
                <div class="catalog__products">
                    <Product v-if="products.length" v-for="product in products" :product="product" />
                    <div v-else>
                        <h4>В скором времени будут товары <img class="img-fluid mt-3" src="../assets/add/add.gif"
                                alt="">
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Saidbar from "@/components/Catalog/Saidbar.vue"
import Product from "@/components/Catalog/Products.vue"
export default {
    components: {
        Product,
        Saidbar,
    },
    props: {
        products: {
            type: [Array, Object],
            require: true,
        }
    }
}
</script>

<style scoped>
h3 {
    font-weight: 700;
    color: #313434;
}

.catalog {
    padding: 1rem 0px 3rem 0px;
    height: 100%;
}

.catalog__content {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.catalog__title {
    margin: 0px 0px 2rem 0px;
}

.catalog__saidbar {
    background: #fff;
    flex: 1 1 30%;
    padding: 20px 0px;
}

.catalog__products {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 30px;
    grid-template: 1fr / repeat(3, 1fr);
    flex: 1 1 70%;
}
</style>