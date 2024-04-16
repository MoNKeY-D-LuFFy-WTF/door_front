<template>
    <div class="service__instalation">
        <InstallationAttention />
        <InstallationList />
        <InstallationVideo />
        <div class="instalation__from">
            <h3>Заказ монтажа</h3>
            <InstallationFormVue />
        </div>
    </div>
</template>

<script>
import InstallationAttention from './InstallationAttention.vue';
import InstallationList from './InstallationList.vue';
import InstallationVideo from "./InstallationVideo.vue"
import InstallationFormVue from '../Form/OrderInstallationForm.vue';
export default {
    components: {
        InstallationAttention,
        InstallationList,
        InstallationVideo,
        InstallationFormVue
    }
}
</script>

<style  scoped>
.service__instalation {
    display: flex;
    flex-direction: column;
    margin: 0px 0px 3.5rem 0px;
}

.instalation__from {
    width: 60%;
    margin: 0 auto;
}

h3 {
    text-align: center;
    padding: 0px 0px 3rem 0px;
    margin: 0px 0px 1rem 0px;
    border-bottom: solid 1px #ccc;
    line-height: calc(32px + 8 * (100vw / 1336));
    font-weight: 400;
    font-size: calc(25px + 7 * (100vw / 1336));
}

@media (max-width: 767px) {
    .instalation__from {
        width: 100%;
    }
}
</style>