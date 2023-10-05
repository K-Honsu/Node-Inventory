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

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id
        const { name } = req.body
        const category = await CategoryModel.findById(id)
        if (!category){
            return res.status(400).json({
                data : `Category with ${id} not found`
            })
        }
        category.name = name
        await category.save()
        return res.status(200).json({
            status : "success",
            message : "Categoroy updated successfully",
            data : category
        })
    } catch (error) {
        console.log(error)
        console.log(error.message)
        return res.status(400).json({
            status : "error",
            message : error.message
        })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id
        const deletedCategory = await CategoryModel.findById(id)
        if (!deletedCategory){
            return res.status(400).json({
                data : `Category with ${id} not found`
            })
        }
        await deletedCategory.deleteOne()
        return res.status(200).json({
            status : "success",
            message : "Categoroy deleted successfully",
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
    createCategory,
    updateCategory,
    deleteCategory
}