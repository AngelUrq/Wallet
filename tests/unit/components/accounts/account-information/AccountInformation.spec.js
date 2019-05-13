import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountInformation from '@/components/accounts/account-information/AccountInformation.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import TestUtil from '../../../../TestUtil.js'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('AccountInformation.vue', () => {
  let wrapper

  beforeEach(function() {
    const store = TestUtil.getDefaultStore()
    wrapper = shallowMount(AccountInformation, { store, localVue })
  })

  it('modify actual account name', () => {
    const NEW_NAME = 'My new account name'

    wrapper.vm.newAccountName = NEW_NAME
    wrapper.find('#changeNameButton').trigger('click')

    wrapper.vm.modifyName()

    const ACTUAL_ACCOUNT = wrapper.vm.$store.state.actualAccount

    expect(ACTUAL_ACCOUNT.name).to.equal(NEW_NAME)
  })

  it('delete empty actual account', () => {
    const ACTUAL_ACCOUNT = wrapper.vm.$store.state.actualAccount.name
    wrapper.vm.$store.state.actualAccount.income = []
    wrapper.vm.$store.state.actualAccount.expenses = []

    wrapper.find('#deleteAccountButton').trigger('click')

    const NAMES = wrapper.vm.$store.state.accounts.map((account) => account.name)

    expect(NAMES).to.not.include(ACTUAL_ACCOUNT)
  })

  it('does not delete an actual account with data', () => {
    const ACCOUNT_NAME = wrapper.vm.$store.state.actualAccount.name

    wrapper.find('#deleteAccountButton').trigger('click')

    const NAMES = wrapper.vm.$store.state.accounts.map((account) => account.name)

    expect(NAMES).to.include(ACCOUNT_NAME)
  })
})
