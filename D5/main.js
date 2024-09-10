//Q13
console.log("Question#13");
var favTransports = ["Suzuki Gixer", "Toyota Crown", "Honda Civic", "EV Motorcycle"];
favTransports.forEach(function (favTransport) {
    console.log("I would like to own a ".concat(favTransport, "."));
});
//Q14
console.log("\nQuestion#14");
var guests = ["Ali", "Zara", "John"];
guests.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", you are invited for dinner."));
});
//Q15
console.log("\nQuestion#15");
var unableToAttend = "Ali";
console.log("".concat(unableToAttend, " will not come."));
var newGuest = "Leo";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", you are invited for dinner."));
});
