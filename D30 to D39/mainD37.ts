//Q109
console.log("\nQuestion#109");

function morningMessage() {
    let dateNow = new Date;
    if (dateNow.getHours() < 12) {
        console.log("Good Morning");
    }
    else {
        console.log("How is your day going?");
    }
}
morningMessage();

//Q110
console.log("\nQuestion#110");
function checkGrade(score: number) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C"
    }
    else if (score >= 60) {
        return "D"
    }
    else {
        return "F"
    }

}
console.log( checkGrade(99));
console.log(checkGrade(59));
console.log(checkGrade(73));

//Q111
console.log("\nQuestion#111");
function categorizeAge(age: number) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(2)); 
console.log(categorizeAge(18)); 
console.log(categorizeAge(43)); 