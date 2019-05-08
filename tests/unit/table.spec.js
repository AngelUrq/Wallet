import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {
  it('has the correct number of rows', () => {
    const data = [
      {
        filter: '24/08/2018',
        transactions: [
          {
            category: 'Food',
            amount: 1234
          },
          {
            category: 'Entertainment',
            amount: 132
          }
        ]
      },
      {
        filter: '23/08/2018',
        transactions: [
          {
            category: 'Food',
            amount: 14
          },
          {
            category: 'Entertainment',
            amount: 2000
          }
        ]
      }
    ]
    const wrapper = shallowMount(Table, {
      propsData: {
        dataArray: data
      }
    })
    const groupByColumns = wrapper.findAll('.groupedby')
    var groupByColumnsText = groupByColumns.reduce((prev, curr) => prev + curr.text())
    expect(groupByColumnsText).to.equal('24/08/201823/08/2018')
  })
})
