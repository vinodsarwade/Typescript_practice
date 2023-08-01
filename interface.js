var p1 = { A: 10, B: 20 };
function displayPoint(p1) {
    console.log("x=".concat(p1, " and y=").concat(p1));
}
// const user:user={
//     id:101,
//     firstname:"vinod",
//     lastname:"sarwade",
//     getFullname:()=>user.firstname
// }
var userImplements = /** @class */ (function () {
    function userImplements(id, firstname, lastname) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    userImplements.prototype.getFullname = function () {
        return "".concat(this.firstname, " ").concat(this.lastname, " and id is ").concat(this.id);
    };
    return userImplements;
}());
var u = new userImplements(101, "vinod", "sarwade");
{
    console.log(u);
}
var object1 = {
    key: 101,
    value: 2323,
};
var object2 = {
    key: 1002,
    value: "vinod here",
};
console.log(object1);
console.log(object2);
