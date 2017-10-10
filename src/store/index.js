import Vuex from 'vuex'
import Vue from 'vue'
import {todo} from './modules'
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    todo: todo
  }
})
export default store
