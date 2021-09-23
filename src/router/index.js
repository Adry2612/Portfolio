import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/views/AboutMe.vue'
import contentView from '@/views/contentView.vue'
import Tecnologies from '@/views/Tecnologies.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: contentView
  },
  {
    path: '/about-me',
    name: 'About Me',
    component: AboutMe
  },
  {
    path: '/tecnologies',
    name: 'Tecnologies',
    component: Tecnologies
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
