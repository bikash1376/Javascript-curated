// Define a constant for account ID and assign it a value
const accountId = 144553;

// Define a variable for account email and assign it a value
let accountEmail = "javascript@gmail.com";

// Define a variable for account password using var (prefer not to use var, see below for reasons)
var accountPassword = "12345";

// Define a global variable for account city (without using var, let, or const)
accountCity = "London";

// Define a variable for account state but do not assign it a value
let accountState;

// Trying to reassign accountId will throw an error because it's a constant
// accountId = 2 // not allowed

// Reassigning accountEmail to a new value
accountEmail = "personal@gmail.com";

// Reassigning accountPassword to a new value
accountPassword = "21212121";

// Reassigning accountCity to a new value
accountCity = "Bengaluru";

// Log the accountId to the console
console.log(accountId);

/*
Prefer not to use var because of issues with block scope and functional scope.
Use let or const instead for better scoping.
*/

// Display the values of the variables in a table format in the console
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
