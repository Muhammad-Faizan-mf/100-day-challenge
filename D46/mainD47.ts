//Q139
console.log("Question#139\n");

// Reserved word: let - used to declare a block-scoped local variable
let count = 5;

// Reserved word: if - used to execute a block of code if a specified condition is true
if (count > 0) {
    console.log("Count is greater than 0.");
}

// Reserved word: return - used to exit a function and return a value from that function
function add(a:number, b:number) {
    return a + b;
}


//Q140
console.log("Question#140\n");

console.log(
    "Using a reserved word as a variable name causes a syntax error in JavaScript."
);



//Q141
console.log("Question#141\n");

async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await 2+2;
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
  }
  
  console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );