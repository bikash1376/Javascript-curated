// Singleton pattern (a single instance of an object)
// Object.create can be used to create new objects with a specified prototype

// Object literals to define an object

const mySym = Symbol("key1"); // Create a unique symbol

const JsUser = {
    name: "bikash", // String property
    "full name": "bikash Choudhary", // String property with space in key
    [mySym]: "mykey1", // Symbol property
    age: 18, // Number property
    location: "Jaipur", // String property
    email: "bikash@google.com", // String property
    isLoggedIn: false, // Boolean property
    lastLoginDays: ["Monday", "Saturday"], // Array property
}

// Accessing properties of the object
// Uncomment to log the email property
// console.log(JsUser.email); 
// console.log(JsUser["email"]); // Access property using bracket notation
// console.log(JsUser["full name"]); // Access property with space in key using bracket notation
// console.log(JsUser[mySym]); // Access symbol property using bracket notation

// Modify the email property
JsUser.email = "bikash@chatgpt.com";
// Uncomment to freeze the object, preventing further modifications
// Object.freeze(JsUser);
JsUser.email = "bikash@microsoft.com"; // Attempt to modify the email property after freezing
// Uncomment to log the modified object
// console.log(JsUser);

// Adding methods to the object
JsUser.greeting = function(){
    console.log("Hello JS user");
};
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // Use this to access object properties
};

// Call the methods and log the results
console.log(JsUser.greeting()); // Logs "Hello JS user"
console.log(JsUser.greetingTwo()); // Logs "Hello JS user, bikash"
