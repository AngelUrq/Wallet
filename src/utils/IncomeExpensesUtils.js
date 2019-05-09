export default {
  name: 'IncomeExpensesUtils',
  getIncomes (account) {
    let listIncome = account.income
    let amountIncome = []

    listIncome.forEach(income => {
      amountIncome.push(income.amount)
    })

    return amountIncome.reduce((total, currentValue) => total + currentValue, 0)
  },
  getExpenses (account) {
    let listExpenses = account.expenses
    let amountExpenses = []

    listExpenses.forEach(expense => {
      amountExpenses.push(expense.amount)
    })

    return amountExpenses.reduce((total, currentValue) => total + currentValue, 0)
  },
  getMountAvailable (account) {
    return this.getIncomes(account) - this.getExpenses(account)
  }
}
