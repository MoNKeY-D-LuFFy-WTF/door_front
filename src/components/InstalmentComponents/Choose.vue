<template>
    <div class="instalment__container">
        <div class="choose__content py-5">
            <div class="choose__title">
                <h2>Как выбрать межкомнатные двери</h2>
            </div>
            <div class="choose__subtitle">
                <p>
                    Дизайнер интерьера Елена Царёва отвечает на вопросы: как правильно выбрать межкомнатные двери, на каком
                    этапе стройки и ремонта стоит об этом задуматься, какие есть механизмы открывания и материалы покрытия
                    межкомнатных дверей.
                </p>
            </div>
            <div class="choose__video">
                <video-ui />
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.choose__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.choose__title h2 {
    font-size: calc(36px + 12 * (100vw / 1336));
    font-weight: 400;
    line-height: calc(40px + 15 * (100vw / 1336));
}

.choose__subtitle {
    width: 70%;
}

.choose__subtitle p {
    font-weight: 400;
    font-size: calc(15px + 4 * (100vw / 1336));
    line-height: calc(18px + 9 * (100vw / 1336));
}


.choose__video {
    width: 80%;
    object-fit: cover;
    margin: 0 auto;
}

@media (max-width: 992px) {

    .choose__subtitle,
    .choose__video {
        width: 100%;
    }
}
</style>