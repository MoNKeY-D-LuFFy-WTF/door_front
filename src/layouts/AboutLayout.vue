<template>
    <div class="about">
        <div class="container-lg">
            <div class="about__content">
                <Tags />
                <mini-nav class="about__navbar" @click="renameTitle" :data="data" />
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Tags from '@/components/Tags.vue';
export default {
    components: {
        Tags
    },
    data() {
        return {
            data: {
                title: ``,
                list: [
                    {
                        link: "/about/about",
                        text: `О фабрике`,
                    },
                    {
                        link: "/about/certificate",
                        text: `Сертификаты`,
                    },
                    {
                        link: "/about/production",
                        text: `Производство`,
                    },
                    {
                        link: "/about/vacancies",
                        text: `Вакансии`,
                    },
                    {
                        link: "/about/media_center",
                        text: `Медиа-центр`,
                    },
                    {
                        link: "/about/video",
                        text: `Видео`,
                    },
                    {
                        link: "/contacts",
                        text: `Контакты фабрики`,
                    },
                    {
                        link: "/map_site",
                        text: `Карта сайта`,
                    },
                ]
            }
        }
    },
    computed: {
        renameTitle() {
            if (this.$route.path === "/about/about") {
                this.data.title = "О фабрике";
            } else if (this.$route.path === "/about/certificate") {
                this.data.title = "Сертификаты";
            } else if (this.$route.path === "/about/production") {
                this.data.title = "Фабрика межкомнатных дверей PortaPrima: собственное производство во Фрязино";
            } else if (this.$route.path === "/about/vacancies") {
                this.data.title = "Вакансии";
            } else if (this.$route.path === "/about/media_center") {
                this.data.title = "Медиа-центр";
            } else if (this.$route.path === "/about/video") {
                this.data.title = "Видеоматериалы";
            }
        }
    }
}
</script>

<style  scoped>
.about {
    margin: 1.5rem 0px 0px 0px;
}

.about__navbar {
    margin: 1.5rem 0px 0px 0px;
}
</style>