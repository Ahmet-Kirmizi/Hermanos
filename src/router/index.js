import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import menu from '../views/menu.vue'
import sepet from '../views/sepet.vue'
import cuzdan from '../views/cuzdan.vue'
import hesap from '../views/hesap.vue'
import login from '../views/login.vue'
import edit from '../views/edit.vue'



Vue.use(VueRouter)

const routes = [

  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu
  },
  {
    path: '/sepet',
    name: 'sepet',
    component: sepet
  },
  {
    path: '/cuzdan',
    name: 'cuzdan',
    component: cuzdan
  },
  {
    path: '/hesap',
    name: 'hesap',
    component: hesap
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path : '/edit',
    name : 'edit',
    component : edit 
  },
]

const router = new VueRouter({
  routes
})

export default router
