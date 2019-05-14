import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MoneyTransfer from '@/components/accounts/transfer/MoneyTransfer.vue'
import Vuex from 'vuex'
import TestUtil from '../../../TestUtil.js'
import IncomeExpensesUtils from '../../../../src/utils/IncomeExpensesUtils.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MoneyTransfer.vue', () => {
  let wrapper

  beforeEach(function() {
    const store = TestUtil.getDefaultStore()
    wrapper = shallowMount(MoneyTransfer, { store, localVue })
  })

  it('test to verify the mount available', () => {
    expect(wrapper.vm.mountAvailable).to.equal(470)
  })

  it('test to verify transfer', () => {
    const actualAccountAvailableMount = wrapper.vm.mountAvailable
    const MOUNT_TRANSACTION = 100
    wrapper.vm.mountTransaction = MOUNT_TRANSACTION

    wrapper.vm.nameDestinationAccount = wrapper.vm.$store.state.accounts[1].name
    const destinationAccount = wrapper.vm.getAccountByName(wrapper.vm.nameDestinationAccount)
    const destinationAccountAvailableMount = IncomeExpensesUtils.getMountAvailable(destinationAccount)

    wrapper.vm.transfer()

    expect(wrapper.vm.mountAvailable).to.equal(actualAccountAvailableMount - MOUNT_TRANSACTION)
    expect(IncomeExpensesUtils.getMountAvailable(destinationAccount)).to.equal(destinationAccountAvailableMount + MOUNT_TRANSACTION)
  })

  it('test to check the negative entries of a input', () => {
    wrapper.vm.mountTransaction = -15
    wrapper.find('#btn-transfer').trigger('click')

    expect(wrapper.find('#msg-error').exists()).to.equal(true)
  })
})
