import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    actualAccount: { name: '', income: [], expenses: [] },
    categories: [
      { name: 'IncomingTransfer', linkage: 'Incomes' },
      { name: 'TransferTo', linkage: 'Expenses' }
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
      state.actualAccount.income.push(income)
    },
    addExpence (state, expense) {
      state.actualAccount.expenses.push(expense)
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
  },
  getters: {
    accountDataByDate: (state) => (startDate, endDate) => {
      var filterdIncomes = state.actualAccount.income.filter(income => income.date >= startDate && income.date <= endDate)
      var filterdExpenses = state.actualAccount.expenses.filter(expense => expense.date >= startDate && expense.date <= endDate)
      return { name: state.actualAccount.name, income: filterdIncomes, expenses: filterdExpenses }
    }
  }
})
