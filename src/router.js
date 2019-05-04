import Vue from 'vue'
import Router from 'vue-router'
import Accounts from './views/Accounts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accounts',
      component: Accounts
    }
  ]
})
