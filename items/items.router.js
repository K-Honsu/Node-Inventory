const express = require('express')
const controller = require('./items.controllers')
const middleware = require('./items.middleware')


const router = express.Router()
router.get('/', controller.getAllItems)
router.post("/create", middleware.checkSize, middleware.category_id_in_db, controller.createItem)


module.exports = router