//function and optional argumrnt
function add(n1:number, n2:number,n3?:number):number
{
    if(n3)
        return n1+n2+n3;
    else
        return n1+n2;
}
add(12,23,34);
add(54,66,54,);

//default value argument
function add1(n1:number, n2:number=10,n3?:number):number
{
    return n1+n2+n3;
}
add1(20);   // output is 30
add1(20,50);  //output is  70

//Annonymus fuction
//here we didnt take name of function
const display=function()
{
    console.log("hello all")
}
display();

//***arrow function

let add5=(a:number,b:number)=>{return a+b;}
console.log(add5(30,50));
//here type is optional in above case but we can give type also like below
let add6=(a:number,b:number):number=>{return a+b;}
console.log(add6(30,20));


const adds = (n1:number, n2:number)=> {return n1+n2;}
console.log(adds(10,20));          //arrow function for above function at line 1


const display1=()=>console.log("hello vinod")


//**rest operator...

function Greet(...arg:string[])
{
    arg.forEach(Element=>{console.log(Element)});

}
Greet("hello","welcome","rupali"); //call the greet fun



//spread type

let fruits:string[]=["banana","greps"];
let newFruits:string[]=["barries",...fruits];
// newFruits.push=("mango");
console.log(newFruits);

//destructuring array
let arr:number[]=[10,20,30];
const[p,q,r]=arr;
console.log(p);
console.log(q);
console.log(r);

//Destructuring object
let personInfo={firstName:"sara",lastName:"nail"};
const{firstName,lastName}=personInfo;
console.log(firstName);
console.log(lastName);

// print template
// console.log('my name is '+firstName+' lastname is '+lastName+')';


//Generics
function echo<T>(arg:T):T{
    return arg;
}
echo("hello");
echo(45);
echo(true);

// function test<T,U>(id:T,name:U):{
//     console.log('id is ${id} and name is ${name}');

// }
// test(101,"vinod");







