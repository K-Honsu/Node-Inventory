const Joi = require('joi')


const validateUserCreation = async (req, res, next) => {
    try {
        const schema = Joi.object({
            first_name : Joi.string().required(),
            last_name : Joi.string().required(),
            username : Joi.string().required(),
            email : Joi.string().email(),
            gender : Joi.string().valid("male", "female").required(),
            password : Joi.string().required()
        })

        const valid = await schema.validateAsync(req.body, {abortEarly: true})
        next()
    } catch (error) {
        return res.status(201).json({
            status : "error",
            message : error.message
        })
    }
}

module.exports = {
    validateUserCreation
}