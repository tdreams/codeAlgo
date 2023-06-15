/* Problem:
Write a function called "capitalizeWords" that takes in a sentence as a parameter and returns a new sentence where the first letter of each word is capitalized.

Example:
capitalizeWords("hello world") should return "Hello World"
capitalizeWords("javascript is fun") should return "Javascript Is Fun" */

const capitalizeWords = (str) => {
  cleanStr = str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return cleanStr;
};

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is fun"));

/* Problem: Write a function called getUniqueValues that takes an array as input and returns an array containing only the unique values from the input array, in the order of their appearance.

Example:

getUniqueValues([1, 2, 3, 3, 4, 5, 4, 6, 7, 7]); // Output: [1, 2, 3, 4, 5, 6, 7] */

const getUniqueValues = (arr) => {
  return arr.filter((uniqueValue, i) => arr.indexOf(uniqueValue) === i);
};

console.log(getUniqueValues([1, 2, 3, 3, 4, 5, 4, 6, 7, 7]));
