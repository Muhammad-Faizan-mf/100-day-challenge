"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-promise/auto");
//Q142
console.log("Question#142\n");
// const promiseHello = new Promise<string>((resolve) => {
//     setTimeout(() => {
//         resolve("Hello, World.!");
//     }, 2000);
// });
// promiseHello.then((message) => console.log(message));
//Q143
console.log("Question#143\n");
// const conditionalPromise = new Promise<string>((resolve, reject) => {
//     const success = Math.random() > 0.5;
//     if (success) {
//         resolve("Succes!");
//     }
//     else {
//         reject(new Error("Failure"));
//     }
// });
// conditionalPromise.then((result)=>console.log(result)).catch((error)=>console.log(error.message));
//Q143
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // Outputs: [3, 42, "foo"]
});
