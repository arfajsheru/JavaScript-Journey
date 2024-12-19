/*//Array : is a collection of items.
let marks = [64,63,64,75,34,74];
console.log(marks);
console.log(marks.length);

//for of loop
let heros = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
for(let her of heros){
    console.log(her);
}

//for loop using
for(let i = 0; i < heros.length; i++){
    console.log(heros[i]);
}*/

/*//Qs.For a given array with marks of Student find the average marks of the entier class.
let Studentmarks = [85,97,44,37,76,61];
let marksSum = 0;
for(let val of Studentmarks){
    marksSum = marksSum + val;
}
console.log("Print sum marks of student: ",marksSum);
let avg = marksSum / Studentmarks.length;
console.log("Print avg marks of student: ",avg);*/


/*//Qs.For a given array with prices of 5 item all item have an offer of 10% off on them. Change the array to store final price after applaying offer.

let items = [250,645,300,900,50];

for(let i = 0; i < items.length; i++){
    console.log(`value at index : ${items[i]}`);
    let offer = items[i] /  10;
    items[i] = items[i] - offer;
    console.log(`after applaying offer: ${items[i]}`);
}*/

//Array method

// let marks = [58,6,4,3,6,7,8,80];
// marks.push(54,67);
// console.log(marks);

// marks.pop();
// console.log(marks);

// marks.toString();
// console.log(marks);


// let malname = ["Arfat","Mohammad","Haris","Abdullah","owais","Obaid"];
// let womenname = ["Khadija","Fatima","Ayesha","Rukayya","Sana","Zaiba"];

// let concatname = malname.concat(womenname);
// console.log(concatname);

// let val1 = malname.shift();


// //Slice method : Original method mai change nahi karta.
// console.log(malname.slice(2,10));

// //splice() : change original array(add,rmeove,replace)
// let arr = [1,2,3,4,5,6,7,8];

// arr.splice(3,4,101,102,103,104);
// console.log(arr);


//Qs. Create an array to store compainies -> 

let companies = ["Bloombeg","Microsoft","Uber","Google","IBW","Netflix"];

// console.log(companies.shift());

console.log(companies.splice(2,1,"Ola"));

console.log(companies.push("Amazone"));
