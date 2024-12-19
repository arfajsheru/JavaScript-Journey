// console.log(document.body);
// console.dir(document.body);

//getelemetbyid
// let heading = document.getElementById("mybutton");
// console.dir(mybutton);
// console.log(mybutton);

//getelementsbycalssname
// let headings = document.getElementsByClassName("Heading");
// console.dir(headings);
// console.log(headings);

//getelelmentbytagname
// let parahs = document.getElementsByTagName("p");
// console.log(parahs);
// console.dir(parahs);

//queryselector
// let queryid = document.querySelector("#mybutton");
// console.log(queryid);
// console.dir(queryid);

// //queryselector
// let queryclass = document.querySelector(".Heading");
// console.log(queryclass);
// console.dir(queryclass);

// //queryselector
// let querytag = document.querySelector("p");
// console.log(querytag);
// console.dir(querytag);

// console.dir(document.body.firstChild);

// let div = (document.querySelector("div"));
// console.dir(div);

//

// let heading = document.querySelector("h1");
// console.dir(heading.innerText);
// heading.innerText = heading.innerText + " from apna college";

let divs = document.querySelectorAll(".box");
let indx = 1;
for(div of divs){
    div.innerText = `new uniqe value ${indx} `;
    indx++;
}

// console.log(box);
// box[0].innerText = "new uniqe value 1";
// box[1].innerText = "new uniqe value 2";
// box[2].innerText = "new uniqe value 3";