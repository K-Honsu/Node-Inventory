const Joi = require('joi')

const validInput = async (req, res, next) => {
    try {
        const schema = Joi.object({
            name : Joi.string().required()
        })
        await schema.validateAsync(req.body, {abortEarly:true})
        next()
    } catch (error) {
        return res.status(422).json({
            status : "error",
            message : error.message
        })
    }
}


module.exports = {
    validInput
}