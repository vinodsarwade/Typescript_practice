"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = require("./demo");
console.log(demo_1.msg);
(0, demo_1.sayHello)();
var p = new demo_1.person("vinod", 21);
p.displayPerson();
(0, demo_1.default)();
//to import default function we have to import it out of bracket ex: sayHello1 in this example
