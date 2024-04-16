<template>
    <button><span></span></button>
</template>

<script>
export default {
    name: 'video-btn'
}
</script>

<style scoped>
button {
    width: calc(80px + 20 * (100vw / 1336));
    height: calc(80px + 20 * (100vw / 1336));
    background: #8f332f;
    border-radius: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .2s normal;

}

button span {
    display: inline-block;
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
    width: 30%;
    height: 30%;
    background: #fff;
}

button:hover {
    transition: all .2s normal;
    transform: scale(1.2);
}
</style>