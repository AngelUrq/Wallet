import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountCreator from '@/components/accounts/AccountCreator.vue'
import Vuex from 'vuex'
import TestUtils from '../../../TestUtil.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AccountCreator.vue', () => {
  let wrapper

  beforeEach(function() {
    const store = TestUtils.getStore()
    wrapper = shallowMount(AccountCreator, { store, localVue })
  })

  describe('events', () => {
    it('create a new account when button clicked', () => {
      const ACCOUNT_NAME = 'Test account'

      wrapper.vm.accountName = ACCOUNT_NAME
      wrapper.find('#addAccountButton').trigger('click')

      const ACCOUNT = { name: ACCOUNT_NAME, income: [], expenses: [] }

      expect(wrapper.vm.getAccounts()).to.deep.include(ACCOUNT)
    })
  })

  describe('functions', () => {
    it('add a new account to store method', () => {
      const ACCOUNT_NAME = 'Test account'

      wrapper.vm.accountName = ACCOUNT_NAME
      wrapper.vm.add()

      const ACCOUNT = { name: ACCOUNT_NAME, income: [], expenses: [] }

      expect(wrapper.vm.getAccounts()).to.deep.include(ACCOUNT)
    })
  })
})
