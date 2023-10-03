const jwt = require('jsonwebtoken')
const db = require('../models/index')
const user = require('../models/user')
const userModel = db.users


const Login = async (req, res) => {
    const {email, password} = req.body
    const existingUser = await userModel.findOne({
        where : {email : email}
    })
    if (!existingUser){
        return res.status(404).json({
            status : "error",
            message : "User not found"
        })
    }
    const validPassword = existingUser.isValidPassword(password)
    if(!validPassword){
        return res.status(422).json({
            status : "Error",
            message : "Email or Password is not correct"
        })
    }
    const token = await jwt.sign({email : existingUser.email, id :existingUser.id}, process.env.JWT_SECRET, {expiresIn: "1h"})
    return res.status(200).json({
        status : "success",
        message : "Login Successful",
        existingUser,
        token
    })
}

module.exports = {
    Login
}