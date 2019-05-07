import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountList from '@/components/accounts/AccountList.vue'
import Vuex from 'vuex'
import store from '@/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AccountList.vue', () => {
  let wrapper
  let account

  before(function () {
    wrapper = shallowMount(AccountList, { store, localVue })

    const ACCOUNT_NAME = 'Test account'

    account = { name: ACCOUNT_NAME, income: [], expenses: [] }

    wrapper.vm.$store.dispatch('addAccount', account)
  })

  it('renders a new account', () => {
    expect(wrapper.find('.account-button').exists()).to.equal(true)
  })
  it('select an account when button clicked', () => {
    wrapper.find('.account-button').trigger('click')

    expect(wrapper.vm.$store.state.actualAccount).to.deep.equal(account)
  })
})
