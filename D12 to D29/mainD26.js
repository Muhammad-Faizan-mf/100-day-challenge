// Q#76
console.log("\nQuestion#76");
function sum(value1, value2) {
    return value1 + value2;
}
console.log(sum(99, 2));
// Q#77
console.log("\nQuestion#77");
function greet(name) {
    if (name === void 0) { name = "no name"; }
    console.log("Hello ".concat(name));
}
greet();
greet("Faizan");
// Q#78
console.log("\nQuestion#78");
function funcDeclaration(number) {
    return number * number;
}
console.log(funcDeclaration(4));
var funcExpression = function (number) {
    return number * number;
};
console.log(funcExpression(3));
