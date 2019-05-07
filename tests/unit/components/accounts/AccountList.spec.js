import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountList from '@/components/accounts/AccountList.vue'
import Vuex from 'vuex'
import store from '@/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AccountList.vue', () => {
  let wrapper

  beforeEach(function () {
    wrapper = shallowMount(AccountList, { store, localVue })
  })

  it('renders a new account', () => {
    const ACCOUNT_NAME = 'Test account'

    let account = { name: ACCOUNT_NAME, income: [], expenses: [] }

    wrapper.vm.$store.dispatch('addAccount', account)

    expect(wrapper.find('.account-button').exists()).to.equal(true)
  })
})
