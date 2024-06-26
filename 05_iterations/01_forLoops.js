// Basic for loop example
for (let i = 0; i <= 10; i++) {
    const element = i; // Current loop iteration value
    if (element == 5) {
        // Uncomment to log when element is 5
        // console.log("5 is the best number");
    }
    // Uncomment to log each iteration value
    // console.log(element);
}

// Uncomment to log the value of element outside the loop (will cause an error)
// console.log(element); // Error: element is not defined

// Nested for loop example
for (let i = 1; i <= 10; i++) {
    // Uncomment to log the outer loop value
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // Uncomment to log the inner loop value and multiplication table
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}

// Loop through an array
let myArray = ["flash", "batman", "superman"];
// Uncomment to log the length of the array
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]; // Current element in the array
    // Uncomment to log each element of the array
    // console.log(element);
}

// Break and continue examples

// Example of break statement
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`); // Log when index is 5
//         break; // Exit the loop when index is 5
//     }
//     console.log(`Value of i is ${index}`);
// }

// Example of continue statement
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`); // Log when index is 5
        continue; // Skip the rest of the loop when index is 5
    }
    console.log(`Value of i is ${index}`); // Log the current index
}
