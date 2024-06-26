// Example of using forEach and filter to process arrays

// const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach with an anonymous function (return value is ignored by forEach)
// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// });

// Uncomment to log the values (will be undefined because forEach does not return an array)
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Initialize an array of numbers

// Using filter to create a new array with numbers greater than 4
// const newNums = myNums.filter((num) => {
//     return num > 4;
// });

// Manual filtering using forEach
// const newNums = [];
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num); // Add numbers greater than 4 to the new array
//     }
// });

// Uncomment to log the new array
// console.log(newNums);

// Array of book objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books by genre 'History'
let userBooks = books.filter((bk) => bk.genre === 'History');

// Filter books published after 1995 and of genre 'History'
userBooks = books.filter((bk) => { 
    return bk.publish >= 1995 && bk.genre === "History";
});

// Log the filtered books
console.log(userBooks);
