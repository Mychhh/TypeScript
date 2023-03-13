"use strict";
exports.__esModule = true;
// Class (Object)
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
// Class (Object) extending the User Interface upon Instantiation
var user = new UserAccount("Murphy", 1);
console.log(user);
