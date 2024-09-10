//Q16
console.log("Question#16");
let guests: string[] = ["Ali", "John", "Moon"];
console.log("I have more space for guests.");

guests.unshift("Sam");
guests.splice(guests.length/2,0,"Zaphyer");
guests.push("Ava");

guests.forEach(guest =>{
    console.log(`Hi, ${guest}, you are invited!`);
});

//Q17
console.log("\nQuestion#17");
console.log("I can only invite to 2 people.");
guests = guests.slice(0,2);
guests.forEach(guest =>{
    console.log(`Hi, ${guest}, you are still invited!`);
});

//Q18
console.log("\nQuestion#18");
let places: string[] = ["Houston", "Germany", "Austria", "Japn",];

console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);