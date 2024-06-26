const user = {
    username: "bikash",
    price: 999,

    // Method to display a welcome message
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // Use 'this' to access the object's properties
        console.log(this); // Log the current context ('this' refers to the user object)
    }
}

// Uncomment to call the welcomeMessage method
// user.welcomeMessage()
// Change the username and call the welcomeMessage method again
// user.username = "sam"
// user.welcomeMessage()

// Uncomment to log the global 'this' (in non-strict mode, this refers to the global object, in strict mode, it's undefined)
// console.log(this);

// Function to demonstrate 'this' in regular functions
// function chai(){
//     let username = "bikash";
//     console.log(this.username); // 'this' refers to the global object in non-strict mode
// }

// Uncomment to call the chai function
// chai()

// Function expression to demonstrate 'this' in regular functions
// const chai = function () {
//     let username = "bikash";
//     console.log(this.username); // 'this' refers to the global object in non-strict mode
// }

// Arrow function to demonstrate 'this' in arrow functions
const chai = () => {
    let username = "bikash";
    console.log(this); // 'this' in arrow functions refers to the surrounding lexical context
}

// Uncomment to call the chai function
// chai()

// Various ways to define an arrow function to add two numbers

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return (concise syntax)
// const addTwo = (num1, num2) => num1 + num2;

// Implicit return with parentheses
// const addTwo = (num1, num2) => (num1 + num2);

// Returning an object with implicit return
const addTwo = (num1, num2) => ({username: "bikash"});

console.log(addTwo(3, 4)); // Log the result of the addTwo function (returns an object)

// Example of using forEach with an array (uncomment and complete the function)
// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach((element) => {
//     // Do something with each element
// });
