<template>
    <div class="installtion__attention">
        <p>Профессиональная монтажная служба от фабрики межкомнатных дверей PortaPrima установит новые двери качественно и в
            срок! Наши специалисты делают это каждый день, знают все нюансы, а главное – несут ответственность за результат.
        </p>
        <div class="installtion__attention-content">
            <div class="installtion__content-title">
                <h6>Внимание</h6>
                <p>Мы устанавливаем двери <b>только собственного производства</b> — производства фабрики Porta prima.</p>
            </div>
            <div class="attention-content__text">
                <p><b>Профессиональный монтаж межкомнатных дверей от фабрики Porta prima это:</b></p>
                <p>1. Любая сложность монтажных работ: двери распашные, раздвижные, рото-двери, одностворчатые или
                    двустворчатые, с петлями обычными, скрытыми или пяточными.</p>
                <p>2. Использование профессионального оборудования и инструментов, а также качественных расходных
                    материалов, фрезеровка пазов только по специальным шаблонам. Правильная технология и гарантия соблюдения
                    всех технических нормативов каждой операции. На что все вышеперечисленное влияет? </p>
                <ul>
                    <li>Все зазоры и расстояния будут выверены, а операции выполнены с соблюдением технологических
                        нормативов, чтобы дверной блок не деформировался со временем, дверь идеально закрывалась, не
                        скрипела, не проседала.</li>
                    <li>Монтаж наличников и доборов без дополнительных видимых крепежей (в паз-гребень с обеих сторон)
                        позволяет получить отличные эстетические свойства обрамления дверного проема.</li>
                    <li>В результате использования специальных шаблонов для фрезеровки пазов получают идеально установленные
                        скрытые петли, замок или ответную планку, без щелей и зазоров.</li>
                    <li>Правильное расстояние между дверью и полом обеспечит оптимальную циркуляцию воздуха в помещении.
                        F</li>
                </ul>
                <p>Правильное расстояние между дверью и полом обеспечит оптимальную циркуляцию воздуха в помещении.</p>
                <p>4. При осуществлении предварительного замера дверного проема нашими специалистами – вся ответственность
                    за правильность комплектации заказа и результата монтажа лежит на сотрудниках фабрики.</p>
                <p>5. Предоставляется гарантия:</p>
                <ul>
                    <li>на дверные полотна, наличники, коробку и доборы: 5 лет со дня покупки.</li>
                    <li>на монтаж: 3 года с момента установки.</li>
                    <li>на фурнитуру: 1 год со дня покупки.</li>
                </ul>
                <p>В период гарантийного обслуживания бесплатно производится устранение всех скрытых дефектов, а также
                    дефектов, возникших в период эксплуатации дверных полотен или фурнитуры.</p>
                <p>Попытка сэкономить на установке межкомнатных дверей может обернуться для Вас серьезными проблемами.
                    Например, дверь может получить механические повреждения, скрипеть, потерять свой внешний вид и т.д. </p>
                <p>Чтобы их избежать, доверьте установку межкомнатных дверей профессионалам!</p>
                <h6>Внимание!</h6>
                <p>Установка межкомнатных дверей – это завершающий этап ремонта, который выполняется после окончания всех
                    отделочных работ и настила чистового покрытия пола.</p>
                <p>В помещении, где проводится установка, должна быть температура не ниже +15° С, хорошее освещение, наличие
                    розеток на 220 В и достаточная площадь (не менее 7 кв.м.).</p>
                <p>Мы предлагаем комплексные услуги под ключ от проведения замеров, изготовления двери до доставки и
                    установки на месте.</p>
                <div class="attention-content__info">
                    <div class="content__info-text">
                        <p>Получить консультацию и заказать установку межкомнатных дверей можно по телефону</p>
                        <a href="tel:+7 (495) 149-10-62">+7 (495) 149-10-62</a>
                        <span>
                            E-mail:
                            <email />
                        </span>
                        <p>
                            Покупателям из других регионов России мы рекомендуем обращаться к дистрибьюторам нашей компании.
                        </p>
                    </div>
                    <Transition name="bounce">
                        <m-order-installation @closeModal="showModal" v-if="show" />
                    </Transition>
                    <button @click="showModal(true)" class="btn">ЗАКАЗАТЬ МОНТАЖ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    methods: {
        showModal(bool) {
            const body = document.body
            if (this.show) {
                this.show = false
                body.style.overflow = "auto";

            } else {
                this.show = true
                body.style.overflow = "hidden";
            }
        }
    }
}
</script>

<style scoped>
h6 {
    font-size: 16px;
    font-weight: bold;
    color: #323232;
    line-height: 24px;
}

p {
    font-size: 16px;
    color: #333;
}

li {
    font-size: calc(12px + 2 * (100vw / 1336));
    color: #333;
    list-style: disc;
    margin: 0px 0px 10px 1.5rem;
    line-height: calc(19px + 6 * (100vw / 1336));
}

a {
    color: #8f332f;
    text-decoration: underline;
}

a:hover {
    text-decoration: none;
}

li::marker {
    color: #8f332f;
    font-weight: bold;
}

.installtion__attention {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 0px 3rem 0px;
}

.installtion__attention-content h6:nth-child(1) {
    border-bottom: solid 3px #8f332f;
    font-size: 18px;
    padding: 0px 0px 8px 0px;
    display: inline-block;
    margin: 0;
}

.installtion__content-title>p {
    border-bottom: solid 1px #444;
    padding: 0px 0px 1.5rem 0px;
}


.attention-content__info {
    border-top: solid 1px #ccc;
    padding: 2rem 0px 0px 0px;
    display: flex;
    align-items: flex-start;
}

.attention-content__info button {
    background: #8f332f;
    font-size: calc(16px + 3 * (100vw / 1336));
    color: #fff;
    border-radius: 0%;
    font-weight: bold;
    padding: calc(8px + 2 * (100vw / 1336)) calc(20px + 20 * (100vw / 1336));
}

.attention-content__info button:hover {
    background: #9f0b0b;
}

.content__info-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
}

.content__info-text p:last-child {
    margin: 1rem 0px 0px 0px;
}

.bounce-enter-active {
    animation: bounce-in 0.2s;
}

.bounce-leave-active {
    animation: bounce-in 0.2s reverse;
}

@keyframes bounce-in {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }

    to {
        transform: translateY(0%);
        opacity: 1;
    }
}
</style>