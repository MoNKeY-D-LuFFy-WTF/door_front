<template>
    <div class="door-key__question">
        <ul class="question__list">
            <li>Как подобрать дверные полотна к интерьеру?</li>
            <li>Как подобрать дверные полотна к интерьеру?</li>
            <li>Ставить ли наличники на одну или обе стороны?</li>
            <li>Какие конструкции выбрать для узкого коридора?</li>
            <li>Где найти квалифицированных монтажников?</li>
        </ul>
        <p>Но все эти вопросы вам не нужно решать самостоятельно.</p>
        <p>Компания Porta prima предлагает вам выбрать установку <router-link to="/">межкомнатных
                дверей</router-link>
            «под ключ».</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.door-key__question {
    margin: 2.5rem 0px 2rem 0px;
}

.door-key__question p {
    color: #313434;
    font-size: calc(14px + 2 * (100vw / 1336));
    line-height: 1;
}

.door-key__question p a {
    color: #000;
}

.door-key__question p a:hover {
    color: #8f332f;
    text-decoration: none;
}

.question__list li {
    list-style-type: disc;
    color: #313434;
    margin: 0px 0px 10px 0px;
}
</style>