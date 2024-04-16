<template>
    <form @submit="cahngeForm" class="w-100 d-flex flex-column gap-4" action="http://127.0.0.1:8000/api/instalments"
        method="post">
        <main-input :name="`name`" :type='`text`' :place="`Имя`" />
        <main-input :name="`phone`" :type='`number`' :place="`Телефон`" />
        <main-text :name="`text`" :type='`text`' :place="`Коментарий`"></main-text>
        <main-checkbox />
        <opacity-btn :type="`submit`">Отправить</opacity-btn>
        <responsibility />
    </form>
</template>

<script>
export default {
    methods: {
        cahngeForm(e) {
            const name = e.target[0].value;
            const phone = e.target[1].value;
            const box = e.target[3].checked;
            if (phone.trim() === '' || name.trim() === '' || !box) {
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