/* Problem: Array Chunking

Write a function chunkArray(arr, size) that takes an array arr and a positive integer size as arguments. The function should split the array into subarrays of length size and return a new array containing these subarrays. If the last subarray has fewer elements than size, it should still be included as a separate subarray.

Example:

chunkArray([1, 2, 3, 4, 5], 2);
Output: [[1, 2], [3, 4], [5]]

chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
Output: [[1, 2, 3], [4, 5, 6], [7, 8]]

chunkArray([1, 2, 3, 4, 5], 4);
Output: [[1, 2, 3, 4], [5]] */

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

console.log(chunkArray([1, 2, 3, 4, 5], 4));
