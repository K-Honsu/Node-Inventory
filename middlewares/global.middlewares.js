const jwt = require('jsonwebtoken')
const db = require('../models/index')
const userModel = db.users
const adminModel = db.admin
require("dotenv").config()

const UserBearerAuthToken = async (req, res, next) => {
    try {
        const authHeaders = req.headers
        if(!authHeaders.authorization){
            return res.status(401).json({message:"You are not authorized"})
        }
        const token = authHeaders.authorization.split(" ")[1]
        const decoded = await jwt.verify(token, process.env.SECRET_KEY)
        const user = userModel.findAll({id : decoded.id})
        if(!user){
            return res.status(401).json({message:"You are not authorized"})
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({
            status : "error",
            message:"You are not authorized"
        })
    }
}


const AdminBrearerAuthToken = async (req, res, next) => {
    try {
        const authHeaders = req.headers
        if(!authHeaders.authorization){
            return res.status(401).json({message:"You are not authorized"})
        }
        const token = authHeaders.authorization.split(" ")[1]
        const decoded = await jwt.verify(token, process.env.SECRET_KEY)
        const admin = adminModel.findAll({id : decoded.id})
        if(!admin){
            return res.status(401).json({message:"You are not authorized"})
        }
        req.admin = admin
        next()
    } catch (error) {
        return res.status(401).json({
            status : "error",
            message:"You are not authorized"
        })
    }
}

module.exports = {
    UserBearerAuthToken,
    AdminBrearerAuthToken
}