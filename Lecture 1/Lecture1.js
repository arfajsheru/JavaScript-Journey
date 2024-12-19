//Variable can be re-declare & update. A global scope variable.
var a = 23;
var a = 68;
var a = 89;
console.log("A is : ",a);

//Variable cannot be re-declare but can be update. A block scope variable.
let age = 89;
age = 78;
age = 79;
console.log("Age is : ",age)

//Varible cnnot be re-declare or update. A block scope variable.
/*const marks = 689;
marks = 960;
console.log("Marks is : ",marks) //Error
//const a; // Error*/

//Block 
{
    let a = 10;
    console.log(a);
}
{
    let a = 90;
    console.log(a);
}

//Data types in js : Number, String , Boolean , Undifined, Null , Bigint , Symbol
let price = 800.00;
let fullname = "Arfat sheru";
let isFollow = true;
let name;
let x = BigInt("123");
let y = Symbol("Hello");

//Object : { Key : value.} //Collection of different variable.
const student = {
    fullname : "Arfat",
    age : 20,
    Cgpa : 8.3,
    ispass : true,
};

student["age"] = student["age"] + 7;
console.log(student["age"]);

student["fullname"] = "Mohammad sheru";
console.log("Print name : ",student["fullname"]);


//Practice 1
const product = {
    Pname : "pen",
    rating : 5,
    date : 2004,
    price : 270,
};

