const AdminModel = require("../models/admin")

const createAdmin = async (req, res) => {
    try {
        const { user_id } = req.body
        const admin = await AdminModel.create({
            user_id
        })
        console.log({admin});
        return res.status(201).json({
            status : "success",
            message : "You are now an admin",
            admin
        })
    } catch (error) {
        return res.status(422).json({
            status : "error",
            message : error.message
        })
    }
}


const getAdmins = async (req, res) => {
    try {
        const admins = await AdminModel.find()
        return res.status(200).json({
            status : "success",
            data : admins
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
    getAdmins,
    createAdmin
}