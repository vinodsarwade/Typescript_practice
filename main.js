// let ar1:Number[]=[1,2,3,4,5,6];
// const test=(n)=>n%2==0;
// let result=ar1.filter((n)=>test(n));
// console.log(result);
var arr1 = ["sara", "hello Jhon"];
var arr2 = arr1.filter(function (name) { return name.startsWith("s"); });
console.log(arr2);
//enum
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
;
var c1 = Color.blue;
console.log(c1);
//type inference
var b1;
b1 = "hello";
b1 = 50;
console.log(b1);
