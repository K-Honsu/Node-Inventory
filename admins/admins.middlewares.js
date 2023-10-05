const UserModel = require("../models/user")

const validateUserId = async (req, res, next) => {
    try {
        const { user_id } = req.body
        const existingUser = await UserModel.findById(user_id)
        if (!existingUser){
            return res.status(422).json({
                status : "error",
                message : "No user exist with this id"
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            status : "error",
            message : error.message
        })
    }
}

module.exports = {
    validateUserId
}