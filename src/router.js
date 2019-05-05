import Vue from 'vue'
import Router from 'vue-router'
import Accounts from './views/Accounts.vue'
import AccountMainMenu from './views/AccountMainMenu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accounts',
      component: Accounts
    },
    {
      path: '/account-main-menu',
      name: 'account main menu',
      component: AccountMainMenu
    }
  ]
})
