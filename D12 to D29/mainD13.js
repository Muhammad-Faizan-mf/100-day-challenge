// Q#37
console.log("\nQuestion#37");
function shirtDetails(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "Code everyday."; }
    console.log("Shirt of size ".concat(size, " and message on it \"").concat(message, "\""));
}
shirtDetails();
shirtDetails("XL", "Stay Focus");
// Q#38
console.log("\nQuestion#38");
function city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("City is ".concat(city, " in country ").concat(country, "."));
}
city("karachi");
city("Delhi", "India");
// Q#39
console.log("\nQuestion#39");
function cityAndCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(cityAndCountry("Karachi", "Pakistan"));
console.log(cityAndCountry("Houston", "Texas"));
