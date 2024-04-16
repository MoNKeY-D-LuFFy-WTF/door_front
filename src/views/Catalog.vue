<template>
    <div class="wrapper">
        <Tags :tags="tags" />
        <CatalogLayout :products="products">
            <template v-slot:title>
                {{ tags.parent.name }}
            </template>
            <router-link to="/">Главная</router-link>->
        </CatalogLayout>
        <router-view></router-view>
    </div>
</template>

<script>
import CatalogMixin from '@/components/Mixins/CatalogMixin';
import CatalogLayout from "@/layouts/CatalogLayout.vue";
export default {
    mixins: [CatalogMixin],
    components: {
        CatalogLayout
    }
}
</script>

<style scoped>
.wrapper {
    background: #f6f5f4;
    padding: 1.5rem 0px 0px 0px;
}
</style>