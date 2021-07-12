import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import menu from '../views/menu.vue'
import sepet from '../views/sepet.vue'
import cuzdan from '../views/hesap.vue'
import hesap from '../views/hesap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu
  },
  {
    path: '/',
    name: 'sepet',
    component: sepet
  },
  {
    path: '/',
    name: 'cuzdan',
    component: cuzdan
  },
  {
    path: '/',
    name: 'hesap',
    component: hesap
  },
  
]

const router = new VueRouter({
  routes
})

export default router
