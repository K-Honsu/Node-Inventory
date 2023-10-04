const UserModel = require("../models/user")

const createUser = async (req, res) => {
    try {
        const {email, first_name, last_name, gender, username, password} = req.body
        const existingUser = await UserModel.findOne({
            email : email
        })
        if (existingUser){
            return res.status(409).json({
                status : "error",
                message : "User already exist"
            })
        }
        const user = await UserModel.create({
            email,
            first_name,
            last_name,
            gender,
            username,
            password
        })
        return res.status(201).json({
            status : "success",
            message : "User created successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            status : "error",
            message : error.message
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find()
        return res.status(200).json({
            status : "success",
            data : users
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status : "error",
            message : error.message
        })
    }
}

module.exports = {
    getUsers,
    createUser
}