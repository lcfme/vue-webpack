<template>
  <div>
    <input v-model="poster" />
    <input v-model="content" />
    <button @click="submit">submit</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      poster: '',
      content: ''
    }
  },
  methods: {
    submit () {
      const {poster, content} = this
      this.poster = ''
      this.content = ''
      this.$store.dispatch({
        type: 'todo/add',
        payload: {
          poster,
          content
        }
      })
    }
  }
}
</script>

<style>

</style>
