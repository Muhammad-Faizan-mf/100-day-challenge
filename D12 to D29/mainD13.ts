// Q#37
console.log("\nQuestion#37");

function shirtDetails(size:string = "L", message:string = "Code everyday."){
    console.log(`Shirt of size ${size} and message on it "${message}"`);
}
shirtDetails();
shirtDetails("XL", "Stay Focus");

// Q#38
console.log("\nQuestion#38");
function city(city: string, country: string= "Pakistan"){
    console.log(`City is ${city} in country ${country}.`);
}
city("karachi");
city("Delhi","India");


// Q#39
console.log("\nQuestion#39");
function cityAndCountry(city: string, country:string){
    return `${city}, ${country}`;
}
console.log(cityAndCountry("Karachi","Pakistan"));
console.log(cityAndCountry("Houston", "Texas"));
