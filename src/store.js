import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: []
  },
  mutations: {
    addAccount (state, newAccount) {
      state.accounts.push(newAccount)
    }
  },
  actions: {
    addAccount (state, newAccount) {
      state.commit('addAccount', newAccount)
    }
  }
})
