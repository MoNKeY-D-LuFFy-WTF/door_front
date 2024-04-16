<template>
    <div class="size__door py-5">
        <div class="size__door-img">
            <img class="img-fluid" src="@/assets/instalment/5_complect.jpg" alt="5_complect">
        </div>
        <div class="size__door-text">
            <div class="size__door-title">
                <h2> Нужен нестандартный размер двери?</h2>
            </div>
            <div class="size__door-subtitle">
                <p>Фабрика Porta prima может изготовить нестандартный размер межкомнатной двери по вашим меркам. Возможно
                    высота полотна высотой до 2,9 м, шириной до 1 м.</p>
                <p>
                    Свяжитесь с нами чтобы рассчитать точную стоимость вашей двери.</p>
            </div>
            <div class="size__door-link">
                <revers-link :link="`/`">Заказать расчет</revers-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.size__door {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.size__door-img {
    width: 100%;
    object-fit: cover;
}

.size__door-img img {
    height: calc(400px + 240 * (100vw / 1336));

}

.size__door-text {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0px 0px 0px 7%;
}

.size__door-title h2 {
    font-size: calc(36px + 12 * (100vw / 1336));
    font-weight: 400;
}

.size__door-subtitle p {
    font-size: calc(15px + 4 * (100vw / 1336));
}

@media (max-width: 992px) {
    .size__door {
        flex-direction: column;
        gap: 20px;
    }
}
</style>