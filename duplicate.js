/* Write a function called findDuplicates that takes an array of integers as input and returns an array containing only the duplicate elements. The order of the elements in the resulting array should be the same as their order in the original array. */

const findDuplicates = (arr) => {
  return arr.filter((elt, i) => arr.indexOf(elt) != i);
};

console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3, 4, 7, 8, 8]));
