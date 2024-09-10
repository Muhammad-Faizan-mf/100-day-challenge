export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        console.log(`Hey, my name is ${this.name}`);
    }
}