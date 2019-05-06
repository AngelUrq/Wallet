import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    actualAccount: { name: '', income: [], expenses: [] },
    categories: [
      { name: 'Incomes', linkage: 'Incomes' },
      { name: 'Expences', linkage: 'Expences' }
    ]
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
    },
    addIncome (state, income) {
      state.accounts.forEach(account => {
        if (income.actualAccount === account.name) {
          account.income.push({ name: income.name, category: income.category, amount: income.amount, date: income.date })
        }
      })
    },
    addExpence (state, expence) {
      state.accounts.forEach(account => {
        if (expence.actualAccount === account.name) {
          account.expenses.push({ name: expence.name, category: expence.category, amount: expence.amount, date: expence.date })
        }
      })
    },
    addCategory (state, newCategory) {
      state.categories.push({ name: newCategory.category, linkage: newCategory.linkage })
    }
  },
  actions: {
    addAccount (state, newAccountName) {
      state.commit('addAccount', newAccountName)
    },
    selectAccount (state, account) {
      state.commit('selectAccount', account)
    },
    addIncome (state, income) {
      state.commit('addIncome', income)
    },
    addExpence (state, expence) {
      state.commit('addIncome', expence)
    },
    addCategory (state, newCategory) {
      state.commit('addCategory', newCategory)
    }
  }
})
