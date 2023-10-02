const express = require('express')
const sequelize = require('./config/sequelize')
const userRouter = require('./users/users.routers')
const categoryRouter = require("./categories/categories.routers")
const adminRouter = require('./admins/admins.routers')
const itemRouter = require('./items/items.router')

const port = 3005
const app = express()

app.use(express.json())
app.use("/users", userRouter)
app.use("/admins", adminRouter)
app.use("/category", categoryRouter)
app.use("/items", itemRouter)

app.get('*', (req, res) => {
    return res.status(404).json({
        data: null,
        error: 'route not found'
    })
})

sequelize.authenticate().then(() => {
    console.log("Connected to sql db successfully!");
}).catch((err) => {
    console.log(err);
})

app.listen(port, () => console.log(`listening on port: ${port}`))