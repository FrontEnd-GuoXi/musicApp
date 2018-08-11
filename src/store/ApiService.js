import Vue from 'vue'
import API from '../config/api.js'

/* eslint-disable */
function apiFactory(api) {
  return (id = null) => Vue.http.jsonp(
    api.url,
    {
      params: api.params(id),
      jsonp: api.jsonp
    }
  )
}

export default {
  actions: {
    search({}, key){
      return apiFactory(API.search)(key)
    },
    getRecommands({}){
      return apiFactory(API.first_page_data)()
    },
    getHotKey({}){
      return apiFactory(API.hotkey)()
    }
  }
}
