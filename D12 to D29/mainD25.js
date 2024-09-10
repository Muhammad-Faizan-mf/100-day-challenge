// Q#73
console.log("\nQuestion#73");
var value = 4;
console.log("Initial value ".concat(value));
value++;
console.log("Updated value ".concat(value));
// Q#74
console.log("\nQuestion#74");
function swap(num1, num2) {
    console.log("Value before swap are ".concat(num1, " ").concat(num2));
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("Value after swap are ".concat(num1, " ").concat(num2));
}
swap(99, 23);
// Q#75
console.log("\nQuestion#75");
function useCompoundOperators() {
    var x = 52;
    console.log("Initial x:", x);
    x += 4;
    console.log("After addition:", x);
    x *= 1;
    console.log("After multiplication:", x);
    x -= 1;
    console.log("After subtraction:", x);
    x /= 2;
    console.log("After division:", x);
}
useCompoundOperators();
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.
