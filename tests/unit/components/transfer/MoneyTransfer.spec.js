import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MoneyTransfer from '@/components/accounts/transfer/MoneyTransfer.vue'
import Vuex from 'vuex'
import TestUtil from '../../../TestUtil.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MoneyTransfer.vue', () => {
  let wrapper

  beforeEach(function () {
    let store = TestUtil.getDefaultStore()
    wrapper = shallowMount(MoneyTransfer, { store, localVue })
  })

  it('test to verify the mount available', () => {
    expect(wrapper.vm.getMountAvailable()).to.equal(470)
  })

  it('test to verify transfer', () => {
    let actualAccountAvailableMount = wrapper.vm.getMountAvailable()
    let mount = 100

    let destinationAccount = wrapper.vm.getDestinationAccount('Test 2')
    let destinationAccountAvailableMount = destinationAccount.getMountAvailable()

    wrapper.vm.$store.state.transfer()

    expect(wrapper.vm.$store.state.actualAccount.getMountAvailable()).to.equal(actualAccountAvailableMount - mount)
    expect(wrapper.vm.$store.state.destinationAccount.getMountAvailable()).to.equal(destinationAccountAvailableMount + mount)
  })

  /* it('test to check the negative entries of a input', () => {

  }) */
})
