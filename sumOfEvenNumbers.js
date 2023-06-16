/* Problem: Find the Sum of Even Numbers in an Array

Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

Example:
sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  // Output: 30 (2 + 4 + 6 + 8 + 10)
sumOfEvenNumbers([2, 4, 6, 8, 10]);                // Output: 30 (2 + 4 + 6 + 8 + 10)
sumOfEvenNumbers([1, 3, 5, 7, 9]);                 // Output: 0 (no even numbers)
Your task is to implement the sumOfEvenNumbers function. Be sure to handle different edge cases and validate the input. */

const sumOfEvenNumbers = (arr) => {
  return (sum = arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      return acc + curr;
    } else return acc;
  }, 0));
};

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9]));

const reverseWords = (str) => {
  const words = str.split(" ");
  const reverseWords = words.map((word) => word.split("").reverse().join(""));
  return reverseWords.join(" ");
};
console.log(reverseWords("Hello, World!"));

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

console.log(digitize(35231));
