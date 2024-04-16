<template>
    <div class="certificate__wrapper">
        <div class="service__content-title">
            <h4>СЕРТИФИКАТЫ</h4>
        </div>
        <div class="certificate__text">
            <p>Межкомнатные двери устанавливаются, как правило, в жилых помещениях, поэтому они должны соответствовать всем
                санитарно-эпидемиологическим и гигиеническим требованиям. Покупая двери Porta prima, будьте уверены, что
                наша продукция изготовлена из экологичных материалов и соответствует всем нормам и требованиям согласно
                законодательству РФ.</p>
            <p>Предлагаем Вам ознакомиться с сертификатами, которые получила продукция, представленная в нашем каталоге.</p>
            <div class="certificate__items">
                <div class="item">
                    <a @click.prevent="showMultiple(0)" href="#">
                        <img src="@/assets/about/cert1-2019.webp" alt="">
                        <em> Сертификат о соответствияx </em>
                    </a>
                </div>
                <div class="item">
                    <a @click.prevent="showMultiple(1)" href="#">
                        <img src="@/assets/about/cert2.webp" alt="">
                        <em>Санитарно-эпидимиологическое заключение</em>
                    </a>
                </div>
                <div class="item">
                    <a @click.prevent="showMultiple(2)" href="#">
                        <img src="@/assets/about/cert4.webp" alt="">
                        <em>Сертификат на стекло</em>
                    </a>
                </div>
                <div class="item">
                    <a @click.prevent="showMultiple(3)" href="#">
                        <img src="@/assets/about/cert8.webp" alt="">
                        <em>Сертификат по пожарной безопасности</em>
                    </a>
                </div>
                <div class="item">
                    <a @click.prevent="showMultiple(4)" href="#">
                        <img src="@/assets/about/cert5.webp" alt="">
                        <em>Сертификат по экологической безопасности</em>
                    </a>
                </div>
                <div class="item">
                    <a @click.prevent="showMultiple(5)" href="#">
                        <img src="@/assets/about/cert6.webp" alt="">
                        <em>Сертификат на шпон NanoFlex</em>
                    </a>
                </div>
                <div class="item">
                    <a @click.prevent="showMultiple(6)" href="#">
                        <img src="@/assets/about/cert7.webp" alt="">
                        <em>Заключение о соответствии санитарным нормам</em>
                    </a>
                </div>
            </div>
            <vue-easy-lightbox :loop="true" :visible="visibleRef" :imgs="imgsRef" :index="indexRef"
                @hide="onHide"></vue-easy-lightbox>
        </div>

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
        const indexRef = ref(0) // default 0
        const imgsRef = ref([])
        // Img Url , string or Array of string
        // ImgObj { src: '', title: '', alt: '' }
        // 'src' is required
        // allow mixing

        const onShow = () => {
            visibleRef.value = true
        }
        const showMultiple = (index) => {
            imgsRef.value = [
                { title: 'Сертификат о соответствияx', src: '/src/assets/about/cert1_l-2019.webp' },
                { title: 'Санитарно-эпидимиологическое заключение', src: '/src/assets/about/cert2_l.webp' },
                { title: 'Сертификат на стекло', src: '/src/assets/about/cert4_l.webp' },
                { title: 'Сертификат по пожарной безопасности', src: '/src/assets/about/cert8_l.webp' },
                { title: 'Сертификат по экологической безопасности', src: '/src/assets/about/cert5_l.webp' },
                { title: 'Сертификат на шпон NanoFlex', src: '/src/assets/about/cert6_l.webp' },
                { title: 'Заключение о соответствии санитарным нормам', src: '/src/assets/about/cert7_l_1.webp' },
            ]
            // or
            // imgsRef.value = [
            //     { title: 'test img', src: 'http://via.placeholder.com/350x150' },
            //     'http://via.placeholder.com/350x150'
            // ]
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

<style scoped>
p {
    font-size: 16px;
    color: #333;
}



.certificate__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.5rem 0px 3rem 0px;
}

.certificate__text {
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
}

.certificate__items {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.item a img {
    object-fit: cover;
}

.item a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #8f332f;
}

.item a:hover {
    text-decoration: none;
}

@media (max-width: 767px) {
    .certificate__items {
        grid-template: 1fr / 1fr;
        margin: 0 auto;
    }
}
</style>