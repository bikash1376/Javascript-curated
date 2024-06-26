// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // Number type
const scoreValue = 100.3; // Number type

const isLoggedIn = false; // Boolean type
const outsideTemp = null; // null type
let userEmail; // undefined type

const id = Symbol('123'); // Symbol type
const anotherId = Symbol('123'); // Another Symbol type

// Symbols are unique, even if they have the same description
console.log(id === anotherId); // false

// Uncomment to declare a BigInt (uncomment the next line if BigInt is needed)
// const bigNumber = 3456543576654356754n;

// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array type
let myObj = {
    name: "bikash",
    age: 22,
}; // Object type

const myFunction = function() {
    console.log("Hello world");
}; // Function type

// Checking the type of a variable
console.log(typeof anotherId); // Logs 'symbol'

// Link to ECMAScript documentation for more details on data types
// https://262.ecma-international.org/5.1/#sec-11.4.3
