var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//function and optional argumrnt
function add(n1, n2, n3) {
    if (n3)
        return n1 + n2 + n3;
    else
        return n1 + n2;
}
add(12, 23, 34);
add(54, 66, 54);
//default value argument
function add1(n1, n2, n3) {
    if (n2 === void 0) { n2 = 10; }
    return n1 + n2 + n3;
}
add1(20); // output is 30
add1(20, 50); //output is  70
//Annonymus fuction
//here we didnt take name of function
var display = function () {
    console.log("hello all");
};
display();
//***arrow function
var add5 = function (a, b) { return a + b; };
console.log(add5(30, 50));
//here type is optional in above case but we can give type also like below
var add6 = function (a, b) { return a + b; };
console.log(add6(30, 20));
var adds = function (n1, n2) { return n1 + n2; };
console.log(adds(10, 20)); //arrow function for above function at line 1
var display1 = function () { return console.log("hello vinod"); };
//**rest operator...
function Greet() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    arg.forEach(function (Element) { console.log(Element); });
}
Greet("hello", "welcome", "rupali"); //call the greet fun
//spread type
var fruits = ["banana", "greps"];
var newFruits = __spreadArray(["barries"], fruits, true);
// newFruits.push=("mango");
console.log(newFruits);
//destructuring array
var arr = [10, 20, 30];
var p = arr[0], q = arr[1], r = arr[2];
console.log(p);
console.log(q);
console.log(r);
//Destructuring object
var personInfo = { firstName: "sara", lastName: "nail" };
var firstName = personInfo.firstName, lastName = personInfo.lastName;
console.log(firstName);
console.log(lastName);
// print template
// console.log('my name is '+firstName+' lastname is '+lastName+')';
//Generics
function echo(arg) {
    return arg;
}
echo("hello");
echo(45);
echo(true);
// function test<T,U>(id:T,name:U):{
//     console.log('id is ${id} and name is ${name}');
// }
// test(101,"vinod");
