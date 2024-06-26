// Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`); // Log a message to indicate a database connection
})();

// Anonymous IIFE with a parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); // Log a message with a name to indicate a database connection
})('bikash'); // Immediately invoke the function with 'bikash' as the argument
