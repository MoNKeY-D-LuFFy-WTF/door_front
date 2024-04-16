<template>
    <div class="input">
        <div class="form-floating">
            <input @change="toggleRequire" @mouseup="toggleRequire" :type="type" :name="name" class="form-control"
                id="floatingPassword" :placeholder="place">
            <label for="floatingPassword">{{ place }}</label>
            <div v-if="show.requier" class="form-require">
                <span>Поле обязательно для заполнения</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-input',
    props: {

        type: {
            type: String,
            requier: true,
        },
        place: {
            type: String,
            requier: true,
        },
        name: {
            type: String,
            requier: true,
        }
    },
    data() {
        return {
            show: {
                requier: false
            },
        }
    },
    methods: {
        toggleRequire(e) {
            if (e.target.value === '') {
                this.show.requier = true;
            } else {
                this.show.requier = false;
            }
        },
        changeType(e) {
            if (this.type == "number") {
                e.target.value = Number(e.target.value);
            } else {
                return
            }
        }
    },
}
</script>

<style scoped>
.input {
    display: flex;
    flex-direction: column;
}

.form-control {
    border-radius: 0 !important;
    font-size: 18px !important;
}

.form-floating {
    position: relative;
    top: 0;
    left: 0;
}

.form-control:focus {
    box-shadow: 0 0 0 !important;
    border-bottom: solid 2px #8f332f !important;
}

.form-require {
    font-size: 14px;
    background: #f25830;
    color: #fff;
    padding: 2px 7px;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 2;
}

.form-require span {
    display: inline-block;
}

input {
    border: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none; 
}

input:focus-visible {
    outline: none;
}

input:focus {
    border-bottom: solid 1px #f2583040;
}

input:focus.input label {
    font-size: 1px;
}
</style>