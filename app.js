const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

// const usersController = require("./Controllers/usersController");

//middleware
app.use(cors());
app.use(express.json());

// app.use("/users", usersController);
const PORT = process.env.PORT;

console.log(process.env);
// app.get("/", (req, res) => {
//   res.send("Welcome to Our App");
// });

app.get("/", (req, res) => {
  res.send( "This is the index page" );
});

// app.listen(PORT, () => {
//   console.log(`Proxy server is running on http://localhost:${PORT}`);
// });

module.exports = app;
