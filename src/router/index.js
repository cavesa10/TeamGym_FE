import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Registro from '../views/Registro.vue'
import Perfil from '../views/Perfil.vue'
import PlanesPerfil from '../views/PlanesPerfil.vue'
import EditPerfil from '../views/EditPerfil.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home2',
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
    },
    {
        path: '/Perfil',
        name: 'Perfil',
        component: Perfil
    },
    {
        path: '/Perfil/MiPlan',
        name: 'PlanesPerfil',
        component: PlanesPerfil
    },
    {
        path: '/Perfil/Editar',
        name: 'EditPerfil',
        component: EditPerfil
    },
    {
        path: '/:NotFound(.*)*',
        component: NotFound,
        name: 'NotFound'
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    mode: 'history'
})


export default router