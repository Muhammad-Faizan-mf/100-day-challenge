//Q94
console.log("\nQuestion#94");
var words = ["what", "name", "time", "temporary record", "conceptualisation"];
var lengthOfWord = words.map(function (word) { return word.length; });
words.forEach(function (word, i) {
    console.log("The word \"".concat(word, "\" is of length ").concat(lengthOfWord[i], "."));
});
console.log(lengthOfWord);
//Q95
console.log("\nQuestion#95");
function filterLength(number) {
    return number.filter(function (num) { return num > 10; });
}
console.log("Length greater then 10 are: ".concat(filterLength(lengthOfWord)));
//Q96
console.log("\nQuestion#96");
function arraySum(numbers) {
    return numbers.reduce(function (i, j) { return i + j; });
}
console.log(arraySum(lengthOfWord));
