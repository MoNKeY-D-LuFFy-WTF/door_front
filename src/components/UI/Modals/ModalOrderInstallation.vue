<template>
    <div class="modal__installation">
        <div class="modal__installation-form">
            <button @click="closeModal" class="x">X</button>
            <h3>Заказ монтажа</h3>
            <OrderInstallationForm />
        </div>
    </div>
</template>

<script>
import OrderInstallationForm from '@/components/Form/OrderInstallationForm.vue';
export default {
    name: 'm-order-installation',
    components: {
        OrderInstallationForm
    },
    methods: {
        closeModal(e) {
            const modal = document.querySelector('.modal__installation');
            const x = document.querySelector('.x');
            if (e.target !== modal) {
                e.preventDefault();
            } else {
                return this.$emit('closeModal', false);
            }
            if (e.target === x) {
                return this.$emit('closeModal', false);
            }
        }
    },
}
</script>

<style scoped>
.modal__installation {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background: #0000008f;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}


.modal__installation-form {
    width: 510px;
    padding: 15px 31px 5px 31px;
    height: 100%;
    background: #fff;
    overflow: auto;
    position: relative;
    top: 0;
    left: 0;
    z-index: 101;
}

.x {
    transition: .2s normal;
    border: none;
    padding: 5px 12px;
    position: absolute;
    top: 2%;
    border-radius: 50%;
    background: #8f332f;
    color: #fff;
    opacity: 0.7;
    left: 88%;
}

.x:hover {
    opacity: 1;
}

.modal__installation-form h3 {
    text-align: center;
    padding: 0px 0px 3rem 0px;
    margin: 0px 0px 1rem 0px;
    border-bottom: solid 1px #ccc;
    line-height: calc(32px + 8 * (100vw / 1336));
    font-weight: 400;
    font-size: calc(25px + 7 * (100vw / 1336));
}
</style>