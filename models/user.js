const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const UserSchema = new Schema({
    first_name : {type : String},
    last_name : {type : String},
    username : {type : String, required : true},
    email : {type : String, required : true},
    gender : {type : String, enum : ["male", "female"]},
    password : {type : String, required : true},
    created_at : {type: Date, default : new Date()}
});

UserSchema.pre("save", async function (next) {
    const user = this
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

UserSchema.methods.IsValidPassword = async function (password) {
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    return compare
}

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel