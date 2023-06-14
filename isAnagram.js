/* Problem: Write a function isAnagram(str1, str2) that takes in two strings as arguments and returns true if the strings are anagrams of each other, and false otherwise. Anagrams are strings that contain the same characters but may be in a different order.

Example:

isAnagram('listen', 'silent') should return true
isAnagram('hello', 'world') should return false */

const isAnagram = (str1, str2) => {
  const cleanStr1 = str1
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

  const cleanStr2 = str2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

  return cleanStr1 === cleanStr2;
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
