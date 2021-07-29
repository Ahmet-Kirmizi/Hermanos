
// holding our application state. This will allow us to determine if a user is authenticated as well as check if the user is logged in or not


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
        }
    },

    getters: {
        auth(state) {
            return state.user
        }
    }
})



