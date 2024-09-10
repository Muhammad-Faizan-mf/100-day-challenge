// Q#70
console.log("\nQuestion#70");
function printNumbers() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbers();
// Q#71
console.log("\nQuestion#71");
function letAndConstComparison() {
    var name = "Ali";
    name = "Faizan";
    var age = 4;
    try {
        // age= 99;
    }
    catch (error) {
        console.log("cannot re assign to const.");
    }
}
