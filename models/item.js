const mongoose = require("mongoose")
const Schema = mongoose.Schema
const objectID = Schema.ObjectId
const id = mongoose.Types.ObjectId

const ItemSchema = new Schema({
    name : {type : String},
    price : {type : Number},
    size : { type : String, enum : ["large", "small", "medium"]},
    category_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "categories"
    },
    created_at : {type: Date, default : new Date()}
})


const ItemModel = mongoose.model("items", ItemSchema)

module.exports = ItemModel