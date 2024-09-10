//Q124
console.log("Question#124");

var person = {
    name: "Faizan",
    getName: function () {
        return this.name;
    }
};
console.log(person.getName());

//Q125
console.log("Question#125");

var Details = {
    name: "Faizan",
    age: 25,
    getDetails: function () {
        return `Name: ${this.name} and Age: ${this.age}`;
    }
};
console.log(Details.getDetails());


//Q126
console.log("Question#126");

var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property); 
        var innerMethod = function () {
            console.log(_this.property); 
        };
        innerMethod();
    },
};
myObject.outerMethod();