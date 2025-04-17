import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pricing', component: Pricing },
  { path: '/contact', component: Contact },
  { path: '/gallery', component: Gallery },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
