//Q133
console.log("Question#133\n");
var Person = {
    name: "Faizan",
    age: 25,
    city: "Karachi",
};
var intoJSON = JSON.stringify(Person);
console.log(intoJSON);
//Q134
console.log("Question#134\n");
var inJSON = "{\n    \"name\":\"faizan\",\n    \"age\":25,\n    \"city\":\"Karachi\"\n}";
var person = JSON.parse(inJSON);
console.log(person);
//Q135
console.log("Question#135\n");
var jsonString = JSON.stringify(Person, null, 5);
console.log(jsonString);
