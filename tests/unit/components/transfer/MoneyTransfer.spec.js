import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MoneyTransfer from '@/components/accounts/transfer/MoneyTransfer.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MoneyTransfer.vue', () => {
  let wrapper
  let categories
  let accounts

  beforeEach(function () {
    wrapper = shallowMount(MoneyTransfer, { localVue })

    const DATE = '8/5/2019'

    wrapper.vm.$store.dispatch('addCategory', { category: 'Salary', linkage: 'Incomes' })
    wrapper.vm.$store.dispatch('addCategory', { category: 'Food', linkage: 'Expense' })
    categories = wrapper.vm.$store.categories

    accounts = [
      { name: 'Test1',
        income: [{ name: 'Monthly salary', category: categories[2], amount: 500, date: DATE, actualAccount: 'Test1' }],
        expenses: [{ name: 'Food purchase', category: categories[3], amount: 30, date: DATE, actualAccount: 'Test1' }] },
      { name: 'Test2',
        income: [{ name: 'Monthly salary', category: categories[2], amount: 600, date: DATE, actualAccount: 'Test2' }],
        expenses: [{ name: 'Dinner', category: categories[3], amount: 50, date: DATE, actualAccount: 'Test2' }] }
    ]
  })

  it('test to verify the mount available', () => {
    wrapper.vm.$store.dispatch('selectAcount', accounts[0])
    expect(wrapper.vm.getMountAvailable()).to.equal(470)
  })

  /* it('test to verify transfer', () => {

  })

  it('test to check the negative entries of a input', () => {

  }) */
})
