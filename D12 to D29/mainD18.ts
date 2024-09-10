
// Q#52
console.log("\nQuestion#52");

let phoneDetails = {
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

let devSkills = {
    languages: ["JS", "PHP", "ROR"],
    framework: ["React", "Laravel", "Docker"],
    tools: ["vs code", "git", "composer"]
};
for (let i = 0; i < 3; i++) {
    console.log(`Languagw: ${devSkills.languages[i]}, Framework: ${devSkills.framework[i]}, Tools: ${devSkills.tools[i]}`);
}

// Q#54
console.log("\nQuestion#54");

function dynamicObject(key:string,value: string){
    let obj={};
    obj[key] = value;
    return obj;
}
let dynamicDetails = dynamicObject("name","faizan");
console.log(dynamicDetails);
