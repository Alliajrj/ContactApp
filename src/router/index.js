import { createRouter, createWebHistory } from 'vue-router'
import ClavierView from '../views/ClavierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/journal',
      name: 'journal',
      component: () => import('../views/JournalView.vue')
    },
    {
      path: '/addcontact',
      name: 'addcontact',
      component: () => import('../views/AddContactView.vue')
    }
  ]
})

export default router
