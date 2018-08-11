import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  store: store,
  components: { App },
  template: '<App/>'
})
