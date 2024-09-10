//Q94
console.log("\nQuestion#94");

let words: string[] = ["what", "name", "time", "temporary record", "conceptualisation"];
let lengthOfWord: number[] = words.map(word => word.length);

words.forEach((word,i) => {
    console.log(`The word "${word}" is of length ${lengthOfWord[i]}.`);   
});
console.log(lengthOfWord);



//Q95
console.log("\nQuestion#95");
function filterLength(number:number[]): number[]{
    return number.filter(num => num>10)
}
console.log(`Length greater then 10 are: ${filterLength(lengthOfWord)}`);


//Q96
console.log("\nQuestion#96");
function arraySum(numbers:number[]): number{
    return numbers.reduce((i,j)=>i+j);
}
console.log(arraySum(lengthOfWord));
