const express = require("express");
const bodyParser = require("body-parser");
const pug = require("pug");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  console.log("Hello");
  res.render("index", { name: "qaqa" });
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
