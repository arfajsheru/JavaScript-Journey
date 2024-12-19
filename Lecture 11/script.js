// Object ->>>>  A javaScript object is an entity having state and behavior (Properties and method). we can ser prortotype using __ proto__.<<<<<-
// const student = {
//     fullname : "Arfat mustakim sheru",
//     marks : 89.78,

//     printMarks : () => {
//         console.log("marks =",this.marks); //this : student.marks
//     },
// };

// const employee = {
//     calculateTax(){
//         console.log("Tax is 10% Apply");
//     }
// };
// const arfat = {
//     salary : 200000,
//     calculateTax() {
//     console.log("tax is 10% apply")
//     }
// };
// karan.__proto__ = employee;

//Classes in js
// class MarutiSuzki {
//     constructor(brand){
//         this.brand = brand
//         console.log("Creating new object")
//     }
//     start(){
//         console.log("Car is started.");
//     }

//     stop(){
//         console.log("Car is stoped.");
//     }

//     setBrand(brand){
//         this.brand = brand;
//     }
// }
// let fortuner = new MarutiSuzki("fortuner");
// fortuner.start();
// fortuner.stop();

//Inheritance in js : Inheritance is passing down properties & methodes from parent class to child class.

// class parent {
//     hello(){
//         console.log(`Hello!`);
//     }
// }

// class child extends parent {}

// let obj = new child();

// class person {
//   constructor(name) {
//     this.species = "homo species";
//     this.name = name;
//   }
//   Eat() {
//     console.log("Eat");
//   }
// }

// class Engineer extends person {
//   constructor(name) {
//     super(name);
//   }
//   work() {
//     super.Eat();
//     console.log("Solve problems, build something");
//   }
// }

// let engObj = new Engineer("arfat");


//Qs. Your are creating a website for your college. Create a class User with 2 properties, name & email. It also has a mathod called viewData() that allows user to view website data.

class user {
    constructor(name ,email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`The student name is ${this.name}`);
        console.log(`The studetn email is ${this.email}`);
    }
}

let student1 = new user("Arfat","arfatsheru74@gmail.com");
let student2 = new user("Obaid","obiadazmi68@gmail.com");
let student3 = new user("Haris","hairisbhoraniya45@gmail.com");

student1.viewData();
student1.viewData();
student3.viewData();
