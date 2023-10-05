const UserModel = require("../models/user")

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
        return res.status(201).json({
            status : "success",
            data : user
        })
    } catch (error) {
        return res.status(422).json({
            status : "error",
            message : error.message
        })
    }
}