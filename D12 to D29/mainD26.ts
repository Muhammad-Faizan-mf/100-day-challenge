// Q#76
console.log("\nQuestion#76");
function sum(value1: number, value2: number) {
    return value1 + value2;
}
console.log(sum(99, 2));


// Q#77
console.log("\nQuestion#77");
function greet(name: string = "no name") {
    console.log(`Hello ${name}`);
}
greet();
greet("Faizan");


// Q#78
console.log("\nQuestion#78");
function funcDeclaration(number: number): number {
    return number * number;
}
console.log(funcDeclaration(4));
const funcExpression = function (number: number): number {
    return number * number;
}
console.log(funcExpression(3));


