let score = "bikash"; // Initialize a variable with a string value

// Uncomment to check the type of score
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score); // Convert the string value to a number
// Uncomment to check the type and value after conversion
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// Conversion examples:
// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = "bikash"; // Initialize a variable with a non-empty string

let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert the string to a boolean
// Uncomment to check the boolean value
// console.log(booleanIsLoggedIn);

// Conversion to boolean examples:
// 1 => true; 0 => false
// "" => false (empty string is false)
// "bikash" => true (non-empty string is true)

let someNumber = 33; // Initialize a variable with a number

let stringNumber = String(someNumber); // Convert the number to a string
// Uncomment to check the string value and its type
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3; // Initialize a variable with a number
let negValue = -value; // Negate the value
// Uncomment to see the negated value
// console.log(negValue);

// Basic arithmetic operations
// console.log(2 + 2); // Addition
// console.log(2 - 2); // Subtraction
// console.log(2 * 2); // Multiplication
// console.log(2 ** 3); // Exponentiation
// console.log(2 / 3); // Division
// console.log(2 % 3); // Modulus (remainder)

let str1 = "hello"; // Initialize a string variable
let str2 = " bikash"; // Initialize another string variable

let str3 = str1 + str2; // Concatenate the strings
// Uncomment to see the concatenated string
// console.log(str3);

// String and number concatenation examples
// console.log("1" + 2); // "12" (string concatenation)
// console.log(1 + "2"); // "12" (string concatenation)
// console.log("1" + 2 + 2); // "122" (string concatenation)
// console.log(1 + 2 + "2"); // "32" (addition followed by string concatenation)

// Example of operator precedence
// console.log((3 + 4) * 5 % 3); // 2

// Unary plus operator examples
// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3; // Declare multiple variables

num1 = num2 = num3 = 2 + 2; // Assign the result of 2 + 2 to all variables

let gameCounter = 100; // Initialize a counter variable
++gameCounter; // Increment the counter
console.log(gameCounter); // Log the incremented counter

// Link to study type conversion in JavaScript
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
