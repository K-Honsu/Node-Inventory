const express = require ('express')
const controller = require('./categories.controllers')
const middleware = require("./categories.middlewares")
const authMiddleware = require("../middlewares/global.middlewares")

const router = express.Router()

router.get("/", authMiddleware.UserBearerAuthToken, controller.getAllCategory)
router.post("/create", authMiddleware.AdminBearerAuthToken, middleware.validInput, controller.createCategory)
router.patch("/update/:id", authMiddleware.AdminBearerAuthToken, middleware.validInput, controller.updateCategory)
router.delete("/delete/:id", authMiddleware.AdminBearerAuthToken, controller.deleteCategory)

module.exports = router