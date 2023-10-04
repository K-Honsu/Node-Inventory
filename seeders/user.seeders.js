const UserModel = require("../models/user")
const config = require("../config/mongoose")

config.connect().then(async () => {
   await  UserModel.insertMany([{
        first_name : "emma",
        last_name : "adeyemy",
        username : "jonnyboy",
        email : "fera1@gmail.com",
        gender : "male",
        password : "frankie"
    }])
    console.log("Sent to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log(err);
})

