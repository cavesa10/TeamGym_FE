import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Registro from '../views/Registro.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/LogIn',
        name: 'LogIn',
        component: LogIn
    },
    {
        path: '/Registro',
        name: 'Registro',
        component: Registro
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router