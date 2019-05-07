import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountList from '@/components/accounts/AccountList.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from '@/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('AccountList.vue', () => {
  let wrapper
  let account

  before(function () {
    wrapper = shallowMount(AccountList, { store, localVue })

    const ACCOUNT_NAME = 'Test account'

    account = { name: ACCOUNT_NAME, income: [], expenses: [] }

    wrapper.vm.$store.dispatch('addAccount', account)
  })

  it('renders a button for a new account', () => {
    expect(wrapper.find('.account-button').exists()).to.equal(true)
  })
  it('select an account when button clicked', () => {
    wrapper.find('.account-button').trigger('click')

    expect(wrapper.vm.$store.state.actualAccount).to.deep.equal(account)
  })
  it('render different colors for each account', () => {
    for (let i = 0; i < 4; i++) {
      wrapper.vm.$store.dispatch('addAccount', { name: 'Color account - ' + i, income: [], expenses: [] })
    }

    expect(wrapper.find('.btn-success').exists()).to.equal(true)
    expect(wrapper.find('.btn-primary').exists()).to.equal(true)
    expect(wrapper.find('.btn-danger').exists()).to.equal(true)
    expect(wrapper.find('.btn-warning').exists()).to.equal(true)
    expect(wrapper.find('.btn-danger').exists()).to.equal(true)
  })
})
