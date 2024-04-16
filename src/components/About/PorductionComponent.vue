<template>
    <div class="about__production">
        <ProductionManufacturing />
        <ProductionKostromskoe />
        <ProductionFryazinskoe />
    </div>
</template>

<script>
import ProductionManufacturing from "@/components/About/ProductionManufacturing.vue"
import ProductionKostromskoe from "@/components/About/ProductionKostromskoe.vue"
import ProductionFryazinskoe from "@/components/About/ProductionFryazinskoe.vue"

export default {
    components: {
        ProductionManufacturing,
        ProductionKostromskoe,
        ProductionFryazinskoe
    }
}
</script>

<style lang="scss" scoped></style>