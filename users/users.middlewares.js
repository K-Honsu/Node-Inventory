const joi = require("joi")

const validateUser = async (req, res, next) => {
    try {
        const schema = joi.object({
            first_name : joi.string().required(),
            last_name : joi.string().required(),
            username : joi.string().required(),
            email : joi.string().email().required(),
            gender : joi.string().valid("male", "female"),
            password : joi.string().required()
        })
        await schema.validateAsync(req.body, {abortEarly : true})
        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = {
    validateUser
}