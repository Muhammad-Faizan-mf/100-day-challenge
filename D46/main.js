"use strict";
//Q136
console.log("Question#136\n");
for (var i = 1; i <= 5; i++) {
    console.log("Iteration ".concat(i, ", i value:, i"));
}
//Q137
console.log("Question#137\n");
try {
    throw new Error("Issue arised.");
}
catch (e) {
    console.log(e.message);
}
//Q138
console.log("Question#138\n");
console.log("Before breakpoint");
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
