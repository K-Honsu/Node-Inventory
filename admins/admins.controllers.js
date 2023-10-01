const db = require('../models/index')
const adminModel = db.admin

const createAdmin = async (req, res) => {
    const {user_id} = req.body
    try {
        const admins = await adminModel.create({
            user_id
        })
        return res.status(201).json({
            status : "success",
            data : admins
        })
    } catch (error) {
        return res.status(400).json({
            message : "error",
            status : error.message
        })
    }
}

const getAdmins = async (req, res) => {
    try {
        const admins = await adminModel.findAll()
        return res.status(200).json({
            status: "success",
            data: admins,
          });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
          message: "error",
          status: error.message,
        });
    }
}

module.exports = {
    getAdmins,
    createAdmin
}