import { createRouter, createWebHistory } from 'vue-router';
 import AppHome from './pages/AppHome.vue';
import AppServizi from './pages/AppServizi.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/stanze',
            name: 'stanze',
            component: AppServizi
        },
    ],
});
export {router};