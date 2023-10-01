const { v4: isUUIDv4 } = require('uuid');

const checkReqBody = (req, res, next) => {
    const {user_id} = req.body
    if (!user_id || !isUUIDv4(user_id) ){
        return res.status(400).json({
            status : "error",
            message : "Invalid user_id"
        })
    }
    next()
}

module.exports = {
    checkReqBody
}