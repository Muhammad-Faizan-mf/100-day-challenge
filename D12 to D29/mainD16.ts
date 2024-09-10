
// Q#46
console.log("\nQuestion#46");

let laptop = {
    make: "Dell",
    model: "Slim Book 360",
    year: 2024,
    describe: function () {
        console.log(`This laptop was launch on year ${this.year} of company ${this.make} and model ${this.model}.`);

    }
};
laptop.describe();

// Q#47
console.log("\nQuestion#47");
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
for (let i = 0; i < 2; i++) {
    console.log(laptops[i]);
}

// Q#48
console.log("\nQuestion#48");

let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort();
console.log(combinedPrices);