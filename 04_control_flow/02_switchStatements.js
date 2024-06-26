// Example of using switch statements

// Define a variable for the current month
const month = "march";

// Use a switch statement to match the month
switch (month) {
    case "jan":
        console.log("January"); // Log "January" if month is "jan"
        break;
    case "feb":
        console.log("February"); // Log "February" if month is "feb"
        break;
    case "march":
        console.log("March"); // Log "March" if month is "march"
        break;
    case "april":
        console.log("April"); // Log "April" if month is "april"
        break;
    default:
        console.log("Default case match"); // Log a default message if no case matches
        break;
}

// Template for switch statement
// switch (key) {
//     case value:
//         // Code to execute if key matches value
//         break;
//     default:
//         // Code to execute if no case matches
//         break;
// }
