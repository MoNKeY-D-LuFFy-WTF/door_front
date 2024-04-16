<template>
    <form @submit="cahngeForm" class="call-form" action="http://127.0.0.1:8000/api/join_us" method="post">
        <main-input :type="`text`" :name="`name`" :place="`Имя`" />
        <main-input :type="`number`" :name="`phone`" :place="`Телефон`" />
        <main-checkbox />
        <opacity-btn :type="`submit`">Отправить</opacity-btn>
        <responsibility />
    </form>
</template>

<script>

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