import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountCreator from '@/components/accounts/AccountCreator.vue'
import Vuex from 'vuex'
import store from '@/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AccountCreator.vue', () => {
  let wrapper

  beforeEach(function () {
    wrapper = shallowMount(AccountCreator, { store, localVue })
  })

  it('add a new account to store', () => {
    const ACCOUNT_NAME = 'Test account'

    wrapper.vm.accountName = ACCOUNT_NAME
    wrapper.find('#addAccountButton').trigger('click')

    let account = { name: ACCOUNT_NAME, income: [], expenses: [] }

    expect(wrapper.vm.getAccounts()).to.deep.include(account)
  })
})
