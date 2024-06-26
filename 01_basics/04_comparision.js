// Uncomment the lines below to see the results of various comparisons

// console.log(2 > 1); // true: 2 is greater than 1
// console.log(2 >= 1); // true: 2 is greater than or equal to 1
// console.log(2 < 1); // false: 2 is not less than 1
// console.log(2 == 1); // false: 2 is not equal to 1
// console.log(2 != 1); // true: 2 is not equal to 1

// Comparing strings with numbers
// console.log("2" > 1); // true: "2" is converted to number 2, which is greater than 1
// console.log("02" > 1); // true: "02" is converted to number 2, which is greater than 1

// Comparisons involving null
console.log(null > 0); // false: null is not greater than 0
console.log(null == 0); // false: null is not equal to 0
console.log(null >= 0); // true: null is converted to 0 in this comparison, so 0 >= 0 is true

// Comparisons involving undefined
console.log(undefined == 0); // false: undefined is not equal to 0
console.log(undefined > 0); // false: undefined cannot be compared to numbers
console.log(undefined < 0); // false: undefined cannot be compared to numbers

// Strict equality comparison
console.log("2" === 2); // false: "2" (string) is not strictly equal to 2 (number)
