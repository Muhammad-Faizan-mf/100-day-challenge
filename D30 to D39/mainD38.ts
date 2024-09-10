//Q112
console.log("\nQuestion#112");
var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);

//Q113
console.log("\nQuestion#113");

function containsKey(country: string) {
    if (countries.has(country)) {
        console.log(`Capital for ${country} is ${countries.get(country)}`)
    }
    else {
        console.log(`${country} is not in map.`)
    }
}
containsKey("Canada");
containsKey("USA");


//Q114
console.log("\nQuestion#114");
let students = new Map();
students.set(1, "Faizan")
students.set(2, "Ali")
students.set(3, "Akbar")
students.forEach(function (name, id) {
    console.log(`ID: ${id} and Name: ${name}`)
});
