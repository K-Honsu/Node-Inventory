const express = require('express')
const controller = require('./users.controllers')
const middlewares = require('./users.middlewares')


const router = express.Router()

router.post("/create", middlewares.validateUserCreation, controller.createUser)
router.get('/', controller.findUsers)


module.exports = router