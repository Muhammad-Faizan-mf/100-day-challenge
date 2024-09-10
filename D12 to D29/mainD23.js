// Q#67
console.log("\nQuestion#67");
function makeNumber(num, stringNum) {
    return num + Number(stringNum);
}
console.log(makeNumber(2, "98"));
// Q#68
console.log("\nQuestion#68");
function decimalProduct(num1, num2) {
    var result = Math.round((num1 * num2) * 100) / 100;
    return result;
}
console.log(decimalProduct(2.4, 3.27777));
// Q#69
console.log("\nQuestion#69");
function remainderAndQuotient(numerator, denomenator) {
    var quotient = numerator / denomenator;
    var remainder = numerator % denomenator;
    var results = {
        quotient: quotient,
        remainder: remainder
    };
    return results;
}
console.log(remainderAndQuotient(9, 11));
