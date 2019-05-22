import Vuex from 'vuex'
import DateUtils from '@/utils/DateUtils.js'

const CATEGORIES = [
  { name: 'Salary', linkage: 'Incomes' },
  { name: 'Transfer', linkage: 'Incomes' },
  { name: 'Others', linkage: 'Incomes' },
  { name: 'Expenses', linkage: 'Expenses' },
  { name: 'Transfer', linkage: 'Expenses' },
  { name: 'Others', linkage: 'Expenses' },
]

const ACTUAL_DATE = '2019-05-14'

export default {
  name: 'TestUtil',
  getStore() {
    return new Vuex.Store({
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
  },
  getDefaultStore() {
    return new Vuex.Store({
      state: {
        categories: CATEGORIES,
        accounts: [
          { name: 'Test1',
            income: [{ name: 'Monthly salary', category: CATEGORIES[0].name, amount: 500, date: ACTUAL_DATE }],
            expenses: [{ name: 'Food purchase', category: CATEGORIES[3].name, amount: 30, date: ACTUAL_DATE }] },
          { name: 'Test2',
            income: [{ name: 'Monthly salary', category: CATEGORIES[0].name, amount: 600, date: ACTUAL_DATE }],
            expenses: [{ name: 'Dinner', category: CATEGORIES[3].name, amount: 50, date: ACTUAL_DATE }] },
        ],
        actualAccount: { name: 'Test1',
          income: [{ name: 'Monthly salary', category: CATEGORIES[0].name, amount: 500, date: ACTUAL_DATE }],
          expenses: [{ name: 'Food purchase', category: CATEGORIES[3].name, amount: 30, date: ACTUAL_DATE }] },
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
  },

}
