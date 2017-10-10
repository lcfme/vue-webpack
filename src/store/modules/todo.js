import axios from 'axios'
export const todo = {
  state: {
    todoList: []
  },
  mutations: {
    add (state, {newPost}) {
      state.todoList = [newPost, ...state.todoList]
    },
    all (state, {allTodos}) {
      state.todoList = [...allTodos]
    },
    delete (state, {id}) {
      state.todoList = state.todoList.filter((item) => {
        return item.id !== id
      })
    }
  },
  actions: {
    async 'todo/add' ({commit}, {payload}) {
      console.log(commit, payload)
      const {poster, content} = payload
      const res = await axios({
        url: `/todo/add?poster=${poster}&content=${content}`
      })
      const newPost = res.data.data
      console.log(newPost)
      commit({
        type: 'add',
        newPost: newPost
      })
    },
    async 'todo/all' ({commit}) {
      const res = await axios({
        url: '/todo/all'
      })
      const allTodos = res.data.data
      commit({
        type: 'all',
        allTodos: allTodos
      })
    },
    async 'todo/delete' ({commit}, {payload}) {
      const {id} = payload
      const res = await axios({
        url: `/todo/delete?id=${id}`
      })
      if (Number(res.data.error) === 0) {
        commit({
          type: 'delete',
          id
        })
      }
    }
  },
  getters: {

  }
}
