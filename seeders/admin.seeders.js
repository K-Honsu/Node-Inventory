const AdminModel = require("../models/admin")
const config = require("../config/mongoose")

config.connect().then(async () => {
   await  AdminModel.insertMany([{
    user_id : "651de44e85a3ad3a189948c7"
    }])
    console.log("Sent to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log(err);
})

