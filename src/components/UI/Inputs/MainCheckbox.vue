<template>
    <div class="checkbox">
        <input :checked="checked" @change="toggleRequire" type="checkbox">
        <span @click="toggleCheck">
            Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с
            Федеральным
            законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в
            Согласии на
            обработку персональных данных
        </span>
        <div v-if="show.requie" class="form-require">
            <span>Поле обязательно для заполнения</span>
        </div>
        <div v-else>
            <Transition>
                <m-agreement @closeModel="closeModel" :show="show.model"></m-agreement>
            </Transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-checkbox',
    data() {
        return {
            show: {
                requie: false,
                model: false
            },
            checked: false,
        }
    },
    methods: {
        toggleRequire(e) {
            this.show.model = true
            if (this.show.model) {
                document.body.style.overflow = 'hidden'
            }
            if (e.target.checked) {
                this.show.requie = false;
                this.checked = true
            } else {
                this.show.requie = true;
                this.checked = false
            }
        },
        closeModel(bool, ok) {
            if (!bool && ok) {
                this.show.requie = false;
                this.checked = true;
            }
            if (!bool && !ok) {
                this.show.requie = true;
                this.checked = false;
            }
            this.show.model = bool;
            document.body.style.overflow = 'auto'
            this.$emit('changeModal', bool, ok)
        }
    },
    computed: {
        toggleCheck() {
            this.show.model = true
            if (this.show.model) {
                document.body.style.overflow = 'hidden'
            }
            if (this.checked) {
                this.checked = false
                this.show.requie = true;
            } else {
                this.checked = true
                this.show.requie = false;
            }
        },
    }
}
</script>

<style scoped>
input {
    display: inline-block;
}

span {
    font-size: 11px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: inline-block;
}

div.checkbox {
    display: flex;
    align-items: flex-start;
    position: relative;
    top: 0;
    left: 0;
    gap: 1%;
}

.form-require {
    font-size: 14px;
    background: #f25830;
    color: #fff;
    padding: 2px 7px;
    position: absolute;
    width: 50%;
    top: 50%;
    left: 0;
    z-index: 2;
}

.form-require span {
    display: inline-block;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>