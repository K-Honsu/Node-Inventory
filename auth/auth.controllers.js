const UserModel = require("../models/user")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({
            email : email
        })
        if (!user){
            return res.status(404).json({
                status : "error",
                message : "User does not exist"
            })
        }

        const validPassword = await user.IsValidPassword(password)
        if(!validPassword) {
            return res.status(422).json({
                message : "Email or Password is not correct"
            })
        }
        const token = jwt.sign({email : user.email, _id : user._id}, process.env.JWT_SECRET, {expiresIn : "1hr"})
        return res.status(201).json({
            status : "success",
            data : user,
            token
        })
    } catch (error) {
        return res.status(422).json({
            status : "error",
            message : error.message
        })
    }
}


module.exports = {
    Login
}