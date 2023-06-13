/* Problem: Find the Missing Number
You are given an array of integers from 1 to n, but one number is missing. Your task is to write a function that finds and returns the missing number.

Example:

scss
Copy code
findMissingNumber([1, 2, 4, 6, 3, 7, 8]) => 5
findMissingNumber([10, 5, 1, 3, 7, 2, 8, 6, 4]) => 9
Write a function findMissingNumber that takes an array as input and returns the missing number.

Once you've solved the problem, feel free to share your solution, and I'll provide feedback and suggestions. Good luck with your preparation! */

const findMissingNumber = (arr) => {
  const asc = arr.sort((a, b) => a - b);
  for (let i = 0; i < asc.length; i++) {
    if (asc[i + 1] !== asc[i] + 1) {
      return asc[i] + 1;
    }
  }
  return null;
};
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8, 10]));

const findMissingNumber1 = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  for (let num = min; num <= max; num++) {
    if (!arr.includes(num)) {
      return num;
    }
  }
  return null;
};
console.log(findMissingNumber1([1, 2, 4, 6, 3, 7, 8, 10]));
