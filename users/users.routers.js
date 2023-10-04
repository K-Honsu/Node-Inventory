const express = require("express")
const controller = require("./users.controllers")
const middleware = require("./users.middlewares")
const router = express.Router()


router.post("/create", middleware.validateUser, controller.createUser)
router.get("/", controller.getUsers)

module.exports = router