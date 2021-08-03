import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        product: ''
      },
      mutations: {
        change(state, product) {
          state.product = product
        }
      },
      getters: {
        product: state => state.product
      }
})