import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountList from '@/components/accounts/AccountList.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import TestUtils from '../../../TestUtil.js'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('AccountList.vue', () => {
  let wrapper
  let account

  describe('render', () => {
    beforeEach(function() {
      const store = TestUtils.getStore()
      wrapper = shallowMount(AccountList, { store, localVue })

      const ACCOUNT_NAME = 'Test account'

      account = { name: ACCOUNT_NAME, income: [], expenses: [] }

      wrapper.vm.$store.dispatch('addAccount', account)
    })

    it('show a button for a new account', () => {
      expect(wrapper.find('.account-button').exists()).to.equal(true)
    })

    it('show different colors for each account', () => {
      for (let i = 0; i < 4; i++) {
        wrapper.vm.$store.dispatch('addAccount', { name: 'Color account - ' + i, income: [], expenses: [] })
      }

      const LIST_OF_CLASSES = ['.btn-success', '.btn-primary', '.btn-danger', '.btn-warning', '.btn-danger']

      for (const BUTTON_CLASS of LIST_OF_CLASSES) {
        expect(wrapper.find(BUTTON_CLASS).exists()).to.equal(true)
      }
    })

    it('shows a general account', () => {
      expect(wrapper.find('#general').exists()).to.equal(true)
    })
  })

  describe('events', () => {
    beforeEach(function() {
      const store = TestUtils.getStore()
      wrapper = shallowMount(AccountList, { store, localVue })

      const ACCOUNT_NAME = 'Test account'

      wrapper.vm.$store.dispatch('addAccount', ACCOUNT_NAME)
    })

    it('when button clicked select an account', () => {
      wrapper.find('.account-button').trigger('click')

      expect(wrapper.vm.$store.state.actualAccount).to.deep.equal(account)
    })
  })

  describe('functions', () => {
    const ACCOUNT_NAME = 'Test account'

    beforeEach(function() {
      const store = TestUtils.getStore()
      wrapper = shallowMount(AccountList, { store, localVue })

      wrapper.vm.$store.dispatch('addAccount', ACCOUNT_NAME)
    })

    it('select an account method', () => {
      wrapper.vm.chooseAccount({ name: ACCOUNT_NAME, income: [], expenses: [] })

      expect(wrapper.vm.$store.state.actualAccount).to.deep.equal(account)
    })
  })
})
