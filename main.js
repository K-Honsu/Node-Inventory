const express = require('express')
const sequelize = require('./config/sequelize')

const port = 3005
const app = express()

app.use(express.json())

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