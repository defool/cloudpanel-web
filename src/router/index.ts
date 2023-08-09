import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/new-server',
      name: 'new-server',
      component: () => import('../views/NewServer.vue')
    },
    {
      path: '/server-info',
      name: 'server-info',
      component: () => import('../views/server/ServerInfo.vue')
    }
  ]
})

export default router
