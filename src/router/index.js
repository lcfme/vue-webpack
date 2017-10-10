import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/todo/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TodoList
    }
  ]
})
