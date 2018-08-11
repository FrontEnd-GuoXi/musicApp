import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from './ApiService'
import NotifyService from './NotifyService'
import PlayService from './PlayService'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ApiService,
    NotifyService,
    PlayService
  }
})
