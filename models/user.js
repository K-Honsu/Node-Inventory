const mongoose = require("mongoose")
const Schema = mongoose.Schema
const objectID = Schema.ObjectId

const UserSchema = new Schema({
    _id : objectID,
    first_name : {type : String},
    last_name : {type : String},
    username : {type : String, required : true},
    email : {type : String, required : true},
    gender : {type : String, enum : ["male", "female"]},
    password : {type : String, required : true},
    created_at : {type: Date, default : new Date()}
});

// const userModel = mongoose.model("users", UserSchema);
const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel