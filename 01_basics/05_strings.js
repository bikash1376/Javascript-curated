const name = "bikash"; // Declare a constant variable for the name
const repoCount = 50; // Declare a constant variable for the repository count

// Uncomment to concatenate strings and variables
// console.log(name + repoCount + " Value");

// Use template literals for better readability and concatenation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bikash-bs-com'); // Create a new String object

// Uncomment to access the first character of the string
// console.log(gameName[0]);

// Uncomment to see the prototype of the String object
// console.log(gameName.__proto__);

// Uncomment to get the length of the string
// console.log(gameName.length);

// Uncomment to convert the string to uppercase
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); // Get the character at index 2
console.log(gameName.indexOf('t')); // Find the index of the first occurrence of 't'

const newString = gameName.substring(0, 4); // Get the substring from index 0 to 4
console.log(newString);

const anotherString = gameName.slice(-8, 4); // Get the substring from the 8th last character to index 4 (will result in an empty string)
console.log(anotherString);

const newStringOne = "   bikash    "; // Declare a string with leading and trailing spaces
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove the leading and trailing spaces

const url = "https://bikash.com/bikash%20javascript"; // Declare a URL with encoded space

console.log(url.replace('%20', '-')); // Replace '%20' with '-'

console.log(url.includes('sundar')); // Check if the string 'sundar' is in the URL

console.log(gameName.split('-')); // Split the string by '-' and return an array of substrings
