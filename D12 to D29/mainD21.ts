// Q#61
console.log("\nQuestion#61");

enum Vehicles{
    Car,
    Truck,
    Motorcycle
}
console.log(Vehicles.Truck);


// Q#62
console.log("\nQuestion#62");

interface Student{
    name:string,
    age:number,
    courses: string[]
}

let student:Student = {
    name:"Alice",
    age: 22,
    courses: ["English", "Pst","Urdu"]
}
console.log(student);



// Q#63
console.log("\nQuestion#63");
type Shape =  {
    kind: "circle" | "rectangle",
    radius ?: number,
    lenght ?: number,
    width ?: number
}

let circle: Shape={
    kind: "circle",
    radius: 4
};
let rectangle:Shape ={
    kind: "rectangle",
    lenght : 4,
    width : 2
}
console.log(circle);
console.log(rectangle);

