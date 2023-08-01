//number array
let ar1 = [1, 2, 3, 4, 5, 6];
const test = (n) => n % 2 == 0;
let result = ar1.filter((n) => test(n));
console.log(result);
let arrayName = [1, 2, 3, 4, 5, 6, 8, 10];
// const test1=(n:any)=>n%2==0;
let result1 = arrayName.filter((n) => n % 2 == 0);
console.log(result1);
//string array
let arr1 = ["sara", "hello Jhon", "sarwade"];
let arr2 = arr1.filter((name) => name.startsWith("s"));
console.log(arr2);
//enum
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
;
let c1 = Color.blue;
console.log(c1);
//type inference
let b1;
b1 = "hello";
b1 = 50;
console.log(b1);
