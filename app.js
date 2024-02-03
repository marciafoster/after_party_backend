const express = require("express");
const cors = require("cors");
const app = express();
// const usersController = require("./Controllers/usersController");

//middleware
app.use(cors());
app.use(express.json());
// app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("Welcome to Our App");
});

// app.get('/', (req, res) => {
//     res.json({ index: "This is the index page" })
// })

module.exports = app;
