var serverData = require("./config.json");
var router = require("./router");

var path = require("path");
var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
var session = require("express-session");

function randomString() {
    return Math.random().toString().replace("0.", "");
}

var root = __dirname;
var staticPath = path.join(root, "static");

var app = express();

app.set("view engine", "ejs");
app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(randomString()));
app.use(session({
    secret: randomString(),
    resave: true,
    saveUninitialized: true
 }));

app.use("/", router);

app.listen(serverData.port);
console.log('Server running');