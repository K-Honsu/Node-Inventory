const express = require("express")
const controller = require("./items.controllers")
const middleware = require("./items.middlewares")
const globalMiddleware = require("../middlewares/global.middlewares")

const router = express.Router()

// router.use(globalMiddleware.adminBearerToken, globalMiddleware.userBearerToken)

router.get("/", globalMiddleware.userBearerToken, controller.getItems)
router.post("/create", globalMiddleware.adminBearerToken, middleware.validateCategoryId, controller.createItems)


module.exports = router