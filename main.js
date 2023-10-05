const express = require('express')
const config = require("./config/mongoose")
const userRouter = require("./users/users.routers")
const AdminRouter = require("./admins/admins.routers")
const CategoryRouter = require("./category/category.router")
const ItemRouter = require("./items/items.routers")
const authRouter = require("./auth/auth.routers")

const port = 3005
const app = express()
config.connect()

app.use(express.json())
app.use("/users", userRouter)
app.use("/admins", AdminRouter)
app.use("/category", CategoryRouter)
app.use("/items", ItemRouter)
app.use("/auth", authRouter)

app.get('*', (req, res) => {
    return res.status(404).json({
        data: null,
        error: 'route not found'
    })
})

app.listen(port, () => console.log(`listening on port: ${port}`))