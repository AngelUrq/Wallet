import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {
  var wrapper
  const data = {
    name: 'TestAccount',
    incomes: [
      {
        date: '24/02/2019',
        category: 'Salary',
        name: 'Frebruary',
        amount: 1000,
        actualAccount: 'TestAccount'
      }
    ],
    expenses: [
      {
        date: '24/02/2019',
        category: 'Food',
        name: 'Cookies',
        amount: 12.34,
        actualAccount: 'TestAccount'
      },
      {
        date: '24/02/2019',
        category: 'Food',
        name: 'Milk',
        amount: 15,
        actualAccount: 'TestAccount'
      }
    ]
  }

  const groupBy = 'date'
  const columns = ['category', 'name', 'amount']

  beforeEach(function () {
    wrapper = shallowMount(Table, {
      propsData: {
        accountData: data,
        groupBy: groupBy,
        columns: columns
      }
    })
  })

  it('displays grouped by value only once', () => {
    const groupedByColumns = wrapper.findAll('.groupedby')
    var groupByColumnsText = groupedByColumns.reduce((prev, curr) => prev + curr.text())
    expect(groupByColumnsText).to.equal('24/08/2018')
  })

  it('displays the correct number of rows', () => {
    var rows = wrapper.findAll('tr')
    var expectedNumberOfRows = data.incomes.length + data.expenses.length
    expect(rows.length).to.equal(expectedNumberOfRows)
  })
})
