var Database = require("../../database/database");
var sitename = require("../../config.json").sitename;

class Repository {
    constructor() {
        this._database = new Database();
        this._sitename = sitename;
    }
}

module.exports = Repository;