// Q#49
console.log("\nQuestion#49");
function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("One of my hobby is to ".concat(hobby));
    });
}
hobbies("reading");
hobbies("reading", "cricked", "football");
// Q#50
console.log("\nQuestion#50");
var myDay = "My good day is when:\n1. When I wake up early.\n2. Complete me tasks.\n3. Go to bed early.\n";
console.log(myDay);
// Q#51
console.log("\nQuestion#51");
var areaOfRectangle = function (width, height) { return width * height; };
console.log(areaOfRectangle(4, 2));
