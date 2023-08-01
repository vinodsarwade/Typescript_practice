// let ar1:Number[]=[1,2,3,4,5,6];
// const test=(n)=>n%2==0;
// let result=ar1.filter((n)=>test(n));
// console.log(result);


let arr1:string[]=["sara","hello Jhon"];

let arr2:string[]=arr1.filter((name)=>name.startsWith("s"));

console.log(arr2);


//enum

enum Color{black,blue,red};
let c1:Color=Color.blue;
console.log(c1);

//type inference
let b1;
b1="hello";
b1=50;
console.log(b1);