// Function to print each letter of the name "bikash"
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// Uncomment to call the sayMyName function
// sayMyName()

// Function to add two numbers and log the result
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
    // Calculate the sum of number1 and number2 and return it
    // let result = number1 + number2
    // return result
    return number1 + number2;
}

const result = addTwoNumbers(3, 5); // Call the function and store the result

// Uncomment to log the result
// console.log("Result: ", result);

// Function to log a message when a user logs in, with a default username
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// Uncomment to log the login messages
// console.log(loginUserMessage("bikash"));
// console.log(loginUserMessage());


// Function to demonstrate rest parameters and return an array of numbers
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// Uncomment to log the array of numbers
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "bikash",
    prices: 199
};

// Function to handle an object and log its properties
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Uncomment to call the handleObject function with the user object
// handleObject(user);

// Call the handleObject function with an inline object
handleObject({
    username: "sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600]; // Declare an array

// Function to return the second value in an array
function returnSecondValue(getArray) {
    return getArray[1];
}

// Uncomment to log the second value from myNewArray
// console.log(returnSecondValue(myNewArray));

// Log the second value from an inline array
console.log(returnSecondValue([200, 400, 500, 1000]));
