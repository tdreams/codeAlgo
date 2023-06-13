/* Problem: Given an array of numbers, write a function to find the maximum and minimum values.
Example Input: [4, 9, 2, 6, 5]
Example Output: { max: 9, min: 2 } */

const maxmin = (arr) => {
  arr.sort((a, b) => a - b);
  return `max: ${arr.length - 1}, min: ${arr[0]}`;
};

console.log(maxmin([4, 9, 2, 6, 5]));

/* Problem: Create a function that takes a string and returns the reverse of the string.
Example Input: "Hello, World!"
Example Output: "!dlroW ,olleH" */

const reverse1 = (str) => {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .reverse()
    .join(" ");
};

const reverse = (str) => {
  return str.split(" ").reverse().join(" ");
};

console.log(reverse("Hello, World!"));

/* Problem: Implement a function that checks whether a given string is a palindrome (reads the same forward and backward).
Example Input: "racecar"
Example Output: true */

const palindrome = (str) => {
  const backward = str.split("").reverse().join("");
  return backward == str;
};
console.log(palindrome("racecar"));

/* Problem: Write a function that finds the most frequent element in an array.
Example Input: [2, 4, 7, 2, 9, 4, 2, 5, 2, 1, 9, 2, 2]
Example Output: 2 */

const counter = (arr) => {
  let count = 0;
  let target = null;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      target = arr[i];
    }
  }

  return { target, count };
};

console.log(counter([2, 4, 7, 2, 9, 4, 2, 5, 2, 1, 9, 2, 2, 4, 4, 4, 4, 4, 4]));

/* Problem: Given an array of objects representing books with properties like title, author, and publication year, write a function to sort the books based on their publication year in ascending order.
Example Input: [{ title: "Book 1", author: "Author 1", year: 2010 }, { title: "Book 2", author: "Author 2", year: 2005 }]
Example Output: [{ title: "Book 2", author: "Author 2", year: 2005 }, { title: "Book 1", author: "Author 1", year: 2010 }] */

const sortBook = (books) => {
  return books.sort((a, b) => a.year - b.year);
};
console.log(
  sortBook([
    { title: "Book 1", author: "Author 1", year: 2010 },
    { title: "Book 2", author: "Author 2", year: 2005 },
  ])
);

/* Write a function called sumDigits that takes a positive integer as input and returns the sum of its digits.

Example:

sumDigits(123) should return 6 (1 + 2 + 3)
sumDigits(456) should return 15 (4 + 5 + 6)
You can assume that the input will always be a positive integer.

Take your time to come up with a solution, and let me know when you're ready to share your code. */

const sumDigits = (n) =>
  Array.from(String(n), Number).reduce((cur, next) => cur + next, 0);

console.log(sumDigits(123));

/* Problem: FizzBuzz
Write a function that takes in a positive integer n. For each number from 1 to n, the function should output "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. For all other numbers, output the number itself.

Example:
fizzBuzz(15) should output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz */

const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
  return n;
};

console.log(fizzBuzz(5));

/* Problem: Find the largest element in an array

Write a function named findLargestElement that takes an array of numbers as input and returns the largest element in the array. */

const findLargestElement1 = (arr) => {
  return Math.max(...arr);
};
const findLargestElement = (arr) => {
  const asc = arr.sort((a, b) => a - b);
  return asc[arr.length - 1];
};
console.log(findLargestElement([3, 9, 2, 7, 5]));

/* Problem: Write a function to check if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. Consider only alphanumeric characters and ignore case sensitivity.

For example:

isPalindrome("racecar") should return true
isPalindrome("hello") should return false
isPalindrome("A man, a plan, a canal: Panama") should return true */

const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === cleanStr;
};

const uniqueCharacters = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
};

console.log(uniqueCharacters("abcde"));
