// Q#52
console.log("\nQuestion#52");
var phoneDetails = {
    make: "Iphone",
    mode: "12 Pro Max",
    specs: {
        storage: "512GB",
        displaySize: "6 Inch",
        batteryLife: "18 Hours"
    }
};
console.log(phoneDetails);
// Q#53
console.log("\nQuestion#53");
var devSkills = {
    languages: ["JS", "PHP", "ROR"],
    framework: ["React", "Laravel", "Docker"],
    tools: ["vs code", "git", "composer"]
};
for (var i = 0; i < 3; i++) {
    console.log("Languagw: ".concat(devSkills.languages[i], ", Framework: ").concat(devSkills.framework[i], ", Tools: ").concat(devSkills.tools[i]));
}
// Q#54
console.log("\nQuestion#54");
function dynamicObject(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
}
var dynamicDetails = dynamicObject("name", "faizan");
console.log(dynamicDetails);
