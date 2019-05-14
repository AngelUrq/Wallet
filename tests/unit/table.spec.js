import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Table from '@/components/reports/Table.vue'

describe('Table.vue by date', () => {
  let wrapper
  const data = {
    name: 'TestAccount',
    income: [
      {
        date: '24/08/2018',
        category: 'Salary',
        name: 'February',
        amount: 1000,
        actualAccount: 'TestAccount',
      },
    ],
    expenses: [
      {
        date: '24/08/2018',
        category: 'Food',
        name: 'Cookies',
        amount: 12.34,
        actualAccount: 'TestAccount',
      },
      {
        date: '24/08/2018',
        category: 'Food',
        name: 'Milk',
        amount: 15,
        actualAccount: 'TestAccount',
      },
    ],
  }

  const groupBy = 'date'
  const columnsToShow = ['category', 'name', 'amount']

  beforeEach(function() {
    wrapper = shallowMount(Table, {
      propsData: {
        accountData: data,
        groupBy: groupBy,
        columns: columnsToShow,
      },
    })
  })

  it('displays grouped by value only once', () => {
    const groupedByColumns = wrapper.findAll('.groupedby')
    const groupByColumnsText = groupedByColumns.wrappers.reduce((prev, curr) => prev + curr.text(), '')
    expect(groupByColumnsText).to.equal('24/08/2018')
  })

  it('displays the correct number of rows', () => {
    const rows = wrapper.findAll('tr')
    const expectedNumberOfRows = data.income.length + data.expenses.length + 1
    expect(rows.length).to.equal(expectedNumberOfRows)
  })

  it('shows the correct number of columns', () => {
    const tableHeaders = wrapper.findAll('th')
    const expectedNumberOfColumns = columnsToShow.length + 1
    expect(tableHeaders.length).to.equal(expectedNumberOfColumns)
  })

  it('shows negative values in red', () => {
    const columns = wrapper.findAll('td')
    const negativeColumns = columns.filter((col) => !isNaN(col.text()) && Number(col.text()) < 0)
    expect(negativeColumns.is('.red')).to.equal(true)
  })

  it('displays expenses as negative values', () => {
    const rows = wrapper.findAll('tr')
    const filteredRows = rows.filter((row) => row.text().includes(data.expenses[0].name))
    expect(filteredRows.at(0).text()).to.contain(-data.expenses[0].amount)
  })
})


describe('Table.vue by category', () => {
  let wrapper
  const data = {
    name: 'TestAccount',
    income: [
      {
        date: '24/08/2018',
        category: 'Salary',
        name: 'February',
        amount: 1000,
        actualAccount: 'TestAccount',
      },
    ],
    expenses: [
      {
        date: '24/08/2018',
        category: 'Food',
        name: 'Cookies',
        amount: 12.34,
        actualAccount: 'TestAccount',
      },
      {
        date: '24/08/2018',
        category: 'Food',
        name: 'Milk',
        amount: 15,
        actualAccount: 'TestAccount',
      },
    ],
  }

  const groupBy = 'category'
  const columnsToShow = ['date', 'name', 'amount']

  beforeEach(function() {
    wrapper = shallowMount(Table, {
      propsData: {
        accountData: data,
        groupBy: groupBy,
        columns: columnsToShow,
      },
    })
  })

  it('displays grouped by value only once', () => {
    const groupedByColumns = wrapper.findAll('.groupedby')
    const groupByColumnsText = groupedByColumns.wrappers.reduce((prev, curr) => prev + curr.text(), '')
    expect(groupByColumnsText).to.equal('SalaryFood')
  })

  it('capitalizes word correclty', () => {
    const string = 'lowercase'
    expect(wrapper.vm.$options.filters.pascalCase(string)).to.eq('Lowercase')
  })
})
