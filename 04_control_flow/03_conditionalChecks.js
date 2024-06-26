// Example of conditional checks and operators

const userEmail = []; // Initialize an empty array for user email

// Check if userEmail is truthy
if (userEmail) {
    console.log("Got user email"); // This will execute because an empty array is truthy
} else {
    console.log("Don't have user email"); // This will not execute
}

// Falsy values in JavaScript
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values in JavaScript
// "0", 'false', " ", [], {}, function(){}

// Check if userEmail array is empty
// if (userEmail.length === 0) {
//     console.log("Array is empty"); // This will execute because the array is empty
// }

const emptyObj = {}; // Initialize an empty object

// Check if the object is empty by checking the length of its keys
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // This will execute because the object has no keys
}

// Nullish Coalescing Operator (??): checks for null or undefined

let val1;
// Examples of using the Nullish Coalescing Operator
// val1 = 5 ?? 10; // val1 will be 5 because 5 is not null or undefined
// val1 = null ?? 10; // val1 will be 10 because null is nullish
// val1 = undefined ?? 15; // val1 will be 15 because undefined is nullish
val1 = null ?? 10 ?? 20; // val1 will be 10 because null is nullish and 10 is not

console.log(val1); // Log the value of val1

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100; // Price of ice tea
// Use the ternary operator to check the price
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // Logs "more than 80"
