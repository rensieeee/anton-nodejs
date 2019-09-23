var BaseRepository = require("../default/baseRepository");
var UserModel = require("../../models/anton-framework/userModel");

class UserRepository extends BaseRepository {
    constructor() {
        super();
    }

    getUsers() {
        this._database.setSQLString("SELECT id FROM `anton-user`;");
        var users = this._database.getData();
        var result = [];
        for (let i = 0; i < users.length; i++) {
            var user = users[i];
            result.push(new UserModel(user.id));
        }
        return result;
    }

    getUserById(id) {
        var users = this.getUsers();

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.id == id) {
                return user;
            } 
        }

        return undefined;
    }

    deleteUserById(id) {
        this._database.setSQLString("DELETE FROM `anton-user` WHERE id = ?;");
        this._database.SQLParameters.push(id);
    }

    saveUser(user) {
        var existingUser = this.getUserById(user.id);
        this._database.emptySQLString();
        this._database.SQLParameters.push(user.id);
        this._database.SQLParameters.push(user.email);
        this._database.SQLParameters.push(user.password);
        this._database.SQLParameters.push(user.firstName);
        this._database.SQLParameters.push(user.lastName);

        if (typeof(existingUser) === "undefined" ) {
            this._database.setSQLString("INSERT INTO `anton-user` VALUES (?, ?, ?, ?, ?);");
        } else {
            this._database.setSQLString("UPDATE `anton-user` SET id = ?, email = ?, password = ?, first_name = ?, last_name = ?;");
        }
        this._database.executeQuery();

    }

    getNewUserId() {
        return this.getUsers().length + 1;
    }
}

module.exports = UserRepository;