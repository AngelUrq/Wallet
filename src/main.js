import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueLocalStorage)

new Vue({
  router,
  store,
  render: function(h) {return h(App)},
}).$mount('#app')
