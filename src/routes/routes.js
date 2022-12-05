import { createRouter, createWebHistory } from 'vue-router'
import Goleadores from '../components/Goleadores.vue'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import Calendario from '../components/Calendario.vue'
import AcercaDe from '../components/AcercaDe.vue'
import CrearUsuario from '../components/CrearUsuario.vue'
import Clasificaciones from '../components/Clasificaciones.vue'
import PantallaPerfil from '../components/PantallaPerfil.vue'
import EditarPerfil from '../components/EditarPerfil.vue'
import FaseFinal from '../components/FaseFinal.vue'

const routes = [
    {
        name: 'index',
        path: '/',
        component: Clasificaciones
    },
    {
        name: 'Goleadores',
        path: '/maximos-goleadores',
        component: Goleadores
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Calendario',
        path: '/calendario',
        component: Calendario
    },
    {
        name: 'CrearUsuario',
        path: '/sign-up',
        component: CrearUsuario
    },
    {
        name: 'Clasificaciones',
        path: '/clasificaciones',
        component: Clasificaciones
    },
    {
        name: 'AcercaDe',
        path: '/acercade',
        component: AcercaDe
    },
    {
        name: 'PantallaPerfil',
        path: '/pantallaperfil',
        component: PantallaPerfil
    },
    {
        name: 'EditarPerfil',
        path: '/editarperfil',
        component: EditarPerfil
    },
    {
        name: 'FaseFinal',
        path: '/fasefinal',
        component: FaseFinal
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;