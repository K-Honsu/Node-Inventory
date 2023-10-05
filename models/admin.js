const mongoose = require("mongoose")
const Schema = mongoose.Schema
const objectID = Schema.ObjectId
const id = mongoose.Types.ObjectId

const AdminSchema = new Schema({
    _id : {
        type : String,
        default : new id
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    created_at : {type: Date, default : new Date()}
})


const AdminModel = mongoose.model("admin", AdminSchema)

module.exports = AdminModel