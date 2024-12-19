/*//Function in js : Block of code that performed specific task, can be invoked whenever needed.
function Factor(number) {
  if (number < 0) {
    return 0;
  }
  let fac = 1;
  for (let i = 1; i <= number; i++) {
    fac = fac * i;
  }
  console.log(`print factor ${fac}`);
  return fac;
}
Factor(3);*/

/*//Write a java script program enter the number and print that number sum of digit.
const SumOfDigit = (number) => {
    let SumDigit = 0,digit;
    while(number != 0){
        digit = number % 10;
        parseInt(digit);
        SumDigit += digit;
        number = Math.floor(number / 10);
    } 
    console.log(`print sum of digit number: ${SumDigit}`);
    return SumDigit;
}
SumOfDigit(564);*/

/*
  const countvowel = (str) => {
  let countnumber = 0;
  let countstr = " ";
  for (let char of str) {
    if  (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      countnumber++;
      countstr = countstr + char;
    }
  }
  console.log(countnumber);
  console.log(countstr);
};

countvowel("Arfat sheru");*/

//forEach loop in arrays : Higher order function 
//A callback is funcion passed as an argument to another function.


// let arr = [1,2,3,4,5,6,7];
// arr.forEach((val) => {
//   console.log(val);
// });

// arr.forEach((val, indx , arr) => {
//   console.log(val.toUpperCase(),indx, arr);
// });

/*//Qs.For a given array of numbers, print the squre of each value using the forEach loop.
let myArr = [67,89,45,77,23];
let calculateSquare = ((num) => {
  console.log(`Print square of number ${num} : ${num **2}`);
});

myArr.forEach(calculateSquare);*/

/*//Map methode in array
//Createa a new array with the result of some operation.The value its callback return are used to form new array.
let arr = [1,2,3,4,5,6];

let newArra = arr.map((val) => {
  return val **2;
});

console.log(newArra);*/

/*Filter method in array: //Create a new array of elements that given terue for a condition / filter.
//Eg. all even elements.
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let evenarray = arr.filter((val) => {
  return val % 2 == 0;
});
console.log(evenarray);*/

/*//Reduce method in array : Performs somes operaions & reduces the array to a single value. It returns that single value.
//sum, avg, largest, smallest.
let arr = [5, 6, 7, 3, 9, 2, 4, 6];

let output = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(output);*/

/*//Qs.We are given array of marks of students. Filter out of the marks of students that scored 90+.
let arr = [98,78,56,90,89,92,94,80,96];

let topper = arr.filter((marks) => {
  return marks > 90;
});
console.log(`Print topper student: ${topper}`);*/


let n = prompt("Enter the number: ");
let arr2 = [];
for(let i = 1; i <= n; i++){
  arr2[i - 1] = i;
}
console.log(arr2);

// let Printsum = arr.reduce((prev,curr) => {
//   return prev += curr;
// });
// console.log("Print sum of array",Printsum);

// let Printfactorial = arr.reduce((prev,curr) => {
//   return prev * curr;
// });
// console.log("Factorail : ", Printfactorial);

// let nums = [34,63,64,77,34,36];

// let newArr = nums.map((val) => {
//   return val * val;
// });
// console.log(newArr);


// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// // let evenarr = arr.filter((val) => {
// //   return val % 2 === 0;
// // });

// const output = arr.reduce((res,curr) => {
// return res + curr;
// });