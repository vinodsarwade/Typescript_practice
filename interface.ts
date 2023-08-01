interface point{
    A:number;
    B:number;
}
let p1:point={A:10,B:20};

function displayPoint(p1:point){
    console.log(`x=${p1.A} and y=${p1.B}`);
}

interface user{
    id:number;
    firstname:string;
    lastname:string;
    getFullname():string;
}
// const user:user={
//     id:101,
//     firstname:"vinod",
//     lastname:"sarwade",
//     getFullname:()=>user.firstname
      
// }
class userImplements implements user
{
    id:number;
    firstname: string;
    lastname: string;

    constructor(id:number, firstname:string,lastname:string)
    {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getFullname(): string {
        return`${this.firstname} ${this.lastname} and id is ${this.id}`
    }
}
let u :user= new userImplements(101,"vinod","sarwade")
{
    console.log(u);

}


//generics with interface
interface keypair<T,U>
{
    key:T;
    value:U;
}
let object1:keypair<number,number>={
    key:101,
    value:2323,
}
let object2:keypair<number,string>={
    key:1002,
    value:"vinod here",
}
console.log(object1);
console.log(object2);