// Q#82
console.log("\nQuestion#82");
function lengthOfString(text) {
    return text.length;
}
console.log(lengthOfString("How are you?"));
// Q#83
console.log("\nQuestion#83");
function caseChange(text) {
    var inUpper = text.toUpperCase();
    var inLower = text.toLowerCase();
    console.log("In Uppercase: ".concat(inUpper, " \nIn Lowercase: ").concat(inLower));
}
caseChange("How have your day been!");
// Q#84
console.log("\nQuestion#84");
function replaceString(text) {
    var newString = text.replace(/JS/g, "TSC");
    return newString;
}
console.log(replaceString("I love JS! And learning JS."));
