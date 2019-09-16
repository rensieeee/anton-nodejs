var sitename = require ("../../config.json").sitename;

class Controller {
    constructor() {
        this._pagesPath = "./pages/";
        this._sitename = sitename;
    }
}

module.exports = Controller;