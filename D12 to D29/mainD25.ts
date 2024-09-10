// Q#73
console.log("\nQuestion#73");

let value = 4;
console.log(`Initial value ${value}`);
value++;
console.log(`Updated value ${value}`);


// Q#74
console.log("\nQuestion#74");
function swap(num1: number, num2: number) {
    console.log(`Value before swap are ${num1} ${num2}`);
    let temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`Value after swap are ${num1} ${num2}`);
}
swap(99, 23);


// Q#75
console.log("\nQuestion#75");
function useCompoundOperators() {
    let x = 52;
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
