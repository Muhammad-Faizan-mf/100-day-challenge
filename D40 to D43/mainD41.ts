//Q121
console.log("Question#121");

for (let i = 1; i <= 10; i++) {
    if (i == 5)
        continue;
    console.log(i);
}

//Q122
console.log("Question#122");
let count = 10;
while (count > 0) {
    if (count == 5)
        break;
    console.log(count);
    count--;
}


//Q123
console.log("Question#123");
function checkVowels(str: string) {
    let vowels = "aeiouAEIOU";
    for (let j = 0; j < str.length; j++) {
        var char = str[j];
        if (vowels.includes(char)) {
            console.log(`Vowel found ${char}`);
            break;
        }
        else {
            console.log(char);
        }
    }
}
checkVowels("swaewq");
checkVowels("rrrrrrr");