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
  it('renders alert category complete  fail', () => {
    const button = wrapper.find('#buttonCategory')
    button.trigger('click')
    expect(wrapper.contains('#categoryFail')).equals(true)
    expect(wrapper.contains('#categorySuccess')).equals(false)
  })
  it('renders alert category complete  success', () => {
    wrapper.vm.newCategory = 'new Category'
    const button = wrapper.find('#buttonCategory')
    button.trigger('click')
    expect(wrapper.contains('#categoryFail')).equals(false)
    expect(wrapper.contains('#categorySuccess')).equals(true)
  })
  it('renders alert transaction complete  success', () => {
    wrapper.vm.setDefaultValues('addIncome', 'Incomes')
    wrapper.vm.name = 'newi Category'
    wrapper.vm.amount = 10
    wrapper.vm.category = 'testcategory'
    wrapper.vm.date = '10/10/2019'
    const button = wrapper.find('#buttonTransaction')
    button.trigger('click')
    expect(wrapper.contains('#transactionFail')).equals(false)
    expect(wrapper.contains('#transactionSuccess')).equals(true)
  })
  it('renders alert transaction complete  fail', () => {
    const button = wrapper.find('#buttonTransaction')
    button.trigger('click')
    expect(wrapper.contains('#transactionFail')).equals(true)
    expect(wrapper.contains('#transactionSuccess')).equals(false)
  })
})
/* const ACCOUNT_NAME = 'Test account'

    let account = { name: ACCOUNT_NAME, income: [], expenses: [] }
    wrapper.vm.$store.dispatch('addAccount', account)
    wrapper.vm.setDefaultValues('addIncome', 'Incomes')
    wrapper.vm.name = 'newi Category'
    wrapper.vm.amount = 10
    wrapper.vm.category = 'testcategory'
    wrapper.vm.date = '10/10/2019'*/
