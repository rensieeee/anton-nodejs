var MySql = require('sync-mysql');

class Database {

    constructor() {
        this.config = require("./config.json");
        this.connection = undefined;
        this.SQLString = "";
        this.SQLParameters = [];
        this.results = undefined;
    }

    connect() {
        this.connection = new MySql(this.config);
    }

    disconnect() {
        this.connection.dispose();
        this.connection = undefined;
    }

    executeQuery() {
        this.connect();
        this.results = this.connection.query(this.SQLString, this.SQLParameters);
        this.disconnect();
        this.emptySQLString();
        return this.results;
    }

    reset() {
        this.emptySQLString();
        this.SQLParameters = [];
        this.results = undefined;
    }

    getSQLString() {
        return this.SQLString;
    }

    setSQLString(sql) {
        this.SQLString = sql;
    }

    emptySQLString() {
        this.SQLString = "";
        this.SQLParameters = [];
    }

    getData() {
        this.executeQuery();
        return this.results;
    }

}

module.exports = Database;