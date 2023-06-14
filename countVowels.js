/* Problem:
Write a function called countVowels that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string. The count should be case-insensitive, meaning both uppercase and lowercase vowels should be counted.

Example:
countVowels("Hello, World!") -> 3
countVowels("OpenAI ChatGPT") -> 4
countVowels("JavaScript") -> 3 */

const countVowels = (str) => {
  const vowelsRegex = /[aeiou]/gi;
  return str.match(vowelsRegex).length;
};

const countVowels1 = (str) => {
  let count = 0;
  const vowelsRegex = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (vowelsRegex.includes(str[i])) {
      count++;
    }
  }
  return count;
};

console.log(countVowels1("Hello, World!"));
