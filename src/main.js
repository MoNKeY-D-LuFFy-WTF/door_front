import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
//bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
//end

//defual ui components
import UI from '@/components/UI'
import VueEasyLightbox from 'vue-easy-lightbox';
//end


/* import the fontawesome core */
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
/*end*/

const app = createApp(App);

UI.forEach(element => {
    app.component(element.name, element);
});
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueEasyLightbox)
app.use(createPinia())
app.use(router)
app.mount('#app')
