var config = require("./config.json");

var router = require("express").Router();
var controllerPath ="./controllers/" + config.sitename + "/";

//Controllers, add all controllers here, use controllerpath to find the way to the specific framework.
var IndexController = require(controllerPath + "indexController");
var RegisterController = require(controllerPath + "registerController");
var LoginController = require(controllerPath + "loginController");
var LogoutController = require(controllerPath + "logoutController");

//GET Requests
router.get("/", function (req, res) {
    var indexController = new IndexController();
    indexController.executeGet(req, res);
});

router.get("/index(.html)?", function(req, res) {
    var indexController = new IndexController();
    indexController.executeGet(req, res);
});

router.get("/register(.html)?", function(req, res) {
    var registerController = new RegisterController();
    registerController.executeGet(req, res);
});

router.get("/login(.html)?", function(req, res) {
    var loginController = new LoginController();
    loginController.executeGet(req, res);
});

router.get("/logout(.html)?", function(req, res) {
    var logoutController = new LogoutController();
    logoutController.executeGet(req, res);
});
//POST Requests

/*app.post("/register.html", async function (req, res) {
    await register.postLogic(req, res);
}); */

router.post("/register(.html)?", function(req, res) {
    var registerController = new RegisterController();
    registerController.executePost(req, res);
});
router.post("/login(.html)?", function (req, res) {
    var loginController = new LoginController();
    loginController.executePost(req, res);
});


//404 Handling, DO NOT TOUCH
router.get("/404(.html)?", function (req, res) {
    res.status(404);
    res.render("./pages/404.ejs", { title: "404", isLoggedIn: typeof(req.session.user) !== "undefined" });
});

router.use(function (req, res) {
    res.redirect("/404.html");
});

module.exports = router;