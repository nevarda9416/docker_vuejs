import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Dashboard from "@/pages/Dashboard.vue";

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})
export default router