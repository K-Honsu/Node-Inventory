const joi = require("joi")

const LoginValidation = async (req, res, next) => {
    try {
        const schema = joi.object({
            email : joi.string().email().required(),
            password : joi.string().required()
        })
        await schema.validateAsync(req.body, {abortEarly : true})
        next()
    } catch (error) {
        return res.status(422).json({
            status : "error",
            message : error.message
        })
    }
}

module.exports = {
    LoginValidation
}