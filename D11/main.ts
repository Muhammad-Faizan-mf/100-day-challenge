//Q31
console.log("Question#31");

let usernames: string[] = ["admin", "user0", "user1"];
if (usernames.length > 0) {
    usernames.forEach(userName => {
        if (userName == "admin") {
            console.log(`Welcome ${userName} `);

        }
        else {
            console.log(`Welcome ${userName} `);

        }
    });
} else {
    console.log("No users.");

}

//Q32
console.log("Question#32");

let current_users: string[] = ["user1", "user2", "user3"];
let new_users: string[] = ["user1", "user4", "user3"];

current_users.forEach(current_user =>{
    new_users.forEach(new_user =>{
        if(current_user.toLowerCase() == new_user.toLowerCase()){
            console.log(`Username ${new_user} needs to be changed`);
            
        }
    });
});