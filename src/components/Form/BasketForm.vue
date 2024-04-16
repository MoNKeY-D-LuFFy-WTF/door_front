<template>
    <form @submit.prevent="setDataUser" class="basket-form">
        <button @click.prevent="closeModalForm" class="btn btn-danger">x</button>
        <div class="mb-3">
            <label for="">Ваше имя</label>
            <input v-model.trim="form.name" placeholder="Введите ваше имя" class="form-control" type="text">
        </div>
        <div class="mb-3">
            <label for="">Номер телефона *</label>
            <input v-model.number="form.phone" placeholder="99293333333" class="form-control" type="number">
        </div>
        <div class="mb-3">
            <label for="">Адрес электронной почты *</label>
            <input v-model="form.email" placeholder="e-mail" class="form-control" type="email">
        </div>
        <div class="form-check">
            <label class="form-check-label" for="chex">
                <input v-model="form.chekbox" class="form-check-input" type="checkbox" value="" id="chex" />
                Я даю согласие на обработку персональных данных и соглашаюсь/ознакомлен с условиями договора
                присоединения
            </label>
        </div>
        <ul v-if="form.errors.length" class="alert alert-danger my-5">
            <li v-for="error in form.errors">{{ error }}</li>
        </ul>
        <button class="btn btn-primary">Оформить заказ</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        userDoors: {
            type: [Array, Object],
            require: true,
        },
        price: {
            type: Object,
            require: true,
        }
    },
    data() {
        return {
            form: {
                errors: [],
                phone: null,
                name: null,
                chekbox: null,
                email: null,
                totalPrice: 0,
                totalPriceDiscount: 0,
            },
            response: null,
        }
    },
    methods: {
        //Отправляем данный с формы
        async setDataUser(e) {
            this.form.errors = [];
            if (!this.form.name) {
                this.form.errors.push('Требуется указать имя.');
            }
            if (!this.form.phone) {
                this.form.errors.push('Требуется указать номер телефона.');
            }
            if (!this.form.chekbox) {
                this.form.errors.push('Требуется разрешение.');
            }
            if (!this.form.email) {
                this.form.errors.push('Требуется указать email.');
            }
            if (this.form.errors.length <= 0) {
                this.form.totalPrice = this.price.totalPrice
                this.form.totalPriceDiscount = this.price.totalPriceDiscount;
                await axios.post(`http://127.0.0.1:8000/api/user_clients`,
                    {
                        FormData: this.form,
                        productsData: this.userDoors,
                    }

                )
                    .then(res => {
                        this.response = res.data;
                    })
                    .catch(error => {
                        this.response = `Ошибка при отпрвке (${error}) повтарите попытку позже`;
                    })
                    .finally(item => {
                        localStorage.removeItem('doors');
                        this.form.phone = null;
                        this.form.name = null;
                        this.form.email = null;
                        this.form.chekbox = null;
                        return this.$emit('closeModalForm', false, this.response);
                    })

            }
            this.$forceUpdate();
        },
        //Закрытия формы
        closeModalForm() {
            return this.$emit('closeModalForm', false);
        },
    }
}
</script>

<style scoped>
.basket-form {
    border-radius: 10px;
    background: #000;
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem 2rem;
    color: #fff;
    overflow: auto;
}

.basket-form button {
    text-transform: uppercase;
}

.basket-form button:nth-child(1) {
    align-self: flex-end;
}
</style>