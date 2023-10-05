const express = require("express")
const controller = require("./auth.controllers")
const middleware = require("./auth.middlewares")

const router = express.Router()

router.post("/login", middleware.LoginValidation, controller.Login)

module.exports = router