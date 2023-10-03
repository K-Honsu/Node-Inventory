const express = require('express')
const controller = require('./user.auth.controllers')
const middlewares = require('./user.auth.middlewares')

const router = express.Router()

router.post("/login", middlewares.validateLogin, controller.Login)

module.exports = router