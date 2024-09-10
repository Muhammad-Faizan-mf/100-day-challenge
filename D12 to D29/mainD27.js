// Q#79
console.log("\nQuestion#79");
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2025
};
console.log(car.model);
// Q#80
console.log("\nQuestion#80");
// car.color = "red";
car.year = 2024;
console.log(car);
// Q#81
console.log("\nQuestion#81");
function printObject(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
printObject(car);
