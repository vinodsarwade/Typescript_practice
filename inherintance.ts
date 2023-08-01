class Employe             //class
{
    id:number;              // class member
    name:string;
    salary:number;
    constructor(id:number,name:string,salary:number)  //constructor
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    displayEmpInfo()                       //fun to display info
    {
        console.log(`Emp Id is:${this.id} Name:${this.name} salary:${this.salary}`)
    }
}

class Manager extends Employe      // subclass which inherit property from baseclass
{
    project:string;
    constructor(id:number,name:string,salary:number,project:any)
    {
        super(id,name,salary);
        this.project=project;
    }
    displayEmpInfo(){
        super.displayEmpInfo();
        console.log(`${this.project}`);
    }
}
let Manager1:Manager=new Manager(101,"vinod",50000,"banking");
Manager1.displayEmpInfo();


//assignment
class Animal
{
    name:string;
    age:number;
    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age;
    }
    makeSound(){
        console.log("barking of dog");
    }
}

class Dog extends Animal {
    constructor(name:string,age:number)
    {
        super(name,age)
    }
    makeSound() {
        console.log("barking");
    }

}
class Cat extends Animal{
    constructor(name:string,age:number)
    {
        super(name,age);
    }
    makeSound() {
        console.log("meow");
    }
}

const dog:Dog= new Dog("puppy",5);
dog.makeSound();
const cat:Cat= new Cat("chiu",5);
cat.makeSound();