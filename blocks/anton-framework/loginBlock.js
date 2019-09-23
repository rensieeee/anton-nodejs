var BaseBlock = require("../default/baseBlock");

/**
 * IndexBlock: This class is used to get data used by the IndexController to render the template.
 * It is supposed to give orders to models to get Data, and create the object to pass to the template.
 * NOTE: It should NEVER be used to post data in any way, the IndexController is supposed to do This.
 */
class LoginBlock extends BaseBlock {
    constructor() {
        super();
        this.setTitle();
    }

    setTitle() {
        this._data.title = "Login";
    }

    getData(req, data) {
        data.title = this._data.title;
        return data;
    }
}

module.exports = LoginBlock;