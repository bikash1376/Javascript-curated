const marvel_heros = ["thor", "Ironman", "spiderman"]; // Declare an array of Marvel heroes
const dc_heros = ["superman", "flash", "batman"]; // Declare an array of DC heroes

// Uncomment to add the entire dc_heros array as a single element to marvel_heros
// marvel_heros.push(dc_heros);

// Uncomment to log the marvel_heros array and access a nested element
// console.log(marvel_heros); // Log the marvel_heros array
// console.log(marvel_heros[3][1]); // Access the second element of the nested dc_heros array

// Concatenate the marvel_heros and dc_heros arrays
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // Log the concatenated array

// Use the spread operator to merge the marvel_heros and dc_heros arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
// Uncomment to log the merged array
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; // Declare a nested array

// Flatten the nested array completely
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // Log the flattened array

// Check if a value is an array
console.log(Array.isArray("bikash")); // false, because "bikash" is not an array
console.log(Array.from("bikash")); // Create an array from a string
console.log(Array.from({name: "bikash"})); // Create an array from an object (interesting behavior)

let score1 = 100; // Declare a variable for score 1
let score2 = 200; // Declare a variable for score 2
let score3 = 300; // Declare a variable for score 3

// Create an array from the scores
console.log(Array.of(score1, score2, score3)); // Log the array of scores
