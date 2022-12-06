const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const cors = require("cors")({origin: true});

//setting up cors and bodyparser
const app = express();
app.use(cors);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// view engine setup
app.engine('hbs', engine());
app.set("views", path.join(__dirname, "./public/pages"));
app.set("view engine", "hbs");

//routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.render("index");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/feed", function(req, res) {
  res.render("feed");
});

app.get("/test", function(req, res) {
    res.render("test");
});


process.on("uncaughtException", function(err) {
  console.log(err);
});
exports.app = functions.https.onRequest(app);
/* eslint-disable eol-last */