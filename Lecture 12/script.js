//Sync in js : Synchronous and Asyschronous.
// console.log("one");
// console.log("two");
// console.log("three");

// function hello() {
//     console.log("hello!");
// }

// setTimeout(hello,4000);

// setTimeout( () => {
//     console.log("hello!");
// },5000);

// console.log("four");
// console.log("five");

//callbacks : A callback is fucntion passed as an argument to another functoin.

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a,b,sumCalculate) {
//     sumCalculate(a,b);
// }
// calculator(1,3,sum);

// calculator(1,2, (a, b) => {
//     console.log(a + b);
// });

//callback hell
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 1000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {
//         getData(5);
//       });
//     });
//   });
// });

// //Promise chaine
// function getData(dataId) {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          console.log("DATA",dataId);
//          resolve("success");
//       },3000);
//    });
// };

// getData(1).then((res) => {
//    return getData(2);
//  }).then((res) => {
//     return getData(3);
//  }).then((res) => {
//     console.log(res);
//  });

//Async - Await

// function getdata(dataId) {
//    return new Promise((reslove,reject) => {
//       setTimeout(() => {
//          console.log("Data",dataId);
//          reslove("Success");
//       }, 3000);
//    });
// };

// async function getAlldata(){
//    await getdata(1);
//    await getdata(2);
//    await getdata(3);
//    await getdata(4);
// }

// function api() {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log("Wether data");
//          resolve("success");
//       }, 200);
//    });
// };

// async function getWeatherData() {
//    await api();
//    await api();
//    await api();

// }

// let promise = getWeatherData();

function getData(dataId) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data", dataId);
         resolve("Success");
       }, 1000);
   });
};

//callback hell
// console.log("Fetching data1.......");
// getData(1, () => {
//   console.log("Fetching data2.......");
//   getData(2, () => {
//     console.log("Fetching data3.......");
//     getData(3);
//   });
// });


//Promise chaine
// getData(1).then((res)=> {
//    return getData(2);
// }).then((res) => {
//    return getData(3);
// }).then((res) => {
//    console.log(res);
// });

//async-awiat
async function getAlldata() {
   await getData(1);
   await getData(2);
   await getData(3);
   await getData(4);
   await getData(5);
}






















//Promise

// const getpromise = () => {
//    return new Promise((resolve, reject) => {
//       console.log("I am promise");
//       //resolve("success");
//       reject("some error occurred");
//    });
// };

// let promise = getpromise();

// promise.then((res) => {
//    console.log("Promimse fullfield",res);
// });

// promise.catch((rej) => {
//    console.log("some error occurred");
// });

// function asyncFuc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("DATA 1");
//       resolve("success");
//     }, 3000);
//   });
// }

// function asyncFuc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("DATA 2");
//       resolve("success");
//     }, 3000);
//   });
// }

// console.log("Fetching data1.....");

// asyncFuc1().then((res) => {
//   console.log("Fetching data2.....");
//   asyncFuc2().then((res) => {
//   });
// });
