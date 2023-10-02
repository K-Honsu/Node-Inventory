const express = require ('express')
const controller = require('./categories.controllers')

const router = express.Router()

router.get("/", controller.getAllCategory)
router.post("/create", controller.createCategory)
router.patch("/update/:id", controller.updateCategory)
router.delete("/delete/:id", controller.deleteCategory)

module.exports = router