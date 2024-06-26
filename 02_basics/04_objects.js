// Creating an empty object using object literal syntax
// const tinderUser = new Object()
const tinderUser = {};

// Adding properties to the tinderUser object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Uncomment to log the tinderUser object
// console.log(tinderUser);

// Creating an object with nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "bikash",
            lastname: "choudhary"
        }
    }
};

// Uncomment to access nested properties and log the first name
// console.log(regularUser.fullname.userfullname.firstname);

// Creating multiple objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Merging objects using the spread operator
const obj3 = {...obj1, ...obj2};
// Uncomment to log the merged object
// console.log(obj3);

// Creating an array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
];

// Accessing a property of the second user in the array
users[1].email;
// Uncomment to log the tinderUser object
// console.log(tinderUser);

// Logging the keys, values, and entries of the tinderUser object
// console.log(Object.keys(tinderUser)); // Logs the keys of the tinderUser object
// console.log(Object.values(tinderUser)); // Logs the values of the tinderUser object
// console.log(Object.entries(tinderUser)); // Logs the entries (key-value pairs) of the tinderUser object

// Checking if the tinderUser object has a specific property
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// Creating an object with course details
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "bikash"
};

// Destructuring the course object to extract the courseInstructor property and rename it to instructor
const {courseInstructor: instructor} = course;

// Uncomment to log the courseInstructor variable (will throw an error)
// console.log(courseInstructor); 
console.log(instructor); // Logs the instructor name

// Example of an array of objects (just a visual representation)
[
    {},
    {},
    {}
]
