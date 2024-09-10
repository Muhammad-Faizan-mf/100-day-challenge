// Q#43
console.log("\nQuestion#43");

let magician: string[] = ["Alice", "Mentos", "Champ"];

function isGreatMagician(magician: string[]): string[] {

    let greatMagicians: any[] = [];
    magician.forEach(mag => {
        greatMagicians.push(`${mag} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = isGreatMagician(magician);
console.log("Original array.\n", magician);
console.log("Great array.\n", greatMagicians);


// Q#44
console.log("\nQuestion#44");
function sandwichIngredients(...items: string[]) {
    console.log(`Items included in sandwich are ${items.join(',')}`);
}

sandwichIngredients("Veggie");
sandwichIngredients("Veggie", "Cheese", "Mayo", "Jalapeno");


// Q#45
console.log("\nQuestion#45");
function carDetails(manufacturer: string, model: string, ...features: [string, any][]): Object {
    let car = { manufacturer, model };
    features.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(carDetails("Toyo", "Cor", ["color", "red"], ["var", "top"]));
console.log(carDetails("Honda", "Civic", ["color", "black"], ["var", "top"], ["sunroof", "yes"]));
