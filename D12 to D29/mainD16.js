var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q#46
console.log("\nQuestion#46");
var laptop = {
    make: "Dell",
    model: "Slim Book 360",
    year: 2024,
    describe: function () {
        console.log("This laptop was launch on year ".concat(this.year, " of company ").concat(this.make, " and model ").concat(this.model, "."));
    }
};
laptop.describe();
// Q#47
console.log("\nQuestion#47");
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
for (var i = 0; i < 2; i++) {
    console.log(laptops[i]);
}
// Q#48
console.log("\nQuestion#48");
var pricesSet1 = [1200, 1500, 1100];
var pricesSet2 = [1000, 1300, 1600];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort();
console.log(combinedPrices);
