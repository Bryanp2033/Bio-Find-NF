const express = require('express');
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT)
});