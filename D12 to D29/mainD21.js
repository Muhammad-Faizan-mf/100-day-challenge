// Q#61
console.log("\nQuestion#61");
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Truck"] = 1] = "Truck";
    Vehicles[Vehicles["Motorcycle"] = 2] = "Motorcycle";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.Truck);
// Q#62
console.log("\nQuestion#62");
var student = {
    name: "Alice",
    age: 22,
    courses: ["English", "Pst", "Urdu"]
};
console.log(student);
// Q#63
console.log("\nQuestion#63");
var circle = {
    kind: "circle",
    radius: 4
};
var rectangle = {
    kind: "rectangle",
    lenght: 4,
    width: 2
};
console.log(circle);
console.log(rectangle);
