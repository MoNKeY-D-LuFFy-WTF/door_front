<template>
    <div class="input">
        <div class="form-floating">
            <textarea  @change="toggleRequire" :type="type" :name="name" class="form-control" id="textArea"
                :placeholder="place"></textarea>
            <label for="textArea">{{ place }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-text',
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

textarea {
    border: none;
    height: calc(90px + 21 * (100vw / 1336)) !important;
}

textarea:focus-visible {
    outline: none;
}

textarea:focus {
    border-bottom: solid 1px #f2583040;
}

textarea:focus.input label {
    font-size: 1px;
}
</style>