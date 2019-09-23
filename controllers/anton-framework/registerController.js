var BaseController = require("../default/baseController");
var UserModel = require("../../models/anton-framework/userModel");
var UserRepository = require("../../repositories/anton-framework/userRepository");

/**
 * IndexController: This class is supposed to perform most logic functions, as well as render the template.
 * It is supposed to give orders to Model classes to get and set Data,
 * and use the Block class to get information to render the template.
 * NOTE: It is NEVER supposed to pass its own information to the template, this information should always be received by calling _block.getData().
 */
class RegisterController extends BaseController {

    constructor() {
        super();
        var RegisterBlock = require("../../blocks/" + this._sitename + "/registerBlock");
        this._block = new RegisterBlock();
        this.data = {
            tried: false,
            errors: {
                firstName: false,
                lastName: false,
                email: false,
                password: false,
                password_confirm: false
            },
            noErrors: true
        };
    }

    executeGet(req, res) {
        if (typeof(req.session.user) !== "undefined") {
            res.redirect("index.html");
        } else {
            res.render(this._pagesPath + "register", this._block.getData(req, this.data));
        }
    }

    executePost(req, res) {
        if (typeof(req.session.user) !== "undefined") {
            res.redirect("index.html");
        } else {
            this.data.tried = true;
            var account = req.body;

            if (account.firstName.replace(/\s/g, '').length == 0) {
                this.data.errors.firstName = true;
                this.data.noErrors = false;
            }

            if (account.lastName.replace(/\s/g, '').length == 0) {
                this.data.errors.lastName = true;
                this.data.noErrors = false;
            }

            if (account.email.replace(/\s/g, '').length == 0 || account.email.indexOf('@') == -1) {
                this.data.errors.email = true;
                this.data.noErrors = false;
            }

            if (account.password.replace(/\s/g, '').length < 8) {
                this.data.errors.password = true;
                this.data.noErrors = false;
            }

            if (account.passwordConfirm.replace(/\s/g, '') != account.password) {
                this.data.errors.password_confirm = true;
                this.data.noErrors = false;
            }

            if (this.data.noErrors) {
                var userRepository = new UserRepository();
                var newId= userRepository.getNewUserId();
                var newUser = new UserModel(newId);
                newUser.setFirstName(account.firstName);
                newUser.setLastName(account.lastName);
                newUser.setEmail(account.email);
                newUser.setPassword(account.password);
                userRepository.saveUser(newUser);
            }

            res.render(this._pagesPath + "register", this._block.getData(req, this.data));
        }
    }
}

module.exports = RegisterController;