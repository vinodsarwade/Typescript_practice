"use strict";
class Employe {
    constructor(id, name, salary) {
        this.id = id;
        this.name + name;
        this.salary = salary;
    }
    displayEmpInfo() {
        console.log(`${this.id} ${this.name} ${this.salary}`);
    }
}
class Manger extends Employe {
    constructor(id, name, salary, project) {
        super(id, name, salary);
        this.project = project;
    }
    displayEmpInfo() {
        super.displayEmpInfo();
        console.log(`${this.project}`);
    }
}
let Manager = new Manger(101, "vinod", 50000, "banking");
Manager.displayEmpInfo();
//assignment
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log("barking of dog");
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    makeSound() {
        console.log("barking");
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    makeSound() {
        console.log("meow");
    }
}
const dog = new Dog("puppy", 5);
dog.makeSound();
const cat = new Cat("chiu", 5);
cat.makeSound();
