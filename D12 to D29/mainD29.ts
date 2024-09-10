// Q#85
console.log("\nQuestion#85");
function findString( text: string): number{
    return text.indexOf("code");
}
console.log(findString("I love to code!"));


// Q#86
console.log("\nQuestion#86");
// function findWord( text: string): boolean{
//     return text.includes("code");
// }
// console.log(findWord("I love to code!"));


// Q#87
console.log("\nQuestion#87");
function findSubString( text: string): string{
    return text.substring(0,10);
}
console.log(findSubString("I love to code!"));