const UserModel = require("../models/user")

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
    getUsers
}