//Q97
console.log("\nQuestion#97");
function formatedDate() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0');
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(formatedDate());
//Q98
console.log("\nQuestion#98");
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
//Q99
console.log("\nQuestion#99");
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(12, 25);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
