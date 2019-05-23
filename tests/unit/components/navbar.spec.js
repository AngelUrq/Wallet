import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

suite('Navbar', () => {
  let wrapper

  setup(function() {
    wrapper = shallowMount(Navbar, {
      mocks: {
        $store: {
          state: {
            actualAccount: { name: 'General' },
          },
        },
      },
    })
  })

  test('it does not show settings link if account is general', () => {
    expect(wrapper.find('#settings').exists()).to.equal(false)
  })

  test('home url is set to root is account is general', () => {
    expect(wrapper.vm.homeUrl).to.equal('/')
  })
})
