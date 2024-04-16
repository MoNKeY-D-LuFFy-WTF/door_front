<template>
    <div class="icons">
        <a href="https://vk.com/portaprimadop1"><i class="fa-brands fa-vk fa-fw"></i></a>
        <a href="https://t.me/portaprima"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://zen.yandex.ru/portaprimaru"><i class="fa-solid fa-square-plus"></i></a>
        <a href="https://tiktok.com/@portaprima"><i class="fa-brands fa-tiktok"></i></a>
        <a href="https://www.youtube.com/@portaprima_ru"><i class="fa-brands fa-youtube"></i></a>
    </div>
</template>

<script>
    export default {
        name: 'mesengers'
    }
</script>

<style scoped>
    .icons {
        display: flex;
        gap: 30px;
    }

    .icons a i {
        color: #888888;
        transition: color .2s normal;
    }

    .icons a i:hover {
        color: #7b2b27;
        transition: color .2s normal;

    }
</style>