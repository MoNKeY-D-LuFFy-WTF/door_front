import BACKEND_URL from '@/BACKEND__URL';
import axios from "axios";
import Tags from '../Tags.vue';
export default {
    components: {
        Tags
    },
    data() {
        return {
            BACKEND_URL,
            data: [],
            arrayMobile: [],
            arrayMobileChild: [],
            params: {
                parent: `/${this.$route.params.catalog_url}`,
                child: `/${this.$route.params.child_url}`
            },
            products: [],
            tags: {
                parent: {},
                child: {}
            }
        }
    },
    methods: {
        getData() {
            axios.get(`${this.BACKEND_URL}/catalogs?params=${this.params}`)
                .then(res => {
                    this.data = res.data;
                    this.arrayMobile = this.filterData(this.params)
                    this.arrayMobileChild = this.filterChildren(this.params)
                    this.setTags();
                    return
                })
        },
        filterData(params) {
            return this.data.filter(item => item.url === params.parent)[0];
        },
        filterChildren(params) {
            return this.arrayMobile.catalog_child.filter(item => item.url === params.child)[0]
        },
        getPruducts(parentUrl, childUrl) {
            if (parentUrl === '/furnitura_dlya_dvere') {
                if (childUrl !== "/") {
                    axios.get(`${BACKEND_URL}/catalog_products${parentUrl}${childUrl}?param=furniture`)
                        .then(res => {
                            this.products = res.data;
                        })
                } else {
                    axios.get(`${BACKEND_URL}/catalog_products${parentUrl}/undefined?param=furniture`)
                        .then(res => {
                            this.products = res.data;
                        })
                }
            } else {
                if (!(childUrl.length > 1)) {
                    axios.get(`${BACKEND_URL}/catalog_products${parentUrl}/undefined?param=door`)
                        .then(res => {
                            this.products = res.data;
                        })
                } else {
                    axios.get(`${BACKEND_URL}/catalog_products${parentUrl}${childUrl}?param=door`)
                        .then(res => {
                            this.products = res.data;
                        })
                }
            }
        },
        setTags() {
            if (this.arrayMobile !== undefined) {
                this.tags.parent.name = this.arrayMobile.name;
                this.tags.parent.url = this.params.parent
                this.tags.parent = this.tags.parent
            }
            if (this.params.child === "/") {
                this.tags.child = {}
            }
            if (this.arrayMobileChild !== undefined) {
                this.tags.child.name = this.arrayMobileChild.name;
                this.tags.child.url = this.params.child
            }
            this.filterData(this.params);
        }
    },
    watch: {
        '$route': function (to, from) {
            this.params.parent = "/";
            this.params.child = "/";
            if (to.params.catalog_url !== undefined) {
                this.params.parent += to.params.catalog_url
            } else {
                this.params.parent = "/";
            }
            if (to.params.child_url !== undefined) {
                this.params.child += to.params.child_url
            } else {
                this.params.child = "/";
            }
            this.arrayMobile = this.filterData(this.params)
            this.arrayMobileChild = this.filterChildren(this.params)
            this.getPruducts(this.params["parent"], this.params["child"]);
            this.setTags();
        },
    },

    mounted() {
        this.getData();
        this.getPruducts(this.params["parent"], this.params["child"]);
        this.setTags();
        console.log(this.params);
    },

}