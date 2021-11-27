import { createRouter, createWebHistory } from 'vue-router'
import ListItems from './components/listitems.vue'
import HelloWorld from './components/HelloWorld.vue'

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            component: HelloWorld,
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