const CategoryModel = require("../models/category")

const createCategory = async (req, res) => {
    try {
        const { name } = req.body
        const category = await CategoryModel.create({
            name
        })
        return res.status(201).json({
            status : "success",
            message : "Category created successfully",
            data : category
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            message : error.message
        })
    }
}


const getCategory = async (req, res) => {
    try {
        const category = await CategoryModel.find()
        return res.status(200).json({
            status : "success",
            data : category
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            message : error.message
        })
    }
}

module.exports = {
    getCategory,
    createCategory
}