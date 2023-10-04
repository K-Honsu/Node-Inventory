const Joi = require("joi")
const db = require('../models/index')
const categoryItem = db.category

const checkSize = (req, res, next) => {
    const validSize = ["large", "small", "medium"]
    if (!validSize.includes(req.body.size)){
        return res.status(400).json({
            message : "Invalid size, select from large, small or medium"
        })
    }
    next()
}

const category_id_in_db = async (req, res, next) => {
    const {category_id} = req.body
    try {
        const category = await categoryItem.findOne({
            where : {id : category_id}
        })
        if (!category) {
            return res.status(404).json({ message: 'Category ID not found. Enter a valid ID' });
          }
          next()
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: 'Invalid ID' });
    }
}

const categoryDataType = async (req, res) => {
    try {
        const schema = Joi.object({
            category_id : Joi.number().required()
        })
        await schema.validateAsync(req.body, {abortEarly : true})
    } catch (error) {
        return res.status(422).json({
            status : "error",
            message : error.message
        })
    }
}

module.exports = {
    checkSize,
    category_id_in_db,
    categoryDataType
}