// Q#34
console.log("Question#34");
var favPizza = ["Peperoni", "Tikka", "Vegie", "Fajita"];
favPizza.forEach(function (flavour) {
    console.log("My favourite pizza flavour is ".concat(flavour, "."));
});
// Q#35
console.log("\nQuestion#35");
var animals = ["cat", "dog", "elephant", "Kangaroo"];
animals.forEach(function (animal) {
    console.log("I love ".concat(animal));
});
// Q#36
console.log("\nQuestion#36");
function shirtDetails(size, message) {
    console.log("Shirt of size ".concat(size, " and message on it \"").concat(message, "\""));
}
shirtDetails("XL", "Stay Focus");
