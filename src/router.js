import Vue from 'vue'
import Router from 'vue-router'
import Accounts from './views/Accounts.vue'
import AccountMainMenu from './views/AccountMainMenu.vue'
import Transfer from './views/Transfer.vue'
import AccountInformation from './views/AccountInformation.vue'

import IncomesExpencesView from './views/IncomesExpencesView.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accounts',
      component: Accounts,
    },
    {
      path: '/account-main-menu',
      name: 'account main menu',
      component: AccountMainMenu,
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer,
    },
    {
      path: '/incomes-expences-view',
      name: 'incomes-expences-view',
      component: IncomesExpencesView,
      props: true,
    },
    {
      path: '/account-information',
      name: 'account-information',
      component: AccountInformation,
    },
  ],
})
