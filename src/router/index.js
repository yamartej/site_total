import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Otras rutas de tu aplicación
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
