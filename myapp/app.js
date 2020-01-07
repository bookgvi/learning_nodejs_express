const express = require('express')
const http = require('http')

const simpleMiddlware = (req, res, next) => {
  req.currTime = new Date()
  next();
}

const app = http.createServer((req, res) => {
  if (req.url === '/about') {
    const response = JSON.stringify({ errors: [{ source: 'login' }]})
    res.statusCode = 401
    res.setHeader('Content-Type', 'application/json')
    res.write(response)
    res.end()
  }
})

app.listen(3000, () => {
  console.log('Server listening on port 3000...')
})
