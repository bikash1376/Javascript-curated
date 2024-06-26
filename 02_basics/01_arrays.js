// Array

const myArr = [0, 1, 2, 3, 4, 5]; // Declare an array with initial values
const myHeors = ["shaktiman", "naagraj"]; // Declare an array with hero names

const myArr2 = new Array(1, 2, 3, 4); // Create a new array using the Array constructor
// Uncomment to log the second element of myArr
// console.log(myArr[1]);

// Array methods

// Add elements to the end of the array
// myArr.push(6);
// myArr.push(7);

// Remove the last element from the array
// myArr.pop();

// Add an element to the beginning of the array
// myArr.unshift(9);

// Remove the first element from the array
// myArr.shift();

// Check if the array includes the value 9
// console.log(myArr.includes(9));

// Get the index of the value 3 in the array
// console.log(myArr.indexOf(3));

// Join the elements of the array into a string
// const newArr = myArr.join();

// Uncomment to log the original array and the new string
// console.log(myArr);
// console.log(newArr);

// Slice and splice methods

console.log("A ", myArr); // Log the original array

const myn1 = myArr.slice(1, 3); // Get a sub-array from index 1 to 2 (excluding 3)

console.log(myn1); // Log the sliced array
console.log("B ", myArr); // Log the original array (unchanged by slice)

const myn2 = myArr.splice(1, 3); // Remove 3 elements starting from index 1

console.log("C ", myArr); // Log the modified array after splice
console.log(myn2); // Log the removed elements
