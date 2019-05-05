import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    actualAccount: { name: '', income: [], expenses: [] }
  },
  mutations: {
    addAccount (state, newAccountName) {
      let names = state.accounts.map(account => account.name)

      if (!names.includes(newAccountName)) {
        state.accounts.push({ name: newAccountName, income: [], expenses: [] })
      }
    },
    selectAccount (state, account) {
      state.actualAccount = account
    }
  },
  actions: {
    addAccount (state, newAccountName) {
      state.commit('addAccount', newAccountName)
    },
    selectAccount (state, account) {
      state.commit('selectAccount', account)
    }
  }
})
