// Example of using for...in loop to iterate over object properties

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

// Iterate over the keys in the myObject object
for (const key in myObject) {
    // Uncomment to log each key and its corresponding value
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Example of using for...in loop to iterate over array indices
const programming = ["js", "rb", "py", "java", "cpp"];

// Iterate over the indices in the programming array
for (const key in programming) {
    // Uncomment to log each element of the array
    // console.log(programming[key]);
}

// Note: for...in is not typically used with Maps as it iterates over the object's enumerable properties

// Example of using for...in loop on a Map (incorrect usage)
// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('FR', "France");
// map.set('IN', "India");

// for...in loop is not suitable for Map objects
// for (const key in map) {
//     console.log(key); // This will not work as intended
// }

// Use for...of loop with Map objects for correct iteration
// for (const [key, value] of map) {
//     console.log(`${key}: ${value}`); // Correct way to iterate over a Map
// }
