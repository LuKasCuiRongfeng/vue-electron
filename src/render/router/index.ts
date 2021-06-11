import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../pages/About/index.vue'
import Detail from '../pages/Detail/index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/about", component: About },
        { path: "/detail", component: Detail } 
    ]
})

export default router