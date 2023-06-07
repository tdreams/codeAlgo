/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases. */

function likes(names) {
  const length = names.length;

  return [
    "no one likes this",
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${length - 2} others like this`,
  ][Math.min(length, 4)];
}
// Example usage:
console.log(likes([])); // Output: "no one likes this"
console.log(likes(["John"])); // Output: "John likes this"
console.log(likes(["John", "Jane"])); // Output: "John and Jane like this"
console.log(likes(["John", "Jane", "Mark"])); // Output: "John, Jane and Mark like this"
console.log(likes(["John", "Jane", "Mark", "Mike"])); // Output: "John, Jane and 2 others like this"
