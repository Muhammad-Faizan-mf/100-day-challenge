// Q#43
console.log("\nQuestion#43");
var magician = ["Alice", "Mentos", "Champ"];
function isGreatMagician(magician) {
    var greatMagicians = [];
    magician.forEach(function (mag) {
        greatMagicians.push("".concat(mag, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = isGreatMagician(magician);
console.log("Original array.\n", magician);
console.log("Great array.\n", greatMagicians);
// Q#44
console.log("\nQuestion#44");
function sandwichIngredients() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Items included in sandwich are ".concat(items.join(',')));
}
sandwichIngredients("Veggie");
sandwichIngredients("Veggie", "Cheese", "Mayo", "Jalapeno");
// Q#45
console.log("\nQuestion#45");
function carDetails(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    features.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(carDetails("Toyo", "Cor", ["color", "red"], ["var", "top"]));
console.log(carDetails("Honda", "Civic", ["color", "black"], ["var", "top"], ["sunroof", "yes"]));
