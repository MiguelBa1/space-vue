import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination',
    name: 'destination',
    component: () => import('../views/Destination.vue')
  },
  // {
  //   path: '/destination',
  //   redirect: () => { return '/destination/moon'}
  //   // component: () => import('../views/Destination.vue')
  // },
  {
    path: '/crew',
    name: 'crew',
    component: () => import('../views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('../views/Technology.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
