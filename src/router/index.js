import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PromationIndex from '@/views/Promation/IndexView.vue';
import PromationItem from '@/views/Promation/ItemView.vue';
import InstalmentIndex from '@/views/Instalment/IndexView.vue';
import Sale from '@/views/Sale/IndexView.vue';
import ServiceIndex from '@/views/Service/IndexView.vue';
import ServiceDoorKey from '@/views/Service/Children/DoorKey.vue';
import ServiceFrozen from '@/views/Service/Children/Frozen.vue';
import ServicePay from '@/views/Service/Children/Pay.vue';
import ServiceDelivery from '@/views/Service/Children/Delivery.vue';
import ServiceReturn from '@/views/Service/Children/Return.vue';
import ServiceInstallation from '@/views/Service/Children/Installation.vue';
import ServiceGuarantee from '@/views/Service/Children/Guarantee.vue';
import ServicePreparation from '@/views/Service/Children/Preparation.vue';
import ServiceFinishing from '@/views/Service/Children/Finishing.vue';
import AboutView from "@/views/About/IndexView.vue"
import AboutAbout from "@/views/About/Children/AboutAbout.vue"
import AboutCertificate from "@/views/About/Children/AboutCertificate.vue"
import AboutProduction from "@/views/About/Children/AboutProduction.vue"
import AboutVacancies from "@/views/About/Children/AboutVacancies.vue"
import AboutMediaCenter from "@/views/About/Children/AboutMediaCenter.vue"
import AboutVideo from "@/views/About/Children/AboutVideo.vue"
import ContactsView from "@/views/ContactsView.vue"
import MapSiteView from "@/views/MapSiteView.vue"
import Catalog from "@/views/Catalog.vue"
import CatalogChild from "@/views/CatalogChild.vue"
import Door from "@/views/Door.vue"
import Basketview from "@/views/Basketview.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/promation',
            name: 'promation',
            component: PromationIndex
        },
        {
            path: '/promation/:id/item',
            name: 'promationItem',
            component: PromationItem
        },
        {
            path: '/instalment',
            name: 'instalment',
            component: InstalmentIndex
        },
        {
            path: '/sale',
            name: 'sale',
            component: Sale
        },
        {
            path: '/service',
            name: 'service',
            component: ServiceIndex,
            children: [
                {
                    path: 'door_key',
                    component: ServiceDoorKey,
                },
                {
                    path: 'frozen',
                    component: ServiceFrozen,
                },
                {
                    path: 'pay',
                    component: ServicePay,
                },
                {
                    path: 'delivery',
                    component: ServiceDelivery,
                },
                {
                    path: 'return',
                    component: ServiceReturn,
                },
                {
                    path: 'installation',
                    component: ServiceInstallation,
                },
                {
                    path: 'guarantee',
                    component: ServiceGuarantee,
                },
                {
                    path: 'preparation',
                    component: ServicePreparation,
                },
                {
                    path: 'finishing',
                    component: ServiceFinishing,
                },
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
            children: [
                {
                    path: 'about',
                    component: AboutAbout,
                },
                {
                    path: 'certificate',
                    component: AboutCertificate,
                },
                {
                    path: 'production',
                    component: AboutProduction,
                },
                {
                    path: 'vacancies',
                    component: AboutVacancies,
                },
                {
                    path: 'media_center',
                    component: AboutMediaCenter,
                },
                {
                    path: 'video',
                    component: AboutVideo,
                },
            ]
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/map_site',
            name: 'map_site',
            component: MapSiteView
        },
        {
            path: '/:catalog_url/',
            name: 'catalog',
            component: Catalog,
            children: [
                {
                    path: ':child_url/',
                    component: CatalogChild
                },
                {
                    path: ':door_url/',
                    component: Door
                }
            ]
        },
        {
            path: '/:catalog_url/:catalg_child_url/:door_url',
            name: 'door',
            component: Door,
        },
        {
            path: '/basket',
            name: 'basket',
            component: Basketview,
        }

    ]
})

export default router