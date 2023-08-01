var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employe //class
 = /** @class */ (function () {
    function Employe(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employe.prototype.displayEmpInfo = function () {
        console.log("Emp Id is:".concat(this.id, " Name:").concat(this.name, " salary:").concat(this.salary));
    };
    return Employe;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super); // subclass which inherit property from baseclass
    function Manager(id, name, salary, project) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.project = project;
        return _this;
    }
    Manager.prototype.displayEmpInfo = function () {
        _super.prototype.displayEmpInfo.call(this);
        console.log("".concat(this.project));
    };
    return Manager;
}(Employe // subclass which inherit property from baseclass
));
var Manager1 = new Manager(101, "vinod", 50000, "banking");
Manager1.displayEmpInfo();
//assignment
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.makeSound = function () {
        console.log("barking of dog");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("barking");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        return _super.call(this, name, age) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("meow");
    };
    return Cat;
}(Animal));
var dog = new Dog("puppy", 5);
dog.makeSound();
var cat = new Cat("chiu", 5);
cat.makeSound();
