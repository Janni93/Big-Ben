import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menukort from '@/views/Menukort.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Menukort',
      name: 'MENUKORT',
      component: Menukort,
    },
  ],

  // 👇 Tilføj dette for at scrolle til toppen
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
