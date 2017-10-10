<template>
<div>
  <div>
    <TodoInput />
  </div>
  <div v-for="todo in todoList">
    <Todo :todo="todo" />
  </div>
  <a @click="aa">aaa</a>
</div>
</template>

<script>
import TodoInput from './TodoInput'
import Todo from './Todo'
export default {
  name: 'TodoList',
  components: {
    TodoInput,
    Todo
  },
  computed: {
    todoList () {
      return this.$store.state.todo.todoList
    }
  },
  mounted () {
    this.fetchAll()
  },
  methods: {
    fetchAll () {
      this.$store.dispatch({
        type: 'todo/all'
      })
    },
    aa () {
      console.log(this.todoList)
    }
  }
}
</script>

<style>

</style>
