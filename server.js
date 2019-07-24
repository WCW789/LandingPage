const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

let env = require('dotenv').load;
let exphbs = require('express-handlebars')

let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let Contact = require("./models/code.js")

app.set('views', './public')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static("public"));
app.use(express.static(__dirname + '/public/appTemplate/code/dark'));
app.use(express.static(__dirname + '/public'));

require("./routes/html-routes")(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("tessssssst");

app.post("/submit", function (req, res) {
  console.log(req.body)
  Contact.create(req.body)
    .catch(err => res.status(422).json(err));
  console.log("hey")
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/landingpage"
);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
