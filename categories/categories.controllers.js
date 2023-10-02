const db = require('../models/index')
const categoryModel = db.category

const createCategory = async (req, res) => {
    const {name} = req.body
    try {
        const category = await categoryModel.create({
            name
        })
        return res.status(201).json({
            status : "Category created successfully",
            data : category
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            message : error.message
        })
    }
}

const getAllCategory = async (req, res) => {
    const category = await categoryModel.findAll()
    try {
        return res.status(200).json({
            status : "success",
            data : category
        })
    } catch (error) {
        return res.status(400).json({
            status : "failed",
            message : error.message
        })
    }
}

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id
        const update = req.body
        const category = await categoryModel.findByPk(id)
        if (!category){
            return res.status(404).json({
                data : `Category with id ${id} not found`
            })
        }
        await category.update(update);
        const updatedCategory = await categoryModel.findByPk(id);
        return res.status(200).json({
            message : "Category updated successfully",
            data : updatedCategory
        })
    } catch (error) {
        return res.status(404).json({
            status : "failed",
            message : error.message
        })
    }
}

const deleteCategory = async (req, res) => {
    const id = req.params.id
    try {
        const category = await categoryModel.destroy({
            where : {id : id}
        })
        if (!category){
            return res.status(404).json({
                status : "error",
                message : `No category with ${id} found`
            })
        }
        return res.status(201).json({
            status : "success",
            message : "Category deleted successfully"
        })
        // await categoryModel.destroy(category)
    } catch (error) {
        return res.status(404).json({
            status : "failed",
            message : error.message
        })
    }
} 

module.exports = {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory
}