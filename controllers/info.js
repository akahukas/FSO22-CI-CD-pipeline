const infoRouter = require('express').Router()

infoRouter.get('/health', (req, res) => {
  res.send('ok')
})

infoRouter.get('/version', (req, res) => {
  res.send('1')
})

module.exports = infoRouter
