export let msg:string="Hello";
export function sayHello():void{
    console.log("Hello from ts");
}

export class person
{
    constructor(private name:string,private age:number)
    {
        this.name=name;
        this.age=age;
    }
    displayPerson():void{
        console.log(`${this.name}${this.age}`);
    }

}
//default export
export default function sayHello1()
{
    console.log("hello from default ts");
}
