<template>
    <ServiceLayout>
        <template v-slot:content>
            <router-view></router-view>
        </template>
    </ServiceLayout>
</template>

<script>
import ServiceLayout from "@/layouts/ServiceLayout.vue"
export default {
    components: {
        ServiceLayout
    }
}
</script>

<style  scoped>

</style>