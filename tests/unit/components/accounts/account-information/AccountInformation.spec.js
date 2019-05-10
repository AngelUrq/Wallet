import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountCreator from '@/components/accounts/AccountCreator.vue'
import Vuex from 'vuex'
import TestUtil from '../../../../TestUtil.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AccountInformation.vue', () => {
  let wrapper

  beforeEach(function() {
    const store = TestUtil.getDefaultStore()
    wrapper = shallowMount(AccountCreator, { store, localVue })
  })

  it('modify actual account name', () => {
    const NEW_NAME = 'My new account name'

    wrapper.vm.newAccountName = NEW_NAME
    wrapper.find('#changeNameButton').trigger('click')

    wrapper.vm.modifyName()

    const actualAccount = wrapper.vm.$store.state.actualAccount

    expect(actualAccount.name).to.equal(NEW_NAME)
  })

  it('delete empty actual account', () => {
    const accountName = wrapper.vm.$store.state.actualAccount.name
    wrapper.vm.$store.state.actualAccount.income = []
    wrapper.vm.$store.state.actualAccount.expenses = []

    wrapper.find('#deleteAccountButton').trigger('click')

    const names = wrapper.vm.$store.state.accounts.map((account) => account.name)

    expect(names).to.not.include(accountName)
  })

  it('does not delete an actual account with data', () => {
    const accountName = wrapper.vm.$store.state.actualAccount.name

    wrapper.find('#deleteAccountButton').trigger('click')

    const names = wrapper.vm.$store.state.accounts.map((account) => account.name)

    expect(names).to.include(accountName)
  })
})
