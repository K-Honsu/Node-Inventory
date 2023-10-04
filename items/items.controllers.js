const db = require('../models/index')
const itemModel = db.item

const createItem = async (req, res) => {
    const {category_id, name, price, size} = req.body
    try {
        const itm = await itemModel.create({
            name,
            price,
            size,
            category_id
        })
        return res.status(201).json({
            status : "success",
            data : itm
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            message : error.message
        })
    }
}

const getAllItems = async (req, res) => {
    try {
        const allItems = await itemModel.findAll()
        return res.status(200).json({
            status : "success",
            data : allItems
        })
    } catch (error) {
        return res.status(400).json({
            message: "error",
            status: error.message,
          });
    }

};

const updateItem = async (req, res) => {
    try {
        const id = req.params.id
        const update = req.body
        const item = await itemModel.findByPk(id)
        if (!item){
            return res.status(404).json({
                data : `Item with id ${id} not found`
            })
        }
        await item.update(update);
        const updatedItem = await itemModel.findByPk(id);
        return res.status(200).json({
            message : "Item updated successfully",
            data : updatedItem
        })
    } catch (error) {
        return res.status(404).json({
            status : "failed",
            message : error.message
        })
    }
}

module.exports = {
    getAllItems,
    createItem,
    updateItem
}