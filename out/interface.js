"use strict";
let p1 = { A: 10, B: 20 };
function displayPoint(p) {
    console.log(`x=${p.A} and y=${p.B}`);
}
// const user:user={
//     id:101,
//     firstname:"vinod",
//     lastname:"sarwade",
//     getFullname:()=>user.firstname
// }
class userImplements {
    constructor(id, firstname, lastname) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullname() {
        return `${this.firstname} ${this.lastname} and id is ${this.id}`;
    }
}
let u = new userImplements(101, "vinod", "sarwade");
{
    console.log(u.getFullname);
}
let object1 = {
    key: 101,
    value: 2323,
};
let object2 = {
    key: 1002,
    value: "vinod here",
};
console.log(object1);
console.log(object2);
