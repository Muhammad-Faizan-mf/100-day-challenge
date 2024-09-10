// Q#70
console.log("\nQuestion#70");

function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbers();

// Q#71
console.log("\nQuestion#71");
 function letAndConstComparison(){
    let name = "Ali";
    name = "Faizan";
    const age = 4;
    try{
        // age= 99;
    }catch(error){
        console.log("cannot re assign to const.");
        
    }
 }

// Q#72
console.log("\nQuestion#72");
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); 
    console.log(blockConst); 
}

// try {
//     console.log(blockLet); 
// } catch (error) {
//     console.log("`blockLet` is not accessible outside the block.");
// }

// try {
//     console.log(blockConst); 
// } catch (error) {
//     console.log("`blockConst` is not accessible outside the block.");
// }
