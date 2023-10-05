const CategoryModel = require("../models/category")
const config = require("../config/mongoose")

config.connect().then(async () => {
   await  CategoryModel.insertMany([{
    name : "Books"
    }])
    console.log("Sent to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log(err);
})

