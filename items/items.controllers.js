const ItemModel = require("../models/item")

const createItems = async (req, res) => {
    try {
        const { name, price, size, category_id } = req.body
        const itms = await ItemModel.create({
            name,
            price,
            size,
            category_id
        })
        return res.status(201).json({
            status : "success",
            message : "Item created successfully",
            itms
        })
    } catch (error) {
        return res.status(422).json({
            status : "error",
            message : error.message
        })
    }
}


const getItems = async (req, res) => {
    try {
        const items = await ItemModel.find()
        return res.status(200).json({
            status : "success",
            data : items
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            data : error.message
        })
    }
}

module.exports = {
    getItems,
    createItems
}