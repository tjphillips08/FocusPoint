import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import Booking from '../views/Booking.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pricing', component: Pricing },
  { path: '/booking', component: Booking },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
