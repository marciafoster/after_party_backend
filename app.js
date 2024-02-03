//dependencies
const express = require('express')  
//const Controller = require("./controllers/")

//configuration
const app = express()

//middleware
app.use ()

app.get('/', (req, res) =>{
    res.send('Welcome to !')
});

app.get('*', (_, res) => {
    res.status(404).send("The page that you are looking for is not found.")
});

module.exports = app
