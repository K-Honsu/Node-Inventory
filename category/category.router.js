const express = require("express")
const controller = require("./category.controller")
const middleware = require("./category.middleware")

const router = express.Router()

router.get("/", controller.getCategory)
router.post("/create", middleware.validateData, controller.createCategory)
router.patch("/update/:id", middleware.validateData, controller.updateCategory)
router.delete("/delete/:id", controller.deleteCategory)

module.exports = router