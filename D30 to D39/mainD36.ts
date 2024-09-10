//Q106
console.log("\nQuestion#106");

function isLeapYear(year: number): boolean {
    return (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2024));

//Q107
console.log("\nQuestion#107");

function divisbleCheck(number: number): boolean {
    return (number % 2 == 0 && number % 3 == 0);
}
console.log(divisbleCheck(9));
console.log(divisbleCheck(89));
console.log(divisbleCheck(6));


//Q108
console.log("\nQuestion#108");
function stringMatch(str1: string, str2:string): boolean{
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(stringMatch("Faizan","faizan"));
console.log(stringMatch("Faizan is working","faizan"));