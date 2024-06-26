const score = 400; // Declare a constant variable for score
// Uncomment to log the score
// console.log(score);

const balance = new Number(100); // Create a new Number object
// Uncomment to log the balance
// console.log(balance);

// Get the length of the string representation of balance
// console.log(balance.toString().length);

// Get the balance with one decimal place
// console.log(balance.toFixed(1));

const otherNumber = 123.8966; // Declare a variable for another number

// Get the number with a specified precision
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000; // Declare a variable for a large number

// Convert the number to a locale-specific string format
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Log the Math object to see available methods and properties
// console.log(Math);

// Get the absolute value of a number
// console.log(Math.abs(-4));

// Round a number to the nearest integer
// console.log(Math.round(4.6));

// Round a number up to the nearest integer
// console.log(Math.ceil(4.2));

// Round a number down to the nearest integer
// console.log(Math.floor(4.9));

// Get the minimum value from a list of numbers
// console.log(Math.min(4, 3, 6, 8));

// Get the maximum value from a list of numbers
// console.log(Math.max(4, 3, 6, 8));

// Generate a random number between 0 and 1
console.log(Math.random());

// Generate a random number between 1 and 10
console.log((Math.random() * 10) + 1);

// Generate a random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10; // Declare a constant for the minimum value
const max = 20; // Declare a constant for the maximum value

// Generate a random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
