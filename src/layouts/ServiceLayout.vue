<template>
    <div class="service">
        <div class="container-lg">
            <div class="service__content">
                <Tags />
                <mini-nav class="service__navbar" @click="renameTitle" :data="data" />
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
                        link: "/service/frozen",
                        text: `Вызов замерщика`,
                    },
                    {
                        link: "/service/door_key",
                        text: `Дверь под ключ`,
                    },
                    {
                        link: "/service/pay",
                        text: `Оплата`,
                    },
                    {
                        link: "/service/delivery",
                        text: `Доставка`,
                    },
                    {
                        link: "/service/return",
                        text: `Обмен и возврат`,
                    },
                    {
                        link: "/service/installation",
                        text: `Установка`,
                    },
                    {
                        link: "/service/guarantee",
                        text: `Гарантийное обслуживание`,
                    },
                    {
                        link: "/service/preparation",
                        text: `Подготовка проёмов`,
                    },
                    {
                        link: "/service/finishing",
                        text: `Отделка стен и полотен`,
                    },
                ]
            }
        }
    },
    computed: {
        renameTitle() {
            if (this.$route.path === "/service/frozen") {
                this.data.title = "Межкомнатные двери под любой размер";
            } else if (this.$route.path === "/service/door_key") {
                this.data.title = "Межкомнатные двери под ключ с доставкой и установкой";
            } else if (this.$route.path === "/service/pay") {
                this.data.title = "Информация об оплате";
            } else if (this.$route.path === "/service/delivery") {
                this.data.title = "Доставка";
            } else if (this.$route.path === "/service/return") {
                this.data.title = "Условия обмена и возврата средств";
            } else if (this.$route.path === "/service/installation") {
                this.data.title = "Установка межкомнатных дверей";
            } else if (this.$route.path === "/service/guarantee") {
                this.data.title = "Гарантийное и постгарантийное обслуживание";
            } else if (this.$route.path === "/service/preparation") {
                this.data.title = "Подготовка проёмов под монтаж продукции PortaPrima";
            } else {
                this.data.title = "Отделка стен и полотен дверей-невидимок декоративными материалами";
            }
        }
    }
}
</script>

<style  scoped>
.service {
    margin: 1.5rem 0px 0px 0px;
}

.service__navbar {
    margin: 1.5rem 0px 0px 0px;
}
</style>