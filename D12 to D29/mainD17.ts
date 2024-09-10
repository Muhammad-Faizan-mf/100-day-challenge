// Q#49
console.log("\nQuestion#49");

function hobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`One of my hobby is to ${hobby}`);
    });
}

hobbies("reading");
hobbies("reading", "cricked", "football");

// Q#50
console.log("\nQuestion#50");
let myDay: string =`My good day is when:
1. When I wake up early.
2. Complete me tasks.
3. Go to bed early.
`;
console.log(myDay);


// Q#51
console.log("\nQuestion#51");
let areaOfRectangle = (width:number, height: number): number => width * height;
console.log(areaOfRectangle(4,2));

