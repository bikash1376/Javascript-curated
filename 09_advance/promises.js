// Create a new promise (promiseOne) and perform an asynchronous task
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task, such as DB calls, cryptography, network operations
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // Resolve the promise after 1 second
    }, 1000);
});

// Consume promiseOne and log a message when it's resolved
promiseOne.then(function(){
    console.log("Promise consumed");
});

// Create and consume a new promise with an asynchronous task
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve(); // Resolve the promise after 1 second
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});

// Create a new promise (promiseThree) and resolve it with an object after 1 second
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
});

// Consume promiseThree and log the resolved object
promiseThree.then(function(user){
    console.log(user);
});

// Create a new promise (promiseFour) and resolve or reject it based on a condition
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulating an error condition
        if (!error) {
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

// Consume promiseFour with .then(), .catch(), and .finally()
promiseFour
 .then((user) => {
    console.log(user); // Log the resolved user object
    return user.username;
}).then((username) => {
    console.log(username); // Log the username
}).catch(function(error){
    console.log(error); // Log any error that occurs
}).finally(() => console.log("The promise is either resolved or rejected")); // Log a message regardless of resolution or rejection

// Create a new promise (promiseFive) and resolve or reject it based on a condition
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulating an error condition
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

// Async function to consume promiseFive using async/await
async function consumePromiseFive(){
    try {
        const response = await promiseFive; // Await the resolution of promiseFive
        console.log(response); // Log the resolved response
    } catch (error) {
        console.log(error); // Log any error that occurs
    }
}

consumePromiseFive(); // Call the async function to consume promiseFive

// Commented-out async function to fetch and log user data from an API
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers(); // Call the async function to fetch and log user data

// Fetch and log user data from GitHub API using .then() and .catch()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json(); // Parse the JSON response
})
.then((data) => {
    console.log(data); // Log the parsed data
})
.catch((error) => console.log(error)); // Log any error that occurs

// Comment indicating availability of Promise.all
// Promise.all - Yes, this is also available. Do some reading on your own.
