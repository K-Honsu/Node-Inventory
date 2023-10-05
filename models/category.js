const mongoose = require("mongoose")
const Schema = mongoose.Schema
const objectID = Schema.ObjectId
const id = mongoose.Types.ObjectId

const categorySchema = new Schema({
    name : {type : String},
    created_at : {type: Date, default : new Date()}
});

const CategoryModel = mongoose.model("categories", categorySchema)

module.exports = CategoryModel