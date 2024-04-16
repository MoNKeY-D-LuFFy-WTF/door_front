<template>
    <div class="service__pay">
        <PayOptions />
        <PayPrepayment />
        <PayOrder />
        <PaySafety />
        <PayDescription />
        <PayReturn />
        <PayAgreement/>
    </div>
</template>

<script>
import PayOptions from '@/components/Service/PayOptions.vue';
import PayPrepayment from '@/components/Service/PayPrepayment.vue';
import PayOrder from '@/components/Service/PayOrder.vue';
import PaySafety from '@/components/Service/PaySafety.vue';
import PayDescription from '@/components/Service/PayDescription.vue';
import PayReturn from '@/components/Service/PayReturn.vue';
import PayAgreement from '@/components/Service/PayAgreement.vue';

export default {
    components: {
        PayOptions,
        PayPrepayment,
        PayOrder,
        PaySafety,
        PayDescription,
        PayReturn,
        PayAgreement
    }
}
</script>

<style scoped>
.service__pay {
    margin: 15px 0px 0px 0px;
}
</style>