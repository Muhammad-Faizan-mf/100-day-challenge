//Q91
console.log("Question#91");
var favFruits = ["apple", "banana", "strawberry"];
console.log("Original array ".concat(favFruits, "."));
favFruits.push("mango");
console.log("After new element ".concat(favFruits, "."));
//Q92
console.log("\nQuestion#92");
function removedElement(favFruits) {
    return favFruits.pop();
}
console.log(removedElement(favFruits));
console.log(favFruits);
//Q93
console.log("\nQuestion#93");
function arrayReplace(favFruits) {
    var indexAt = favFruits.indexOf("banana");
    if (indexAt != -1)
        favFruits[indexAt] = "mango";
}
arrayReplace(favFruits);
console.log(favFruits);
