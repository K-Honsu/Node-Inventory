const express = require("express")
const controller = require("./category.controller")
const middleware = require("./category.middleware")

const router = express.Router()

router.get("/", controller.getCategory)
router.post("/create", middleware.validateData, controller.createCategory)

module.exports = router