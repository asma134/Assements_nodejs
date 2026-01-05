const express = require("express");
const path = require("path");
const studentRoutes = require("./routes/studentRoutes");

const app = express();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use(express.static(path.join(__dirname, "../frontend")));


app.use("/api/students", studentRoutes);

module.exports = app;
