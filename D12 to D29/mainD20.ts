// Q#58
console.log("\nQuestion#58");

function avgScore(...scores: number[]): number {
    let total = 0;
    scores.forEach(score => {
        total += score;
    });

    return total / scores.length;
}
console.log(avgScore(1, 1, 1));


// Q#59
console.log("\nQuestion#59");
function makeAdder(valueToAdd: number): (number) => number {
    return function (number: number): number {
        return number + valueToAdd;
    };
}

let addFive = makeAdder(5);
console.log(addFive(10));

// Q#60
console.log("\nQuestion#60");
let user = {
    name: "faizan",
    age: 24,
    getInfo: function () {
        console.log(`User name is ${this.name} and age is ${this.age}`);
    }
}
user.getInfo();
