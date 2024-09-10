// Q#55
console.log("\nQuestion#55");
let numbers = [3,4,1,5,7];
console.log(numbers.map(number => number *2));

// Q#56
console.log("\nQuestion#56");
let arr= [1,"name",2, "age",3,"text"];
let strArr=arr.filter(ar=> typeof ar==="string");
console.log(`String array is ${strArr}`);

// Q#57
console.log("\nQuestion#57");
let grades=[78,98,33,78];
let avg=0;
grades.forEach(marks => {
    avg += marks;
});
avg = avg/grades.length;
console.log(avg);
