const fs = require('fs')

const readFile = (pathname) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data.toString())
    })
  })
}

const writeFile = (pathname, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathname, data, (err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}

const addPost = (poster, content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pathname = `${__dirname}/todos`
      const db = await readFile(pathname)
      let dbJson
      try {
        dbJson = JSON.parse(db)
      } catch (e) {
        dbJson = []
      }
      const len = dbJson.length
      const newPost = {
        id: len === 0 ? 0 : Number(dbJson[len - 1].id + 1),
        poster,
        content
      }
      dbJson.push(newPost)
      await writeFile(pathname, JSON.stringify(dbJson))
      resolve(newPost)
    } catch (e) {
      reject(e)
    }
  })
}

const deletePost = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pathname = `${__dirname}/todos`
      const db = await readFile(pathname)
      let dbJson
      try {
        dbJson = JSON.parse(db)
      } catch (e) {
        dbJson = []
      }
      var flag = false
      const dbJsonM = dbJson.filter((item, index) => {
        if (Number(item.id) !== Number(id)) {
          return true
        }
        flag = true
        return false
      })
      if (!flag) {
        throw new Error()
      }
      await writeFile(pathname, JSON.stringify(dbJsonM))
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

const getAllPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const pathname = `${__dirname}/todos`
      const db = await readFile(pathname)
      let dbJson
      try {
        dbJson = JSON.parse(db)
      } catch (e) {
        dbJson = []
      }
      resolve(dbJson)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  readFile,
  writeFile,
  addPost,
  deletePost,
  getAllPosts
}

// addPost('xiaoming', 'Rainning all the morning today.')
// deletePost(0)
