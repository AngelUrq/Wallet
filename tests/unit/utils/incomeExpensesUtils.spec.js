import { expect } from 'chai'
import IncomeExpensesUtils from '@/utils/IncomeExpensesUtils.js'

describe('IncomeExpensesUtils.js', () => {
  const DATE = '8/5/2019'
  let account = { name: 'Test1',
    income: [{ name: 'Monthly salary', category: { name: 'Salary', linkage: 'Income' }, amount: 500, date: DATE },
      { name: 'Monthly savings', category: { name: 'Saving', linkage: 'Income' }, amount: 300, date: DATE }],
    expenses: [{ name: 'Food purchase', category: { name: 'Food', linkage: 'Expenses' }, amount: 30, date: DATE },
      { name: 'Buy clothes', category: { name: 'Clothes', linkage: 'Expenses' }, amount: 90, date: DATE }] }

  it('test to check income total', () => {
    expect(IncomeExpensesUtils.getIncomes(account)).to.equal(800)
  })

  it('test to check expenses total', () => {
    expect(IncomeExpensesUtils.getExpenses(account)).to.equal(120)
  })

  it('test to check mount available', () => {
    expect(IncomeExpensesUtils.getMountAvailable(account)).to.equal(680)
  })
})
