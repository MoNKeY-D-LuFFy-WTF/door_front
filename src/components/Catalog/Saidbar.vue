<template>
    <nav>
        <ul class="group-list">
            <li v-for="item in dataNavbar" :key="item.id">
                <router-link :to="item.url">
                    {{ item.name }}
                </router-link>
                <ul class="group-list__child">
                    <li v-for="itemChild in item.catalog_child" :key="itemChild.id">
                        <router-link :to="item.url + itemChild.url">{{ itemChild.name }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import BACKEND_URL from "@/BACKEND__URL";
import axios from "axios";

export default {
    data() {
        return {
            dataNavbar: [],
        }
    },
    methods: {
        getDataNavbar() {
            axios.get(`${BACKEND_URL}/catalogs`)
                .then(res => {
                    this.dataNavbar = res.data;
                })
        }
    },
    mounted() {
        this.getDataNavbar();
    },

}
</script>

<style scoped>
.group-list {
    margin: 15px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.group-list li a {
    color: #696969;
    transition: all ease 0.3s;
}

.group-list li a:hover {
    color: #000;
}



.group-list__child {}

.router-link-active {
    color: #8f332f !important;
    font-weight: bold;
}
</style>