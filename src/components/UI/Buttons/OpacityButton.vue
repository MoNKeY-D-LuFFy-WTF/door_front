<template>
    <button :type="type">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'opacity-btn',
    props: {
        type: {
            type: String,
            require: false,
        }
    }
}
</script>

<style scoped>
button {
    text-decoration: none;
    display: inline-block;
    background: #8f332f;
    border: none;
    color: #fff;
    border-radius: 5px;
    transition: .2s normal;
    font-weight: bold;
}

button:hover {
    background: #b66b67;
    transition: .2s normal;
}
</style>