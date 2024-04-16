<script>
import MainFooterTitle from "@/components/Footer/MainFooterTitle.vue";
import MainFooterCopy from "@/components/Footer/MainFooterCopy.vue";
import FooterTitle from "@/components/Footer/FooterTitle.vue";
import FooterCopy from "@/components/Footer/FooterCopy.vue";
export default {
    components: {
        FooterTitle,
        FooterCopy,
        MainFooterTitle,
        MainFooterCopy
    },
}
</script>

<template>
    <div v-if="$route.path === '/'" class="footer__main">
        <div class="footer__container">
            <MainFooterTitle />
            <MainFooterCopy />
        </div>
    </div>
    <div v-else>
        <FooterTitle />
        <FooterCopy />
    </div>
</template>


<style scoped>
.footer__main {
    background: #333;
    padding: 35px 0;
}

.footer {
    background: #313434;
    padding: 35px 0;
}

.footer__container {
    max-width: 1300px;
    padding: 0px 15px;
    margin: 0 auto;
}
</style>