<template>
    <div>
        <ul class="reviews">
            <li>
                <router-link to="/">
                    <i class="fa-solid fa-file-shield"></i>
                    <span>Сертификаты продукции</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                    <span>Гарантийное и постгарантийное обслуживание</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="fa-solid fa-volcano"></i>
                    <span> Производственные мощности</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="fa-regular fa-address-card"></i>
                    <span>Сми о нас</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="fa-regular fa-comment"></i>
                    <span>Отзывы</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.reviews {
    display: flex;
    box-shadow: 0px 0px 10px #ccc;
    padding: 1.5rem 0px;
    margin: 0;
}

.reviews li {
    border-left: solid 1px #ccc;
}

.reviews li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #888;
    gap: 10px;
    width: 100%;
    height: 100%;
}

.reviews li a:hover {
    color: #8f332f;
}

.reviews li a i {
    font-size: calc(20px + 15 * (100vw / 1336));
}

.reviews li:nth-child(1) {
    border: none;
}

.reviews li:nth-child(1),
.reviews li:nth-child(2),
.reviews li:nth-child(3) {
    flex: 1 1 25%;
}

.reviews li:nth-child(4),
.reviews li:nth-child(5) {
    flex: 1 1 12.5%;

}

.reviews li a span {
    font-size: 14px;
    padding: 0px 1.1rem;
}

@media (max-width: 770px) {
    .reviews {
        flex-direction: column;
        align-items: flex-start;
        text-align: start;
        gap: 20px;
        padding: 2rem 0px 2rem 2rem;
    }

    .reviews li {
        flex: 1 1 auto;
    }

    .reviews li a {
        flex-direction: row;
        gap: 5px;
    }

    .reviews li a span {
        text-align: start;
    }

}
</style>