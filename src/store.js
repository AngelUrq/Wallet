import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    actualAccount: { name: '', income: [], expenses: [] }
  },
  mutations: {
    addAccount (state, newAccount) {
      state.accounts.push({ name: newAccount, income: [], expenses: [] })
    },
    selectAccount (state, account) {
      state.actualAccount = account
    }
  },
  actions: {
    addAccount (state, newAccount) {
      state.commit('addAccount', newAccount)
    },
    selectAccount (state, account) {
      state.commit('selectAccount', account)
    }
  }
})
