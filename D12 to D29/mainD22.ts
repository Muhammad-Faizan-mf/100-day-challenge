// Q#64
console.log("\nQuestion#64");
function stringCombination(text: string, no:number): string{
    return text+' '+no;
}
console.log(stringCombination("Faizna",24));


// Q#65
console.log("\nQuestion#65");
function findRemainder(num1: number, num2: number): number{
    let rem =num1 % num2;
    return rem;
}
console.log(findRemainder(3,22));


// Q#66
console.log("\nQuestion#66");
function checkTrue(operator1: boolean,operator2: boolean):boolean{
    return operator1 && operator2;
}
console.log(checkTrue(false,true));

