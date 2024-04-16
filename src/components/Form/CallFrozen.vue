<template>
    <form @submit="cahngeForm" class="call-form" :action="`${BACKEND_URL}/frozens`" method="post">
        <main-input :type="`text`" :name="`name`" :place="`Имя`" />
        <main-input :type="`number`" :name="`phone`" :place="`Телефон`" />
        <main-checkbox />
        <opacity-btn :type="`submit`">Отправить</opacity-btn>
        <responsibility />
    </form>
</template>

<script>
import BACKEND_URL from '@/BACKEND__URL';
export default {
    methods: {
        cahngeForm(e) {
            const name = e.srcElement[0].value.trim();
            const number = e.srcElement[1].value.trim();
            const box = e.srcElement[2].checked;
            if (name == '' || number == "" || !box) {
                e.preventDefault();
            }
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
.call-form {
    display: flex;
    flex-direction: column;
    gap: calc(20px + 21 * (100vw / 1336));
}

.call-form button {
    padding: 2.5% 0px;
}
</style>