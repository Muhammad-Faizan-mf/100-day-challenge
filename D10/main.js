//Q28
console.log("Question#28");
var age = 25;
if (age < 2) {
    console.log("Baby");
}
else if (age < 4) {
    console.log("Toddler");
}
else if (age < 13) {
    console.log("Kid");
}
else if (age < 20) {
    console.log("Teenager");
}
else if (age < 65) {
    console.log("Adult");
}
else {
    console.log("Elder");
}
//Q29
console.log("Question#29");
// let favorite_fruits: string[] = ["apples", "bananas", "cherries"];
// if (favorite_fruits.includes("bananas")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("apples")) {
//     console.log("You really like apples!");
// }
//Q30
console.log("Question#30");
var usernames = ["admin", "user0", "user1"];
usernames.forEach(function (userName) {
    if (userName == "admin") {
        console.log("Welcome ".concat(userName, " "));
    }
    else {
        console.log("Welcome ".concat(userName, " "));
    }
});
