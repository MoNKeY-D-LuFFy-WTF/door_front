<template>
    <div class="mini-navbar">
        <div class="mini-navbar__title">
            <h3>{{ data.title }}</h3>
        </div>
        <nav class="mini-navbar__nav">
            <ul class="mini-navbar__list">
                <li v-for="list in data.list">
                    <router-link :to="list.link">{{ list.text }}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "mini-nav",
    props: {
        data: {
            type: Object,
            require: true,
        },
    }

}
</script>

<style scoped>
.mini-navbar {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.mini-navbar__title h3 {
    color: #313434;
    font-weight: 700;
    font-size: calc(20px + 8 * (100vw / 1336));
}


.mini-navbar__list {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.mini-navbar__list li a {
    display: inline-block;
    font-size: calc(10px + 3 * (100vw / 1336));
    text-decoration: none;
    color: #676767;
    background: #f4f4f4;
    padding: 10px 7px;
}

.mini-navbar__list li a.router-link-active.router-link-exact-active {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 59% 75%, 50% 91%, 40% 75%, 0% 75%);
    background: #8f332f;
    color: #fff;
    padding: 10px 7px 25px 7px;
}


@media (max-width: 775px) {
    .mini-navbar__title h3 {
        text-align: center;
    }

    .mini-navbar__list li a.router-link-active {
        clip-path: none;
        padding: 10px 7px;
    }
}
</style>