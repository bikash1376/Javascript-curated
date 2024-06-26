// Dates

let myDate = new Date(); // Create a new Date object with the current date and time
// Uncomment to log the date as a string
// console.log(myDate.toString()); // Convert the date to a string representation
// console.log(myDate.toDateString()); // Convert the date to a date string
// console.log(myDate.toLocaleString()); // Convert the date to a locale-specific string
// console.log(typeof myDate); // Check the type of myDate (object)

// Create Date objects with specific dates
// let myCreatedDate = new Date(2023, 0, 23); // January 23, 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January 23, 2023, 05:03 AM
// let myCreatedDate = new Date("2023-01-14"); // January 14, 2023 (ISO format)
let myCreatedDate = new Date("01-14-2023"); // January 14, 2023 (MM-DD-YYYY format)
// Uncomment to log the created date in a locale-specific string format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // Get the current timestamp in milliseconds since January 1, 1970

// Uncomment to log the current timestamp
// console.log(myTimeStamp); 
// Uncomment to log the timestamp of the created date
// console.log(myCreatedDate.getTime()); 
// Uncomment to log the current timestamp in seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date(); // Create a new Date object with the current date and time
console.log(newDate); // Log the new date object
console.log(newDate.getMonth() + 1); // Log the current month (months are 0-indexed, so add 1)
console.log(newDate.getDay()); // Log the current day of the week (0 for Sunday, 6 for Saturday)

// Log the current day of the week as a string and the time
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long", // Format the date to show the full name of the weekday
});
