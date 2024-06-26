// Example of using for...of loop to iterate over arrays

const arr = [1, 2, 3, 4, 5]; // Initialize an array

for (const num of arr) {
    // Uncomment to log each number in the array
    // console.log(num);
}

// Example of using for...of loop to iterate over a string
const greetings = "Hello world!"; // Initialize a string
for (const greet of greetings) {
    // Uncomment to log each character in the string
    // console.log(`Each char is ${greet}`);
}

// Example of using for...of loop to iterate over a Map

// Initialize a Map with key-value pairs
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India"); // Duplicate key, will overwrite the previous value

// Uncomment to log the entire map
// console.log(map);

for (const [key, value] of map) {
    // Uncomment to log each key-value pair in the map
    // console.log(key, ':-', value);
}

// Attempt to use for...of loop on an object (will cause an error because objects are not iterable)
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// Uncomment to try iterating over an object (will throw an error)
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
