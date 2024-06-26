// Example of a while loop
let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`); // Log the current value of index
//     index = index + 2; // Increment index by 2
// }

// Example of a while loop iterating through an array
let myArray = ['flash', "batman", "superman"]; // Initialize an array

let arr = 0; // Initialize a counter for the array
while (arr < myArray.length) {
    // Uncomment to log each element in the array
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1; // Increment the array counter
}

// Example of a do...while loop
let score = 11; // Initialize the score

do {
    console.log(`Score is ${score}`); // Log the current value of score
    score++; // Increment score by 1
} while (score <= 10); // Continue the loop as long as score is less than or equal to 10
