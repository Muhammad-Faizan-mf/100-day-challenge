// Q#82
console.log("\nQuestion#82");

function lengthOfString(text: string):number{
    return text.length;
}
console.log(lengthOfString("How are you?"));


// Q#83
console.log("\nQuestion#83");

function caseChange(text: string){
    let inUpper = text.toUpperCase();
    let inLower = text.toLowerCase();
    console.log(`In Uppercase: ${inUpper} \nIn Lowercase: ${inLower}`);
}
caseChange("How have your day been!");


// Q#84
console.log("\nQuestion#84");

function replaceString(text: string): string{
    let newString = text.replace(/JS/g, "TSC");
    return newString;
}
console.log(replaceString("I love JS! And learning JS."));

