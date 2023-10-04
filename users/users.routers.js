const express = require("express")
const controller = require("./users.controllers")
const router = express.Router()

router.get("/", controller.getUsers)

module.exports = router