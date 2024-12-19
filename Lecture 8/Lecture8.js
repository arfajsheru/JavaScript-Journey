let btn1 = document.querySelector("#btn1");

console.log(btn1);

btn1.onclick = () => {
    console.log("btn1 was clicked! ");
    let a = 10;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div ");
};


let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("btn2 was clicked!");
};