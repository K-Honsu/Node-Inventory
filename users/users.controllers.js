const db = require('../models/index')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const userModel = db.users

const findUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        return res.status(200).json({
          status: "success",
          data: users,
        });
      } catch (error) {
        return res.status(400).json({
          message: "error",
          status: error.message,
        });
      }
};

const createUser = async (req, res) => {
    try {
        const {first_name, last_name, username, gender, email, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await userModel.create({
            first_name,
            last_name,
            email,
            username,
            gender,
            password : hashedPassword
        })
        const token = await jwt.sign({email : newUser.email, id :newUser.id}, process.env.JWT_SECRET, {expiresIn: "1h"})
        return res.status(201).json({
            status : "User Created Successfully",
            message : newUser,
            token
        })
    } catch (error) {
        return res.status(400).json({
            message : "error",
            status : error.message
        })
        
    }
}

module.exports = {
    findUsers,
    createUser
};
