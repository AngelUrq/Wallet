import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Table from '@/components/reports/Table.vue'

suite('Table.vue by date', () => {
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

  setup(function() {
    wrapper = shallowMount(Table, {
      propsData: {
        accountData: data,
        groupBy: groupBy,
        columns: columnsToShow,
      },
    })
  })

  test('displays grouped by value only once', () => {
    const groupedByColumns = wrapper.findAll('.groupedby')
    const groupByColumnsText = groupedByColumns.wrappers.reduce((prev, curr) => prev + curr.text(), '')
    expect(groupByColumnsText).to.equal('24/08/2018')
  })

  test('displays the correct number of rows', () => {
    const rows = wrapper.findAll('tr')
    const expectedNumberOfRows = data.income.length + data.expenses.length + 1
    expect(rows.length).to.equal(expectedNumberOfRows)
  })

  test('shows the correct number of columns', () => {
    const tableHeaders = wrapper.findAll('th')
    const expectedNumberOfColumns = columnsToShow.length + 1
    expect(tableHeaders.length).to.equal(expectedNumberOfColumns)
  })

  test('shows negative values in red', () => {
    const columns = wrapper.findAll('td')
    const negativeColumns = columns.filter((col) => !isNaN(col.text()) && Number(col.text()) < 0)
    expect(negativeColumns.is('.red')).to.equal(true)
  })

  test('displays expenses as negative values', () => {
    const rows = wrapper.findAll('tr')
    const filteredRows = rows.filter((row) => row.text().includes(data.expenses[0].name))
    expect(filteredRows.at(0).text()).to.contain(-data.expenses[0].amount)
  })

  test('generateTableDataArrayStructure method generates the correct structure', () => {
    expect(wrapper.vm.tableDataArray.length).to.equal(1)
    expect(wrapper.vm.tableDataArray[0].transactions.length).to.equal(3)
  })
})


suite('Table.vue by category', () => {
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

  setup(function() {
    wrapper = shallowMount(Table, {
      propsData: {
        accountData: data,
        groupBy: groupBy,
        columns: columnsToShow,
      },
    })
  })

  test('displays grouped by value only once', () => {
    const groupedByColumns = wrapper.findAll('.groupedby')
    const groupByColumnsText = groupedByColumns.wrappers.reduce((prev, curr) => prev + curr.text(), '')
    expect(groupByColumnsText).to.equal('SalaryFood')
  })

  test('capitalizes word correclty', () => {
    const string = 'lowercase'
    expect(wrapper.vm.$options.filters.pascalCase(string)).to.eq('Lowercase')
  })

  test('generateTableDataArrayStructure method generates the correct structure', () => {
    expect(wrapper.vm.tableDataArray.length).to.equal(2)
    expect(wrapper.vm.tableDataArray[0].transactions.length).to.equal(1)
    expect(wrapper.vm.tableDataArray[1].transactions.length).to.equal(2)
  })
})
