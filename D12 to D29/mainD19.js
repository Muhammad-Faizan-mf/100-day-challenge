// Q#55
console.log("\nQuestion#55");
var numbers = [3, 4, 1, 5, 7];
console.log(numbers.map(function (number) { return number * 2; }));
// Q#56
console.log("\nQuestion#56");
var arr = [1, "name", 2, "age", 3, "text"];
var strArr = arr.filter(function (ar) { return typeof ar === "string"; });
console.log("String array is ".concat(strArr));
// Q#57
console.log("\nQuestion#57");
var grades = [78, 98, 33, 78];
var avg = 0;
grades.forEach(function (marks) {
    avg += marks;
});
avg = avg / grades.length;
console.log(avg);
