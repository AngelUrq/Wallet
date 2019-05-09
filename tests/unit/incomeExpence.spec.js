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
  it('renders alert category complete  success', () => {
    const button = wrapper.find('#buttonCategory')
    button.trigger('click')
    expect(wrapper.contains('#categoryFail')).equals(true)
    expect(wrapper.contains('#categorySuccess')).equals(false)
  })
})
