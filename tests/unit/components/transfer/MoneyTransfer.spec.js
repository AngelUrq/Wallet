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

  describe('functions', () => {
    beforeEach(function() {
      const store = TestUtil.getDefaultStore()
      wrapper = shallowMount(MoneyTransfer, { store })
    })

    it('verify the mount available', () => {
      expect(wrapper.vm.mountAvailable).to.equal(470)
    })

    it('verify transfer', () => {
      const ACTUAL_ACCOUNT_AVAILABLE_MOUNT = wrapper.vm.mountAvailable
      const MOUNT_TRANSACTION = 100
      wrapper.vm.mountTransaction = MOUNT_TRANSACTION

      wrapper.vm.nameDestinationAccount = wrapper.vm.$store.state.accounts[1].name
      const DESTINATION_ACCOUNT = wrapper.vm.getAccountByName(wrapper.vm.nameDestinationAccount)
      const DESTINATION_ACCOUNT_AVAILABLE_MOUNT = IncomeExpensesUtils.getMountAvailable(DESTINATION_ACCOUNT)

      wrapper.vm.transfer()

      expect(wrapper.vm.mountAvailable).to.equal(ACTUAL_ACCOUNT_AVAILABLE_MOUNT - MOUNT_TRANSACTION)
      expect(IncomeExpensesUtils.getMountAvailable(DESTINATION_ACCOUNT)).to.equal(DESTINATION_ACCOUNT_AVAILABLE_MOUNT + MOUNT_TRANSACTION)
    })

    it('verify if the destination account selected by name exists', () => {
      const NAME_ACCOUNT_DESTINATION = 'Test2'
      const DESTINATION_ACCOUNT = wrapper.vm.getAccountByName(NAME_ACCOUNT_DESTINATION)
      expect(wrapper.vm.$store.state.accounts).to.include(DESTINATION_ACCOUNT)
    })

    it('check if there is sufficient available amount for the transaction', () => {
      const AMOUNT = 470
      const DATE = '2019-05-14'
      const EXPENSE = { name: 'Buy food', category: 'Others', amount: AMOUNT, date: DATE }
      wrapper.vm.$store.dispatch('addExpense', EXPENSE)
      wrapper.vm.updateMountAvailable()

      expect(wrapper.vm.checkMountAvailable()).to.equal(false)
    })

    it('verify that the destination account is not empty', () => {
      const LIST_DESTINATION_ACCOUNTS = wrapper.vm.accounts
      const SELECTED_ACCOUNT = LIST_DESTINATION_ACCOUNTS[0].name
      wrapper.vm.nameDestinationAccount = SELECTED_ACCOUNT

      expect(wrapper.vm.checkSelectedDestinationAccount()).to.equal(true)
    })

    it('verify if the form data is correct', () => {
      wrapper.vm.mountAvailable = 400
      wrapper.vm.mountTransaction = 500
      wrapper.vm.nameDestinationAccount = 'Test2'
      expect(wrapper.vm.isFormDataCorrect()).to.equal(false)
    })
  })

  describe('render', () => {
    beforeEach(function() {
      const store = TestUtil.getDefaultStore()
      wrapper = shallowMount(MoneyTransfer, { store, localVue })
    })

    it('render main form fields', () => {
      expect(wrapper.find('#budgetAvailable').exists()).to.equal(true)
      expect(wrapper.find('#destinations-accounts').exists()).to.equal(true)
      expect(wrapper.find('#amount').exists()).to.equal(true)
      expect(wrapper.find('#btn-transfer').exists()).to.equal(true)
    })
  })

  describe('events', () => {
    beforeEach(function() {
      const store = TestUtil.getDefaultStore()
      wrapper = shallowMount(MoneyTransfer, { store, localVue })
    })

    it('test to check the negative entries of a input', () => {
      const LIST_DESTINATION_ACCOUNTS = wrapper.vm.accounts
      const SELECTED_ACCOUNT = LIST_DESTINATION_ACCOUNTS[0].name
      wrapper.vm.nameDestinationAccount = SELECTED_ACCOUNT
      wrapper.vm.mountTransaction = -15
      wrapper.find('#btn-transfer').trigger('click')

      expect(wrapper.find('#msg-error').exists()).to.equal(true)
    })
  })
})
