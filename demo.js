"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = exports.sayHello = exports.msg = void 0;
exports.msg = "Hello";
function sayHello() {
    console.log("Hello from ts");
}
exports.sayHello = sayHello;
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    person.prototype.displayPerson = function () {
        console.log("".concat(this.name).concat(this.age));
    };
    return person;
}());
exports.person = person;
//default export
function sayHello1() {
    console.log("hello from ts");
}
exports.default = sayHello1;
