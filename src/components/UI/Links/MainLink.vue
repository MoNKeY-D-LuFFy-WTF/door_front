<template>
    <router-link :to="link">
        <slot />
    </router-link>
</template>

<script>
    export default {
        name: 'main-link',
        props: {
            link: {
                type: String,
                require: true,
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        display: inline-block;
        background: #8f332f;
        border: none;
        color: #fff;
        padding: calc(8px + 4 * (100vw / 1336)) calc(18px + 5 * (100vw / 1336)) calc(10px + 4 * (100vw / 1336));
        border-radius: 5px;
        transition: .2s normal;
        font-weight: bold;

    }

    a:hover {
        background: #7b2b27;
        transition: .2s normal;
    }
</style>