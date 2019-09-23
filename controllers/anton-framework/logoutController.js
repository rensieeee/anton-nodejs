var BaseController = require("../default/baseController");

/**
 * IndexController: This class is supposed to perform most logic functions, as well as render the template.
 * It is supposed to give orders to Model classes to get and set Data,
 * and use the Block class to get information to render the template.
 * NOTE: It is NEVER supposed to pass its own information to the template, this information should always be received by calling _block.getData().
 */
class LogoutController extends BaseController {

    constructor() {
        super();
        var LogoutBlock = require("../../blocks/" + this._sitename + "/logoutBlock");
        this._block = new LogoutBlock();
    }

    executeGet(req, res) {
        if (typeof(req.session.user) !== "undefined") {
            req.session.destroy();
            res.render(this._pagesPath + "logout", this._block.getData(req));
        } else {
            res.redirect("login.html");
        } 
    }
}

module.exports = LogoutController;