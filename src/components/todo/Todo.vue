<template>
  <div>
    <span>name: {{todo.poster}}</span>
    <span>content: {{todo.content}}</span>
    <a href="javascript:;" @click="deleteItem(todo.id)">delete</a>
  </div>  
</template>

<script>
  export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
      deleteItem (id) {
        this.$store.dispatch({
          type: 'todo/delete',
          payload: {
            id
          }
        })
      }
    }
  }
</script>

<style>

</style>
