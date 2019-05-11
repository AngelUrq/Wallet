import Vue from 'vue'
import Router from 'vue-router'
import Accounts from './views/Accounts.vue'
import AccountMainMenu from './views/AccountMainMenu.vue'
import Transfer from './views/Transfer.vue'
import Reports from './components/reports/Reports.vue'
import Information from './views/Information.vue'

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
      path: '/information',
      name: 'information',
      component: Information,
    },
    {
      path: '/incomes-expences-view',
      name: 'incomes-expences-view',
      component: IncomesExpencesView,
      props: true,
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports,
      props: true,
    },
  ],
})
