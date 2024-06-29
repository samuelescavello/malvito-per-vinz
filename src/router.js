import { createRouter, createWebHistory } from 'vue-router';
 import AppHome from './pages/AppHome.vue';
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
            name: 'home',
            component: AppHome
        }, {
            path: '/',
            name: 'home',
            component: AppHome
        },
    ],
});
export {router};