import Vuex from 'vuex'

const categories = [
  { name: 'IncomingTransfer', linkage: 'Income' },
  { name: 'TransferTo', linkage: 'Expenses' },
  { name: 'Salary', linkage: 'Income' },
  { name: 'Food', linkage: 'Expenses' },
]

export default {
  name: 'TestUtil',
  getDefaultStore() {
    return new Vuex.Store({
      state: {
        categories: categories,
        accounts: [
          { name: 'Test1',
            income: [{ name: 'Monthly salary', category: { name: 'Salary', linkage: 'Income' }, amount: 500, date: '8/5/2019' }],
            expenses: [{ name: 'Food purchase', category: { name: 'Food', linkage: 'Expenses' }, amount: 30, date: '8/5/2019' }] },
          { name: 'Test2',
            income: [{ name: 'Monthly salary', category: { name: 'Salary', linkage: 'Income' }, amount: 600, date: '8/5/2019' }],
            expenses: [{ name: 'Dinner', category: { name: 'Food', linkage: 'Expenses' }, amount: 50, date: '8/5/2019' }] },
        ],
        actualAccount: { name: 'Test1',
          income: [{ name: 'Monthly salary', category: { name: 'Salary', linkage: 'Income' }, amount: 500, date: '8/5/2019' }],
          expenses: [{ name: 'Food purchase', category: { name: 'Food', linkage: 'Expenses' }, amount: 30, date: '8/5/2019' }] },
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
