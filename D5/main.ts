//Q13
console.log("Question#13");
let favTransports: string[] = ["Suzuki Gixer", "Toyota Crown", "Honda Civic", "EV Motorcycle"];
favTransports.forEach(favTransport => {
    console.log(`I would like to own a ${favTransport}.`);
});

//Q14
console.log("\nQuestion#14");
let guests: string[] = ["Ali", "Zara", "John"];
guests.forEach(guest => {
    console.log(`Hello ${guest}, you are invited for dinner.`);
});

//Q15
console.log("\nQuestion#15");
let unableToAttend = "Ali";
console.log(`${unableToAttend} will not come.`);
let newGuest: string = "Leo";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Hello ${guest}, you are invited for dinner.`);
});
