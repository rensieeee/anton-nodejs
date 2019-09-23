var BaseModel = require("../default/baseModel");
var PasswordHash = require("password-hash");

class UserModel extends BaseModel {

    constructor(id) {
        super();
        this.id = id; 
    }

    getId() {
        return this.id;
    }

    getFirstName() {
        this._database.setSQLString("SELECT first_name FROM `anton-user` WHERE id = ?;");
        this._database.SQLParameters.push(this.getId());
        return this._database.getData()[0].first_name;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getEmail() {
        this._database.setSQLString("SELECT email FROM `anton-user` WHERE id = ?;");
        this._database.SQLParameters.push(this.getId());
        return this._database.getData()[0].email;
    }

    setEmail(email) {
        this.email = email;
    }

    getLastName() {
        this._database.setSQLString("SELECT last_name FROM `anton-user` WHERE id = ?;");
        this._database.SQLParameters.push(this.getId());
        return this._database.getData()[0].last_name;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getPassword() {
        this._database.setSQLString("SELECT password FROM `anton-user` WHERE id = ?;");
        this._database.SQLParameters.push(this.getId());
        return this._database.getData()[0].password;
    }

    setPassword(password) {
        this.password = PasswordHash.generate(password);
    }
}

module.exports = UserModel;