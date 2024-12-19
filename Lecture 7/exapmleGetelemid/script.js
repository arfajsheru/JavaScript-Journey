//getElelmentByid("")
function ChangeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}
// const id = document.getElementById("div");
// console.dir(id);

// //getElementByClassname("")
// const clas = document.getElementsByClassName("classname");
// console.dir(clas);

// document.body.childNodes[1].innerText = "mustakim sehru";

// document.body.style.background = "green";

//getElelementbyId()
// let id = document.getElementById("heading");
// console.log(id);
// console.dir(id);

//getElementByclassName() : html collection ko return karta hai.
// let clas = document.getElementsByClassName("heading-class");
// console.dir(clas);
// console.log(clas);

// document.body.childNodes[3];

//getElementbytagName()
// let para = document.getElementsByTagName("p");
// console.log(para);
// console.dir(para);


//qurySelector()
// let firstEle = document.querySelector("p");
// console.log(firstEle);
// console.dir(firstEle);

// let id = document.querySelector(".para");
// console.log(id);

//qurySelectorAll()
// let firstEleall = document.querySelectorAll(".myclass");
// console.log(firstEleall);
// console.dir(firstEleall);

// function newColor(col){
//   const elem = document.getElementById("para");
//   elem.style.backgroundColor = col;
// }

//DOM Manipulation
// let first = document.querySelector("#para1");
// console.log(first);


// let div = document.querySelector("div");
// console.dir(div);


let h2 = document.querySelector("h1")
console.dir(h2.innerText + " from apna college student");

h2.innerText +=" from apna college student";