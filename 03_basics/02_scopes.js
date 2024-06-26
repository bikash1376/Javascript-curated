// Example of block scope with let and const
// var c = 300 // Uncomment to declare a variable with var (function-scoped)
let a = 300; // Declare a variable with let (block-scoped)
if (true) {
    let a = 10; // Declare a new variable a within this block
    const b = 20; // Declare a constant b within this block
    // Uncomment to log the inner block-scoped variable a
    // console.log("INNER: ", a);
}

// Uncomment to log the outer block-scoped variable a
// console.log(a); // Logs 300, as the outer variable a is not affected by the inner block
// console.log(b); // Error: b is not defined outside the block
// console.log(c); // Error if var c is commented out; otherwise, logs 300 (function-scoped variable)

// Example of function scope and nested functions
function one() {
    const username = "bikash"; // Declare a constant username within function one

    function two() {
        const website = "youtube"; // Declare a constant website within function two
        console.log(username); // Access the username from the outer function
    }
    // Uncomment to log the website (Error: website is not defined in this scope)
    // console.log(website);

    two(); // Call the nested function two
}

// Uncomment to call the function one
// one();

if (true) {
    const username = "bikash"; // Declare a constant username within this block
    if (username === "bikash") {
        const website = " youtube"; // Declare a constant website within the nested block
        // Uncomment to log the username and website
        // console.log(username + website);
    }
    // Uncomment to log the website (Error: website is not defined outside the nested block)
    // console.log(website);
}

// Uncomment to log the username (Error: username is not defined outside the block)
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

// Function declaration (hoisted)
console.log(addone(5)); // Logs 6, as function declarations are hoisted

function addone(num) {
    return num + 1; // Function to add one to the input number
}

// Function expression (not hoisted)
// Uncomment to call the function addTwo (Error: Cannot access 'addTwo' before initialization)
// addTwo(5);

const addTwo = function(num) {
    return num + 2; // Function to add two to the input number
};
