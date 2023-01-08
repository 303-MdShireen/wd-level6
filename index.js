<<<<<<< HEAD
const app = require("./app.js");
const express = require("express");
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 2100, () => {
  console.log("Started express server");
});
=======
const app = require("./app");

const PORT = process.env.PORT || 1600;
app.listen(PORT, () => {
  console.log(`Started express sever on port ${PORT}`);
});
>>>>>>> c77a4870977e3e3b79493903b44f692d712168a9
