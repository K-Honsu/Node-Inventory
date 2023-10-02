const jwt = require('jsonwebtoken')
const db = require('../models/index')
const userModel = db.users
require("dotenv").config()

const bearerAuthToken = async (req, res) => {
    try {
        const authHeaders = req.headers
        if(!authHeaders.authorization){
            return res.status(401).json({message:"You are not authorized"})
        }
        const token = authHeaders.authorization
        const decoded = await jwt.verify(token, process.env.SECRET_KEY)
        const user = userModel.findAll({id : decoded.id})
        if(!user){
            return res.status(401).json({message:"You are not authorized"})
        }
        req.user = user
    } catch (error) {
        return res.status(401).json({
            status : "error",
            message:"You are not authorized"
        })
    }
}

module.exports = {
    bearerAuthToken
}