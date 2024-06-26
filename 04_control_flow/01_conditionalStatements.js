// Conditional Statements and Logical Operations

const isUserloggedIn = true; // Boolean indicating if the user is logged in
const temperature = 41; // Current temperature

// Check if the temperature is exactly 40
// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// Log a message indicating execution
// console.log("Execute");

// Comparison operators: <, >, <=, >=, ==, !=, ===, !==

// Example of using an if statement with a variable
// const score = 200;

// Check if the score is greater than 100
// if (score > 100) {
//     let power = "fly"; // Declare a block-scoped variable
//     console.log(`User power: ${power}`); // Log the user's power
// }

// Uncommenting the next line will cause an error because 'power' is not defined outside the block
// console.log(`User power: ${power}`);

// Example of using an if statement with a single-line body
// const balance = 1000;

// If balance is greater than 500, log two messages
// if (balance > 500) console.log("test"),console.log("test2");

// Check balance and log appropriate messages
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

// Logical operations with multiple conditions
const userLoggedIn = true; // Boolean indicating if the user is logged in
const debitCard = true; // Boolean indicating if the user has a debit card
const loggedInFromGoogle = false; // Boolean indicating if the user logged in from Google
const loggedInFromEmail = true; // Boolean indicating if the user logged in from email

// Check if the user is logged in, has a debit card, and 2 equals 3 (always false)
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course"); // This will not execute
}

// Check if the user logged in from Google or email
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // This will execute
}
