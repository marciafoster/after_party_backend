const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const usersController = require("./Controllers/usersController");
const locationsController = require("./Controllers/locationsController");

//middleware
app.use(cors());
app.use(express.json());

app.use("/users", usersController);
app.use("/locations", locationsController);
const PORT = process.env.PORT;




app.get("/", (req, res) => {
  res.send("Welcome to Our App");
});



// app.listen(PORT, () => {
//   console.log(`Proxy server is running on http://localhost:${PORT}`);
// });

module.exports = app;
