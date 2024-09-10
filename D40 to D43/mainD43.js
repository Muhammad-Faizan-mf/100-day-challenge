//Q127
console.log("Question#127");
function traditionalFunction(a, b) {
    console.log("".concat(a, " + ").concat(b, " = "));
    return a + b;
}
var arrowFunction = function (a, b) {
    console.log("".concat(a, " + ").concat(b, " = "));
    return a + b;
};
console.log(traditionalFunction(1, 1));
console.log(arrowFunction(2, 2));
//Q128
console.log("Question#128");
var multipleParams = function (number) {
    var result = 1;
    for (var i = 0; i < number.length; i++) {
        result *= number[i];
    }
    return result;
};
console.log(multipleParams([2, 2, 2]));
console.log(multipleParams([3, 3, 4]));
