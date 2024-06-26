// Example of using map and filter to process arrays

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Initialize an array of numbers

// Using map to create a new array with each number increased by 10
// const newNums = myNumbers.map((num) => { return num + 10 });

// Using map to create a new array with each number multiplied by 10, 
// then adding 1 to each number, and finally filtering numbers greater than or equal to 40
const newNums = myNumbers
                .map((num) => num * 10) // Multiply each number by 10
                .map((num) => num + 1)  // Add 1 to each number
                .filter((num) => num >= 40); // Filter numbers greater than or equal to 40

// Log the resulting array
console.log(newNums); // [41, 51, 61, 71, 81, 91, 101]
