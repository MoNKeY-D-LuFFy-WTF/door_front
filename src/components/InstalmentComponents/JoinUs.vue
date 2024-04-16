<template>
    <div style="background: #f8f8f8;">
        <div class="instalment__container">
            <div class="joinus__content my-5 py-5">
                <div class="joinus__content-text">
                    <div class="joinus__content-title">
                        <h2>Остались вопросы? Свяжитесь с нами.</h2>
                    </div>
                    <div class="joinus__content-subtitle">
                        <h6>Укажите ваши контактные данные и мы вам перезвоним</h6>
                    </div>
                    <div class="joinus__content-contact">
                        <div class="phone">
                            <span>Телефон</span>
                            <phone />
                        </div>
                        <div class="email">
                            <span>E-mail</span>
                            <email />
                        </div>
                    </div>
                    <div class="joinus__content-mesenger">
                        <mesengers />
                    </div>
                </div>
                <div class="joinus__content-form shadow">
                    <h4>Заказать звонок</h4>
                    <CallForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CallForm from '@/components/Form/CallForm.vue';
export default {
    components: {
        CallForm
    }
}
</script>

<style scoped>
.joinus__content {
    display: flex;
}

.joinus__content-text {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    gap: 7%;
}

.joinus__content-title h2 {
    font-size: calc(36px + 12 * (100vw / 1336));
    font-weight: 400;
}

.joinus__content-subtitle h6 {
    font-size: calc(14px + 5 * (100vw / 1336));
    font-weight: 400;
    color: #666;
}

.joinus__content-contact {
    display: flex;
    gap: 17%;
}

.phone,
.email {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.phone span,
.email span {
    font-size: calc(9px + 5 * (100vw / 1336));
    color: #666;

}

.email a,
.phone a {
    color: #333333;
}

.email a:hover,
.phone a:hover {
    color: #7b2b27;
}

.joinus__content-mesenger {
    margin: 20px 0px 0px 0px;
}

.joinus__content-form {
    flex: 1 1 50%;
    padding: 2% 4%;
}

.joinus__content-form h4 {
    text-align: center;
    font-weight: 400;
}

@media (max-width: 992px) {
    .joinus__content {
        flex-direction: column;
        gap: 20px;
    }
}
</style>