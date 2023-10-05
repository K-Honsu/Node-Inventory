const userModel = require("../models/user")
const AdminModel = require("../models/admin")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userBearerToken = async (req, res, next) => {
    try {
        const authheaders = req.headers
        if (!authheaders.authorization) {
            return res.status(401).json({
                message : "You are not authorized"
            })
        }
    
        const token = authheaders.authorization.split(" ")[1]
        const decoded =  await jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findOne({_id : decoded._id})
        if(!user) {
            return res.status(401).json({
                message : "Unauthorized"
            })
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
}

const adminBearerToken = async (req, res, next) => {
    try {
        const authheaders = req.headers
        if (!authheaders.authorization) {
            return res.status(401).json({
                message : "You are not authorized"
            })
        }
    
        const token = authheaders.authorization.split(" ")[1]
        const decoded =  await jwt.verify(token, process.env.JWT_SECRET)
        const user_id = decoded._id
        const admin = await AdminModel.findOne({user_id : user_id})
        if(!admin) {
            return res.status(401).json({
                message : "You are not authorized"
            })
        }
        req.admin = admin
        next()
    } catch (error) {
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
}

module.exports = {
    userBearerToken,
    adminBearerToken
}