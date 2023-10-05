const express = require("express")
const controllers = require("./admins.controllers")
const middlewares = require("./admins.middlewares")

const router = express.Router()

router.get("/", controllers.getAdmins)
router.post("/create", middlewares.validateUserId, controllers.createAdmin)

module.exports = router