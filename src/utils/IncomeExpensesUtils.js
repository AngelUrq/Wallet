export default {
  name: 'IncomeExpensesUtils',
  getIncomes(account) {
    const listIncome = account.income
    const amountIncome = []

    listIncome.forEach((income) => {
      amountIncome.push(income.amount)
    })

    return amountIncome.reduce((total, currentValue) => total + parseFloat(currentValue), 0)
  },
  getExpenses(account) {
    const listExpenses = account.expenses
    const amountExpenses = []

    listExpenses.forEach((expense) => {
      amountExpenses.push(expense.amount)
    })

    return amountExpenses.reduce((total, currentValue) => total + parseFloat(currentValue), 0)
  },
  getMountAvailable(account) {
    return this.getIncomes(account) - this.getExpenses(account)
  },
}
