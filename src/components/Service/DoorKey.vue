<template>
    <div class="door-key">
        <KeyQuestion />
        <div class="door-key__from">
            <h3>Заказать дверь «под ключ»</h3>
            <DoorKeyForm />
        </div>
        <KeyIncluded />
        <KeyAdvantages />
        <KeyCard />
        <div class="door-key__small">
            * Для моделей дверей по складской программе

        </div>
        <ReviewsList />
    </div>
</template>

<script>
import DoorKeyForm from '@/components/Form/DoorKeyForm.vue';
import KeyQuestion from '@/components/Service/KeyQuestion.vue';
import KeyIncluded from '@/components/Service/KeyIncluded.vue';
import KeyAdvantages from '@/components/Service/KeyAdvantages.vue';
import KeyCard from '@/components/Service/KeyCard.vue';
import ReviewsList from '@/components/Reused/ReviewsList.vue';

export default {
    components: {
        DoorKeyForm,
        KeyQuestion,
        KeyIncluded,
        KeyAdvantages,
        KeyCard,
        ReviewsList
    }
}
</script>

<style scoped>
.door-key__from {
    width: 700px;
    border: solid 1px #ccc;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    margin: 0px 0px 3.5rem 0px;
}

.door-key__from h3 {
    font-size: calc(25px + 7 * (100vw / 1336));
    font-weight: 400;
}

.door-key__small {
    color: #9f9f9f;
    text-align: center;
    font-size: 12px;
    margin: 1rem 0px 3rem 0px;
}

@media (max-width: 767px) {
    .door-key__from {
        width: 100%;
    }
}
</style>