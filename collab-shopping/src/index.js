import { createRouter, createWebHistory } from 'vue-router'
import ListItems from './components/ListItems.vue'
import HomePage from './components/HomePage.vue'

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            props: { }
        },
        {
            path: '/items',
            component: ListItems,
            props: { }
        }
    ]
})

export default router