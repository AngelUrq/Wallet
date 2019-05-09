import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    actualAccount: { name: '', income: [], expenses: [] },
    categories: [{ name: 'IncomingTransfer', linkage: 'Incomes' },
      { name: 'TransferTo', linkage: 'Expenses' }],
  },
  mutations: {
    addAccount(state, newAccountName) {
      const names = state.accounts.map((account) => account.name)

      if (!names.includes(newAccountName)) {
        state.accounts.push({ name: newAccountName, income: [], expenses: [] })
      }
    },
    selectAccount(state, account) {
      state.actualAccount = account
    },
    addIncome(state, income) {
      state.actualAccount.income.push(income)
    },
    addExpense(state, expense) {
      state.actualAccount.expenses.push(expense)
    },
    addCategory(state, newCategory) {
      state.categories.push({ name: newCategory.category, linkage: newCategory.linkage })
    },
  },
  actions: {
    addAccount(state, newAccountName) {
      state.commit('addAccount', newAccountName)
    },
    selectAccount(state, account) {
      state.commit('selectAccount', account)
    },
    addIncome(state, income) {
      state.commit('addIncome', income)
    },
    addExpense(state, expense) {
      state.commit('addExpense', expense)
    },
    addCategory(state, newCategory) {
      state.commit('addCategory', newCategory)
    },
  },
})
