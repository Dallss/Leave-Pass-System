/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import NewPassView from '../views/NewPassView.vue'
import StudentLand from '../views/LandingStudentView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/new-pass',
      name: 'newPass',
      component: NewPassView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentLand
    }
  ]
})

export default router
