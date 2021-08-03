import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        size: '',
        sugar : '',
        sauces : '', 
      },
      mutations: {
        change(state, size, sugar, sauces) {
          state.size = size
          state.sugar = sugar
          state.sauces = sauces
        }
      },
      getters: {
        size: state => state.size,
        sugar: state => state.sugar,
        sauces: state => state.sauces

      }
})