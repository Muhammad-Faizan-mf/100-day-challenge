//Q91
console.log("Question#91");
let favFruits = ["apple", "banana", "strawberry"];
console.log(`Original array ${favFruits}.`);
favFruits.push("mango");
console.log(`After new element ${favFruits}.`);

//Q92
console.log("\nQuestion#92");
function removedElement<T>(favFruits: T[]): T | undefined {
    return favFruits.pop();
}

console.log(removedElement(favFruits));
console.log(favFruits);


//Q93
console.log("\nQuestion#93");
function arrayReplace(favFruits: string[]): void{
    let indexAt = favFruits.indexOf("banana");
    if(indexAt!=-1)
        favFruits[indexAt]= "mango"
}
arrayReplace(favFruits);
console.log(favFruits);
