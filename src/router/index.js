import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import authMiddleware from '@/middleware/auth'; // Importa tu middleware

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: { 
      requiresAuth: true 
    },
    //beforeEnter: authMiddleware, // Aplica el middleware de autenticación
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Ventas.vue'),
    meta: { requiresAuth: true },
    beforeEnter: authMiddleware, // Aplica el middleware de autenticación
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
