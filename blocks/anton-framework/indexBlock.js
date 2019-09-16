var BaseBlock = require("../default/baseBlock");

/**
 * IndexBlock: This class is used to get data used by the IndexController to render the template.
 * It is supposed to give orders to models to get Data, and create the object to pass to the template.
 * NOTE: It should NEVER be used to post data in any way, the IndexController is supposed to do This.
 */
class IndexBlock extends BaseBlock {
    constructor() {
        super();
        this.data = {};
        this.setTitle();
    }

    setTitle() {
        this.data.title = "Homepage";
    }

    getData() {
        return this.data;
    }
}

module.exports = IndexBlock;