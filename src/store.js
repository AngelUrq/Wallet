import Vue from 'vue'
import Vuex from 'vuex'
import DateUtils from '@/utils/DateUtils.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    actualAccount: { name: '', income: [], expenses: [] },
    categories: [
      { name: 'Salary', linkage: 'Incomes' },
      { name: 'Transfer', linkage: 'Incomes' },
      { name: 'Others', linkage: 'Incomes' },
      { name: 'Expenses', linkage: 'Expenses' },
      { name: 'Transfer', linkage: 'Expenses' },
      { name: 'Others', linkage: 'Expenses' },
    ],
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
    updateAccount(state, currentAccount) {
      state.accounts.forEach((account) => {
        if (JSON.stringify(account.name) === JSON.stringify(JSON.parse(currentAccount).name)) {
          account.income = JSON.parse(currentAccount).income
          account.expenses = JSON.parse(currentAccount).expenses
        }
      })
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
    updateAccount(state, currentAccount) {
      state.commit('updateAccount', currentAccount)
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
  getters: {
    accountDataByDate: (state) => (startDate, endDate) => {
      const filterdIncomes = state.actualAccount.income.filter((income) => DateUtils.isDateWithinRange(income.date, startDate, endDate))
      const filterdExpenses = state.actualAccount.expenses.filter((expense) => DateUtils.isDateWithinRange(expense.date, startDate, endDate))
      return { name: state.actualAccount.name, income: filterdIncomes, expenses: filterdExpenses }
    },
  },
})
