<template>
    <AboutLayout>
        <template v-slot:content>
            <router-view></router-view>
        </template>
    </AboutLayout>
</template>

<script>
import AboutLayout from '@/layouts/AboutLayout.vue';
export default {
    components: {
        AboutLayout
    }
}
</script>

<style >
/* h6 {
    font-size: 16px;
    font-weight: bold;
    color: #323232;
    line-height: 24px;
}

p {
    font-size: 16px;
    color: #333;
}

li {
    font-size: calc(12px + 2 * (100vw / 1336));
    color: #333;
    line-height: calc(19px + 6 * (100vw / 1336));
} */
</style>