// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
export const state = () => ({
  products : [],
  cart : [],
  productData : []
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
  addProductToCart({commit}, {name, price, quantity}){
    commit('ADD_TO_CART', {name , price, quantity})
    this.$router.push({ path: "/edit" });
  },
  getProductData({commit}){
    this.$axios.get("sendCardData").then(response => {
      commit('SET_PRODUCT_DATA', response.data)
    })
  }
}

//to handle mutations
export const mutations = {
  set_products(state, products) {
    state.products = products
  },
ADD_TO_CART(state, {name, price, quantity}){
    state.cart.push({
      name,
      price,
      quantity
    })
},
SET_PRODUCT_DATA(state, productData){
  state.productData = productData
}
}

