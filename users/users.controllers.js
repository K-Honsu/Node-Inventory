const db = require('../models/index')
const userModel = db.users

const findUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        return res.status(200).json({
          status: "success",
          data: users,
        });
      } catch (error) {
        console.error(error);
        return res.status(400).json({
          message: "error",
          status: error.message,
        });
      }
};

const createUser = async (req, res) => {
    try {
        const {first_name, last_name, username, gender, email, password} = req.body
        const newUser = await userModel.create({
            first_name,
            last_name,
            email,
            username,
            gender,
            password
        })
        return res.status(201).json({
            status : "User Created Successfully",
            message : newUser
        })
    } catch (error) {
        console.log(error);
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
