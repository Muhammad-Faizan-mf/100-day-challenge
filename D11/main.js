//Q31
console.log("Question#31");
var usernames = ["admin", "user0", "user1"];
if (usernames.length > 0) {
    usernames.forEach(function (userName) {
        if (userName == "admin") {
            console.log("Welcome ".concat(userName, " "));
        }
        else {
            console.log("Welcome ".concat(userName, " "));
        }
    });
}
else {
    console.log("No users.");
}
//Q32
console.log("Question#32");
var current_users = ["user1", "user2", "user3"];
var new_users = ["user1", "user4", "user3"];
current_users.forEach(function (current_user) {
    new_users.forEach(function (new_user) {
        if (current_user.toLowerCase() == new_user.toLowerCase()) {
            console.log("Username ".concat(new_user, " needs to be changed"));
        }
    });
});
