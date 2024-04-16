<template>
    <div class="diploma__wrapper">
        <div class="service__content-title">
            <h4>ДИПЛОМЫ</h4>
        </div>
        <div class="diploma__text">
            <p>Porta prima принимает активное участие в строительно-интерьерных выставках среди компаний - лидеров дверного
                рынка. Так же специалисты нашей компании посещают зарубежные выставки, на которых обмениваются опытом со
                своими иностранными коллегами и получают практические навыки, помогающие усовершенствовать технологии
                производства межкомнатных дверей Porta prima.</p>
            <div class="diploma__items">
                <div class="diploma__item">
                    <a @click.prevent="showMultiple(0)" href="#">
                        <img src="@/assets/about/dip1.webp" alt="">
                        <em>Диплом Buildex</em>
                    </a>
                </div>
                <div class="diploma__item">
                    <a @click.prevent="showMultiple(1)" href="#">
                        <img src="@/assets/about/dip2.webp" alt="">
                        <em>Диплом Buildex</em>
                    </a>
                </div>
            </div>
        </div>
        <vue-easy-lightbox :loop="true" :visible="visibleRef" :imgs="imgsRef" :index="indexRef"
            @hide="onHide"></vue-easy-lightbox>
    </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineComponent } from 'vue'
export default defineComponent({
    components: {
        VueEasyLightbox
    },
    setup() {
        const visibleRef = ref(false)
        const indexRef = ref(0)
        const imgsRef = ref([])

        const onShow = () => {
            visibleRef.value = true
        }
        const showMultiple = (index) => {
            imgsRef.value = [
                { title: 'Диплом Buildex', src: '/src/assets/about/dip1_l.webp' },
                { title: 'Диплом Buildex', src: '/src/assets/about/dip2_l.webp' },
            ]

            indexRef.value = index // index of imgList
            onShow()
        }
        const onHide = () => (visibleRef.value = false)

        return {
            visibleRef,
            indexRef,
            imgsRef,
            showMultiple,
            onHide
        }
    }
})
</script>

<style  scoped>
p {
    font-size: 16px;
    color: #333;
}

.diploma__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.diploma__text {
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
}

.diploma__items {
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    gap: 20px;
}

.diploma__item a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #8f332f;
}

.diploma__item a:hover {
    text-decoration: none;
}

@media (max-width: 767px) {
    .diploma__items {
        grid-template: 1fr / 1fr;
        margin: 0 auto;
    }
}
</style>