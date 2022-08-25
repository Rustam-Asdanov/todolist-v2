const express = require("express");
const bodyParser = require("body-parser");
const pug = require("pug");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");
