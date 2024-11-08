const dotenv = require("dotenv");
const express = require("express");
const userRoutes = require("./routes/user.routes.js");
const connect = require("./lib/connect.js");

dotenv.config();

connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
