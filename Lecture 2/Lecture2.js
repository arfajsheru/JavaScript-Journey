//Artithmetic operators in js  :  + , - , * , / , % .
let a = 20 , b = 10;

console.log("a = ", a , " b = ", b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);
console.log("a % b =",a % b); // Modulus
console.log("a ** b =",a ** b);

//Unary Operator : Increament and Decreament
console.log("a++ ", a++); //use value then increament
console.log(a);
console.log("++a ", ++a); //Increment value then use.

console.log("a-- ", a--); //use value then decreasing
console.log(a);
console.log("--a", --a); //Decresing value then use.

//Assignment Operator
let x = 5;
let y = 2;

a += 4;
a -= 4;
y /= 8;
y *= 6;
y **= 8;
console.log(y)

//Comparison Operators = ++, != , === , !== .
let n = 5;
let m = 6;
console.log("n == m ", n != m);

// Logical Operators = && , || , ! .

//Condition Statement

let age = 43;
if(age > 18){
    console.log("You can vote");
}else{
    console.log("You can't vote");
}

//
let color;
let mode = "dark";
if(mode === "dark"){
    color = "Black";
}else {
    color = "white";
}

console.log(color)

// odd or even
let num = 20;
if(num % 2 === 0){
    console.log("Your number is even number: ", num)
}else{
    console.log("Your number is not even number: ",num);
}

//Ternary Operator

let marks = 90;
let result = marks > 35 ? "pass" : "Fail";
console.log(result);


//Q1. GEt user to input a number using prompt("Enter a number: "). Check if the number is a multiple of 5 or not.

// alert("hello");// One time Popup
// prompt("hello!") 

// let number = prompt("Enter a number: ");
// if(number % 5 === 0){
//     console.log(number , " is a multiple of 5");
// }else {
//     console.log(number , " is not a multiple of 5");
// }

//Q2. write a code which can give grades to students according to their scores: 
let marks1 = prompt("Enter the student marks");

if(marks1 >= 90 && marks1 <= 100){
    console.log("You have got A");
}else if(marks1 > 70 && marks1 <= 89){
    console.log("You have got B");
}else if(marks1 >= 60 && marks1 <= 69){
    console.log("Your have got C");
}else if(marks1 > 50 && marks1 <= 59){
    console.log("You have got D");
}else{
    console.log("Fail");
}
