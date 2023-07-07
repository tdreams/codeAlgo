/* Certainly! Here's another recursive problem for you to practice:

Problem: "Letter Combinations of a Phone Number"

Given a string containing digits from 2 to 9 inclusive, return all possible letter combinations that the number could represent. The mapping of digits to letters is as follows (as in a telephone keypad):

rust
Copy code
2 -> "abc"
3 -> "def"
4 -> "ghi"
5 -> "jkl"
6 -> "mno"
7 -> "pqrs"
8 -> "tuv"
9 -> "wxyz"
For example:

vbnet
Copy code
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
Instructions:

Write a function, let's call it letterCombinations, that takes a string digits as input and returns a list of all possible letter combinations.
Assume that the input string will only contain digits from 2 to 9.
The order of the output combinations does not matter.
 */

const letterCombinations = (num) => {
  const result = [];

  const data = [
    {
      digit: 2,
      letter: "abc",
    },
    {
      digit: 3,
      letter: "def",
    },
    {
      digit: 4,
      letter: "ghi",
    },
    {
      digit: 5,
      letter: "jkl",
    },
    {
      digit: 6,
      letter: "mno",
    },
    {
      digit: 7,
      letter: "pqrs",
    },
    {
      digit: 8,
      letter: "tuv",
    },
    {
      digit: 9,
      letter: "wxyz",
    },
  ];

  const generatePerm = (currentPerm, remainingDigits) => {
    if (remainingDigits.length === 0) {
      result.push(currentPerm);
    }
    const currentDigit = parseInt(remainingDigits[0]);
    const remainingLetters =
      data.find((item) => item.digit === currentDigit)?.letter || "";
    for (let i = 0; i < remainingLetters.length; i++) {
      const letter = remainingLetters[i];
      generatePerm(currentPerm + letter, remainingDigits.slice(1));
    }
  };

  generatePerm("", num);
  return result;
};

console.log(letterCombinations("23"));
