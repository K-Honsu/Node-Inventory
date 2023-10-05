const ItemModel = require("../models/item")
const config = require("../config/mongoose")

config.connect().then(async () => {
   await  ItemModel.insertMany([{
    name : "toys",
    price : 200,
    size : "medium",
    category_id : "651ebfdc5c11b3335d7f7a1d",
    }])
    console.log("Sent to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log(err);
})

