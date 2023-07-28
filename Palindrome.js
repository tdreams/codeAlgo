/* Write a function named isPalindrome to determine if a string is a palindrome.

A palindrome is a word or phrase that reads the same backward as forward.

The function should take a string as input and return true if it is a palindrome, and false otherwise. */

function isPalindrome(s) {
  const formatted = s.toLowerCase();
  const reversed = formatted.split("").reverse().join("");
  return formatted === reversed;
}
//
