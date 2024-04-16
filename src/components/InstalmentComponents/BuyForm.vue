<template>
    <div class="my-5">
        <div class="buy__form shadow">
            <h2 class="text-center">Купить дверь в рассрочку</h2>
            <p class="text-center">Оставьте свой телефон, чтобы забронировать скидку и рассчитать рассрочку. Мы с вами
                свяжемся
                для уточнения
                деталей заказа.</p>
            <BuyForm />
        </div>
    </div>
</template>

<script>
import BuyForm from '@/components/Form/BuyInstalment.vue';
export default {
    components: {
        BuyForm
    }
}
</script>

<style  scoped>
.buy__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    padding: 25px;
    margin: 0 auto;
}

@media (max-width: 992px) {
    .buy__form {
        width: 70%;
    }
}

@media (max-width: 767px) {
    .buy__form {
        width: 100%;
        padding: 0px 15px;
    }
}
</style>