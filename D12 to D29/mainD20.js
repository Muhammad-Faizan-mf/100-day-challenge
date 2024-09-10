// Q#58
console.log("\nQuestion#58");
function avgScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = 0;
    scores.forEach(function (score) {
        total += score;
    });
    return total / scores.length;
}
console.log(avgScore(1, 1, 1));
// Q#59
console.log("\nQuestion#59");
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(5);
console.log(addFive(10));
// Q#60
console.log("\nQuestion#60");
var user = {
    name: "faizan",
    age: 24,
    getInfo: function () {
        console.log("User name is ".concat(this.name, " and age is ").concat(this.age));
    }
};
user.getInfo();
