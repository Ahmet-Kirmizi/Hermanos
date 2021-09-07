// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
export const state = () => ({
  products : [],
  order : []
})

//to handle state
export const getters = { }

//to handle actions
export const actions = {
  getProducts({ commit }) {
    this.$axios.get("/menu")
      .then(response => {
        commit('set_products', response.data)
      })
  },
  register_push({commit,productname, price}) {
    this.$router.push({ path: "/edit" });
    commit('set_order', productname, price)
  },
}

//to handle mutations
export const mutations = {
  set_products(state, products) {
    state.products = products
  },
  set_order(state, order){
    state.order = order
  }
}

