const express = require ('express')
const controller = require('./categories.controllers')
const authMiddleware = require("../middlewares/global.middlewares")

const router = express.Router()

router.get("/", authMiddleware.UserBearerAuthToken,controller.getAllCategory)
router.post("/create", authMiddleware.AdminBearerAuthToken, controller.createCategory)
router.patch("/update/:id", authMiddleware.AdminBearerAuthToken, controller.updateCategory)
router.delete("/delete/:id", authMiddleware.AdminBearerAuthToken, controller.deleteCategory)

module.exports = router