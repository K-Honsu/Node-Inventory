const express = require('express')
const controller = require('./items.controllers')
const middleware = require('./items.middleware')
const authMiddleware = require("../middlewares/global.middlewares")


const router = express.Router()
router.get('/', authMiddleware.UserBearerAuthToken, controller.getAllItems)
router.post("/create", authMiddleware.AdminBearerAuthToken, middleware.checkSize, middleware.categoryDataType, middleware.category_id_in_db, controller.createItem)


module.exports = router