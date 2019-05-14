import Vuex from 'vuex'

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
