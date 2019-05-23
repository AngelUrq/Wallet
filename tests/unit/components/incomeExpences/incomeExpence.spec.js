import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import IncomesExpences from '@/components/IncomesExpences.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from '@/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('IncomesExpences.vue', () => {
  let wrapper
  beforeEach(function() {
    wrapper = shallowMount(IncomesExpences, { store, localVue })
  })
  describe('events', () => {
    it('show alert category complete  success', () => {
      wrapper.vm.newCategory = 'new Category'
      const button = wrapper.find('#buttonCategory')
      button.trigger('click')
      expect(wrapper.contains('#categoryFail')).equals(false)
      expect(wrapper.contains('#categorySuccess')).equals(true)
    })
    it('show alert income complete  success with correct transaction', () => {
      wrapper.setProps({ transfer: 'addIncome' })
      wrapper.setProps({ linkage: 'Incomes' })
      wrapper.vm.name = 'newi Category'
      wrapper.vm.amount = 10
      wrapper.vm.category = 'testcategory'
      wrapper.vm.date = '10/10/2019'
      const button = wrapper.find('#buttonTransaction')
      button.trigger('click')
      expect(wrapper.contains('#transactionFail')).equals(false)
      expect(wrapper.contains('#transactionSuccess')).equals(true)
    })
    it('show alert transaction complete  fail with insufitient values', () => {
      const button = wrapper.find('#buttonTransaction')
      button.trigger('click')
      expect(wrapper.contains('#transactionFail')).equals(true)
      expect(wrapper.contains('#transactionSuccess')).equals(false)
    })
    it('repeat name from category', () => {
      wrapper.vm.newCategory = 'new Category'
      const button = wrapper.find('#buttonCategory')
      button.trigger('click')
      button.trigger('click')
      expect(wrapper.contains('#categoryFail')).equals(true)
      expect(wrapper.contains('#categorySuccess')).equals(false)
    })
    it('add expense with enough amount', () => {
      wrapper.setProps({ transfer: 'addIncome' })
      wrapper.setProps({ linkage: 'Incomes' })
      wrapper.vm.name = 'newi Category'
      wrapper.vm.amount = 10
      wrapper.vm.category = 'testcategory'
      wrapper.vm.date = '10/10/2019'
      let button = wrapper.find('#buttonTransaction')
      button.trigger('click')
      wrapper.setProps({ transfer: 'addExpense' })
      wrapper.setProps({ linkage: 'Expenses' })
      wrapper.vm.name = 'newi Category'
      wrapper.vm.amount = 10
      wrapper.vm.category = 'testcategory'
      wrapper.vm.date = '10/10/2019'
      button = wrapper.find('#buttonTransaction')
      button.trigger('click')
      expect(wrapper.contains('#transactionFail')).equals(false)
      expect(wrapper.contains('#transactionSuccess')).equals(true)
    })
    it('show alert modification complete  success with correct transaction at incomes ', () => {
      wrapper.setProps({ transfer: 'addIncome' })
      wrapper.setProps({ linkage: 'Incomes' })
      wrapper.vm.actualName = 'newi Category'
      wrapper.vm.newName = 'new name'
      wrapper.vm.newTransCategory = 'testcategory'
      wrapper.vm.newDate = '10/10/2019'
      wrapper.vm.newDate = 1000
      const button = wrapper.find('#buttonChange')
      button.trigger('click')
      expect(wrapper.contains('#changeFail')).equals(false)
      expect(wrapper.contains('#changeSuccess')).equals(true)
    })
  })
  describe('Render', () => {
    it('render form register transaction', () => {
      expect(wrapper.find('#name').exists()).to.equal(true)
      expect(wrapper.find('#category').exists()).to.equal(true)
      expect(wrapper.find('#amount').exists()).to.equal(true)
      expect(wrapper.find('#dateSpace').exists()).to.equal(true)
      expect(wrapper.find('#buttonTransaction').exists()).to.equal(true)
    })
    it('render modify transactions', () => {
      expect(wrapper.find('#old-name').exists()).to.equal(true)
      expect(wrapper.find('#new-name').exists()).to.equal(true)
      expect(wrapper.find('#new-category').exists()).to.equal(true)
      expect(wrapper.find('#new-date').exists()).to.equal(true)
      expect(wrapper.find('#new-amount').exists()).to.equal(true)
      expect(wrapper.find('#buttonChange').exists()).to.equal(true)
    })
    it('render form register cateogoty', () => {
      expect(wrapper.find('#categoryRegister').exists()).to.equal(true)
      expect(wrapper.find('#buttonCategory').exists()).to.equal(true)
    })
  })
  describe('methods', () => {
    it('isform complete false  category', () => {
      expect(wrapper.vm.isModificationComplete()).to.equal(false)
    })
    it('isform complete false  category', () => {
      expect(wrapper.vm.isCategoryTransactionComplete()).to.equal(false)
    })
  })
})
