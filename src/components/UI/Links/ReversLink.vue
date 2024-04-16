<template>
    <router-link :to="link">
        <slot />
    </router-link>
</template>

<script>
export default {
    name: 'revers-link',
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
    background: #fff;
    color: #8f332f;
    padding: calc(8px + 4 * (100vw / 1336)) calc(18px + 5 * (100vw / 1336)) calc(10px + 4 * (100vw / 1336));
    border-radius: 5px;
    transition: .2s normal;
    font-weight: bold;
    border: solid 1px #8f332f;
}

a:hover {
    background: #7b2b27;
    color: #fff;
    transition: .2s normal;
}
</style>