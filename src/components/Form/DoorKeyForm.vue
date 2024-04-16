<template>
    <form @submit="cahngeForm" class="w-100 d-flex flex-column gap-4" :action="`${BACKEND_URL}/door_keys`" method="post">
        <main-input :name="`name`" :type='`text`' :place="`Имя`" />
        <main-input :name="`phone`" :type='`number`' :place="`Телефон`" />
        <main-input :name="`email`" :type='`email`' :place="`E-mail`" />
        <main-text :name="`text`" :type='`text`' :place="`Коментарий`"></main-text>
        <main-checkbox />
        <opacity-btn :type="`submit`">Отправить</opacity-btn>
        <responsibility />
    </form>
</template>

<script>
import BACKEND_URL from '@/BACKEND__URL';
export default {
    data() {
        return {
            BACKEND_URL
        }
    },
    methods: {
        cahngeForm(e) {
            const name = e.target[0].value;
            const phone = e.target[1].value;
            const email = e.target[2].value;
            const box = e.target[4].checked;
            if (phone.trim() === '' || name.trim() === '' || !box || email.trim() === '') {
                e.preventDefault();
            }
        }
    },
}
</script>

<style scoped>
button {
    padding: calc(12px + 3 * (100vw / 1336)) 0px;
}
</style>