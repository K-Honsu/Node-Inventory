const express = require('express')
const middleware = require ("./admins.middlewares")
const controller = require('./admins.controllers')


const router = express.Router()

router.get("/", controller.getAdmins)
router.post("/create", middleware.checkReqBody, controller.createAdmin)


module.exports = router