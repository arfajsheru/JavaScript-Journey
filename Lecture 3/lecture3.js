//for Loop : Loop are used to execute a piece of code agian & again.
/*for(let i = 0; i < 10; i++){
    console.log("Arfat Sheru");
}*/

/*let i = 0; //Initialization
i < 10;  // Condition
i++;// Increament*/

//Calculate sum 1 to 5. using for loop
/*let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("Print sum 1 to 5 number: ",sum);*/

//while loop: Print 1 to 5 number using for loop.
// let i = 1;
// while(i <= 5){
//     console.log("i = ", i);
//     i++;
// }

//while loop using evennumber sum 1 to 10.
/*let number = prompt("Enter the number: ")
let i = 0;
let evensum = 0;
while(i <= number){
    evensum = evensum + i;
    i += 2;
}
console.log("Print even sum 1 to 10 ", evensum);*/

//do-while loop
/*let i = 20;
do{
    console.log("Apna College");
    i++;
}while(i <= 21);*/

//for-of loop
/*let str = "arfat sheru";
let size = 0;
for(let val of str){ //Iterator Characters using String and character
    console.log("val = ",val);
    size++;
}
console.log(size);*/

// for-in loop Using object
/*const student = {
    Name : "Arfat",
    Marks : 7980,
    City : "Mumbai",
    Age : 20
};

for(let key in student){
    console.log("key : ",key, ", Value =",student[key]);
}*/

//Qs1. Print all even numbes from 0 to 100.

/*for(let num = 2; num < 100; num += 2){
    //if(i % 2 === 0){
        console.log("num = ",num);
    //}
}*/

//Qs2.Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

/*let gamenum = 45;
let usernum = prompt("Guess the game number: ");
do{
    usernum = prompt("You enterd wrong number. Guess again");
}
while(usernum != gamenum);
console.log("Congratulation, you enterd the right number");
*/
//String is sequence of characters used to represent text.
/*let str = "Arfat sheru";
console.log(str[7]);
console.log(str.length);*/
//Template literals in js
/*let obj = {
    item : "pen",
    price : 10,
};

console.log(`The cost of ${obj.item} is ${obj.price} rupees`);
console.log("The cost of",obj.item,"is",obj.price,"rupees");
let sentence = `This is a template literal`;
console.log(sentence);*/

// String methode in javaScript.
/*let username = " ARFAT Mustakim   ";
let fullname = "Sheru";
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.trim()); //Remove whitspace.
console.log(username.length);
console.log(username.slice(0,24));
console.log(username.concat(fullname));
console.log(username.replace("A","a"));*/


//Qs4.Prompt the uset to enter their full name. Generate a username for the basde on the input. Start username with @, Follwed by their fullname and ending with the fulllname length.

let instaName = prompt("Please enter your name without spacing: ");
let output = "@" + instaName + instaName.length;
console.log(`your instagram id ${output}`)

