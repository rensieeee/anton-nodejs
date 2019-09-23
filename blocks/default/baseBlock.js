var sitename = require("../../config.json").sitename;

class Block {
    constructor() {
        this._sitename = sitename;
        this._data = {};
    }
}

module.exports = Block;