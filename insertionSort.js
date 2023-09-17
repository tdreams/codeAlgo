/* The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.  */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than currentValue,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

// Test the insertionSort function
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
