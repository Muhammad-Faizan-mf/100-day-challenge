// Q#67
console.log("\nQuestion#67");

function makeNumber(num: number, stringNum: string): number {
    return num + Number(stringNum);
}
console.log(makeNumber(2, "98"));


// Q#68
console.log("\nQuestion#68");
function decimalProduct(num1: number, num2: number): number {
    let result = Math.round((num1 * num2) * 100) / 100;
    return result;
}
console.log(decimalProduct(2.4,3.27777));

// Q#69
console.log("\nQuestion#69");
function remainderAndQuotient(numerator: number, denomenator: number): Object{
    let quotient = numerator / denomenator;
    let remainder = numerator % denomenator;
    let results = {
        quotient: quotient,
        remainder: remainder
    }
    return results;
}
console.log(remainderAndQuotient(9,11));
