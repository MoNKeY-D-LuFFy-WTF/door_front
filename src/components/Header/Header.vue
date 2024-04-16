<script>
import HeaderTitle from "@/components/Header/HeaderTitle.vue";
import Navbar from '@/components/Header/Navbar.vue';
export default {
    components: {
        HeaderTitle,
        Navbar
    },
    data() {
        return {
            show: {
                scroll: true,
                menu: true,
            },
            resize: 0,
        }
    },
    methods: {
        scrollToDown() {
            if (window.scrollY > 0) {
                this.show.scroll = false;
            } else {
                this.show.scroll = true;
                this.show.menu = true;
            }
        },
        showMenuBurger(params) {
            this.show.menu = params;
        },
        getResize() {
            this.resize = window.innerWidth;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToDown);
        this.getResize();
        window.addEventListener('resize', this.getResize);
    },
}
</script>
<template>
    <div class="shadow">
        <HeaderTitle @toggleMenuBurger="showMenuBurger" :resize="resize" :scroll="show.scroll" />
        <Navbar :menuScrollHide="show.menuScroll" :resize="resize" :menu="show.menu" :scroll="show.scroll" />
    </div>
</template>
<style scoped>
div.shadow {
    background: #Fff;
}
</style>