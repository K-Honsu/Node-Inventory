const express = require("express")
const controller = require("./category.controller")
const middleware = require("./category.middleware")
const globalMiddleware = require("../middlewares/global.middlewares")

const router = express.Router()

// router.use(globalMiddleware.userBearerToken)

router.get("/", globalMiddleware.userBearerToken, controller.getCategory)
router.post("/create", globalMiddleware.adminBearerToken, middleware.validateData, controller.createCategory)
router.patch("/update/:id", globalMiddleware.adminBearerToken, middleware.validateData, controller.updateCategory)
router.delete("/delete/:id", globalMiddleware.adminBearerToken, controller.deleteCategory)

module.exports = router