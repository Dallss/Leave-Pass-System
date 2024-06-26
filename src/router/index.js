/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import landingview from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landingview
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
