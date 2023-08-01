"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = exports.sayHello = exports.msg = void 0;
exports.msg = "Hello";
function sayHello() {
    console.log("Hello from ts");
}
exports.sayHello = sayHello;
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    displayPerson() {
        console.log(`${this.name}${this.age}`);
    }
}
exports.person = person;
//default export
function sayHello1() {
    console.log("hello from default ts");
}
exports.default = sayHello1;
