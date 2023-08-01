//number array
let ar1:Number[]=[1,2,3,4,5,6];
const test=(n:any)=>n%2==0;
let result=ar1.filter((n)=>test(n));
console.log(result);


//or you can write like below for above function

let arrayName:Number[]=[1,2,3,4,5,6,8,10];
// const test1=(n:any)=>n%2==0;
let result1:any=arrayName.filter((n:any)=>n%2==0);
console.log(result1);


//string array

let arr1:string[]=["sara","hello Jhon","sarwade"];

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