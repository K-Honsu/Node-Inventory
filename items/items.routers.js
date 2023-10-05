const express = require("express")
const controller = require("./items.controllers")
const middleware = require("./items.middlewares")

const router = express.Router()

router.get("/", controller.getItems)
router.post("/create", middleware.validateCategoryId, controller.createItems)


module.exports = router