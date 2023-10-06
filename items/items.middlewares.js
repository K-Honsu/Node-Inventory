const CategoryModel = require("../models/category")

const validateCategoryId = async (req, res, next) => {
    try {
        const { category_id } = req.body
        const existingCategory = await CategoryModel.findById(category_id)
        if (!existingCategory){
            return res.status(404).json({
                status : "error",
                message : "No category exist with this id"
            })
        }
        next()
    } catch (error) {
        return res.status(406).json({
            status : "error",
            message : error.message
        })
    }
}

module.exports = {
    validateCategoryId
}