var BaseController = require("../default/baseController");
var UserRepository = require("../../repositories/anton-framework/userRepository");
var PasswordHash = require("password-hash");

class LoginController extends BaseController {

    constructor() {
        super();
        var LoginBlock = require("../../blocks/" + this._sitename + "/loginBlock");
        this._block = new LoginBlock();
        this.UserRepository = new UserRepository();
        this.data = {
            tried: false,
            succeed: false
        };
    }

    executeGet(req, res) {
        if (typeof(req.session.user) !== "undefined") {
            res.redirect("index.html");
        } else {
            res.render(this._pagesPath + "login", this._block.getData(req, this.data));
        }
    }

    executePost(req, res) {
        if (typeof(req.session.user) !== "undefined") {
            res.redirect("index.html");
        } else {
            this.data.tried = true;
            var email = req.body.email;
            var password = req.body.password;

            var users = this.UserRepository.getUsers();
            users.forEach(user => {
                if (user.getEmail() === email && PasswordHash.verify(password, user.getPassword())) {
                    this.data.succeed = true;
                    req.session.user = user
                }
            });

            res.render(this._pagesPath + "login", this._block.getData(req, this.data));
        }
    }
}

module.exports = LoginController;