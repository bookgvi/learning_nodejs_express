const express = require('express')
const app = express()

const simpleMiddlware = (req, res, next) => {
  req.currTime = new Date()
  next();
}

app.use(simpleMiddlware)

app.get('/', (req, resp) => {
  resp.send(`Hello, motherfucker, ${req.currTime}`)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000...')
})
