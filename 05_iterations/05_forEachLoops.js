// Example of using forEach loop to iterate over an array

const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach with an anonymous function to log each element
// coding.forEach(function (val) {
//     console.log(val);
// });

// Using forEach with an arrow function to log each element
// coding.forEach((item) => {
//     console.log(item);
// });

// Function to print an item
// function printMe(item) {
//     console.log(item);
// }

// Using forEach with a named function to log each element
// coding.forEach(printMe);

// Using forEach with an arrow function to log each element, index, and the entire array
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

// Example of using forEach loop to iterate over an array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

// Using forEach to log the languageName property of each object in the array
myCoding.forEach((item) => {
    console.log(item.languageName);
});
