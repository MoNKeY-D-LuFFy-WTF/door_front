<template>
    <div @click="toggleAccardion" class="accardion">
        <div class="accardion__content">
            <div class="accardion__title">
                <h5>{{ data.title }}</h5>
            </div>
            <div :class="show ? `active` : ''" class="accardion__arrow">
                <span :class="show ? `active` : ''"></span>
            </div>
        </div>
        <Transition name="slide-fade">
            <div v-if="show" class="accardion__text">
                <p>
                    {{ data.subtitle }}
                </p>
            </div>
        </Transition>
    </div>
</template>

<script>

export default {
    name: 'acr-question',
    data() {
        return {
            show: false
        }
    },
    computed: {
        toggleAccardion() {
            if (this.show) {
                this.show = false;
            } else {
                this.show = true;
            }
        }
    },
    props: {
        data: {
            type: [Array, Object],
            requie: true,
        },

    }
}
</script>

<style scoped>
.accardion {
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 3.5%;
    cursor: pointer;
    transition: all ease .2s;
    position: relative;
    top: 0;
    left: 0;
}

.accardion:hover {
    transition: all ease .2s;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
}

.accardion:hover .accardion__arrow {
    background: #7b2b27;
    transition: all ease .2s;

}

.accardion:hover .accardion__arrow span {
    background: #fff;
    transition: all ease .2s;

}

.accardion__content {
    display: flex;
    justify-content: space-between;

}


.accardion__arrow {
    /* clip-path: polygon(50% 0, 100% 60%, 100% 100%, 49% 25%, 0 100%, 0 60%); */
    border: 1px solid #ECECEC;
    padding: 12px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    background: #fff;
}

.active.accardion__arrow {
    background: #7b2b27;
}

.active.accardion__arrow::before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 30%;
    left: 0;
    clip-path: circle(52.9% at 0 47%);
    background: #7b2b27;
}

.accardion__arrow span {
    display: inline-block;
    background: gray;
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 66%, 100% 0, 100% 20%, 50% 100%, 0 20%, 0 0);
}

.accardion__arrow span.active {
    clip-path: polygon(50% 0, 100% 60%, 100% 100%, 49% 25%, 0 100%, 0 60%);
    background: #fff;

}

.accardion__text p {
    color: #212529;
    font-weight: 100;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>