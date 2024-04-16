<template>
    <div>
        <CertificatesCertificates />
        <CertificatesDiplomaVue />
    </div>
</template>

<script>
import CertificatesCertificates from './CertificatesCertificates.vue';
import CertificatesDiplomaVue from './CertificatesDiploma.vue';
export default {
    components: {
        CertificatesCertificates,
        CertificatesDiplomaVue,
    }
}
</script>

<style lang="scss" scoped></style>