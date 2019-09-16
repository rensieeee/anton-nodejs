var sitename = require("../../config.json").sitename;

class Block {
    constructor() {
        this._sitename = sitename;
    }
}

module.exports = Block;