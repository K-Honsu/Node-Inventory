const Joi = require("joi")

const validateData = async (req, res, next) => {
    try {
        const schema = Joi.object({
            name : Joi.string().required()
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
    validateData
}