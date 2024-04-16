<template>
    <div class="service__delivery">
        <DeliveryDelivery />
        <DeliveryList/>
    </div>
</template>

<script>
import DeliveryDelivery from '@/components/Service/DeliveryDelivery.vue';
import DeliveryList from '@/components/Service/DeliveryList.vue';

export default {
    components: {
        DeliveryDelivery,
        DeliveryList
    }
}
</script>

<style lang="scss" scoped></style>