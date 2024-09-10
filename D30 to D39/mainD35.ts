//Q103
console.log("\nQuestion#103");

function randomBoolean(): boolean {
    return (Math.random() * 10) > 5;
}
console.log(randomBoolean());

//Q104
console.log("\nQuestion#104");
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(getRandomHexColor());

//Q105
console.log("\nQuestion#105");
function rollTheDice(): number {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollTheDice());