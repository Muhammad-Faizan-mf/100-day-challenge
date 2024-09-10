var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q16
console.log("Question#16");
var guests = ["Ali", "John", "Moon"];
console.log("I have more space for guests.");
guests.unshift("Sam");
guests.splice(guests.length / 2, 0, "Zaphyer");
guests.push("Ava");
guests.forEach(function (guest) {
    console.log("Hi, ".concat(guest, ", you are invited!"));
});
//Q17
console.log("\nQuestion#17");
console.log("I can only invite to 2 people.");
guests = guests.slice(0, 2);
guests.forEach(function (guest) {
    console.log("Hi, ".concat(guest, ", you are still invited!"));
});
//Q18
console.log("\nQuestion#18");
var places = ["Houston", "Germany", "Austria", "Japn",];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
