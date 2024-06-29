import { createRouter, createWebHistory } from 'vue-router';
 import AppHome from './pages/AppHome.vue';
 import AppServizi from './pages/AppServizi.vue';
 import AppStanze from './pages/AppStanze.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/servizi',
            name: 'servizi',
            component: AppServizi
        }, {
            path: '/stanze',
            name: 'stanze',
            component: AppStanze
        },
    ],
});
export {router};