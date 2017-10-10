const URL = require('url')
const { getAllPosts, addPost, deletePost } = require('../db/crud')

module.exports = async (req, res) => {
  const url = URL.parse(req.url, true)
  const { pathname, query } = url
  switch (pathname) {
    case '/add':
      try {
        const { poster, content } = query
        const newPost = await addPost(poster, content)
        res.json({
          data: newPost,
          error: 0
        })
      } catch (e) {
        res.json({
          data: [],
          error: 1
        })
      }
      break
    case '/':
    case '/all':
      try {
        const allPosts = await getAllPosts()
        res.json({
          data: allPosts,
          error: 0
        })
      } catch (e) {
        res.json({
          data: [],
          error: 1
        })
      }
      break
    case '/delete':
      try {
        const { id } = query
        await deletePost(Number(id))
        res.json({
          error: 0
        })
      } catch (e) {
        res.json({
          error: 1
        })
      }
      break
    default:
      res.json({
        error: 1,
        message: 'bad request'
      })
  }
}
