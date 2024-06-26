"use strict"; // Treat all JS code as newer version (ES6+)

// alert( 3 + 3) // We are using Node.js, not a browser

console.log(3 
    +
     3); // Ensure high code readability by aligning operators and operands

console.log("bikash"); // Log the string "bikash" to the console

// Declare variables with let and initialize them
let name = "bikash"; // Variable to store the name
let age = 20; // Variable to store the age
let isLoggedIn = false; // Variable to store login status
let state; // Variable declared but not initialized

// Data types in JavaScript
// number => Numeric values (up to 2^53)
// bigint => Large integers
// string => Text values enclosed in quotes ("")
// boolean => true/false values
// null => Represents a standalone value
// undefined => Represents an uninitialized value
// symbol => Unique and immutable data type

// object => Collections of key-value pairs

// Demonstrate the use of typeof operator
console.log(typeof undefined); // Logs 'undefined' (type of undefined)
console.log(typeof null); // Logs 'object' (type of null, which is historically an object)
