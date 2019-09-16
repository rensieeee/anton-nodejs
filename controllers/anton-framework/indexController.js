var BaseController = require("../default/baseController");

/**
 * IndexController: This class is supposed to perform most logic functions, as well as render the template.
 * It is supposed to give orders to Model classes to get and set Data,
 * and use the Block class to get information to render the template.
 * NOTE: It is NEVER supposed to pass its own information to the template, this information should always be received by calling _block.getData().
 */
class IndexController extends BaseController {
    
    constructor() {
        super();
        var IndexBlock = require("../../blocks/" + this._sitename + "/indexBlock");
        this._block = new IndexBlock();
    }

    executeGet(req, res) {
        res.render(this._pagesPath + "index", this._block.getData());
    }

    executePost(req, res) {

    }
}

module.exports = IndexController;