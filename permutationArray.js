/* Problem: "Permutations II"

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example:
Copy code
Input: [1, 1, 2]
Output: [
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1]
]
Instructions:

Write a function, let's call it permuteUnique, that takes an array of numbers as input and returns an array of arrays containing all possible unique permutations.
The output should not contain duplicate permutations.
The order of the permutations in the output doesn't matter.
Note:

The input array may contain duplicate elements, and you need to ensure that the output contains unique permutations only.
You can assume that the input array will not be empty.
Hints:

You can use a similar recursive approach with backtracking as in the previous problem to generate all permutations.
To avoid duplicates in the output, you can use a data structure (e.g., a set) to keep track of the permutations that have been generated.
Be mindful of the fact that the input array may contain duplicate elements, so you need to handle them appropriately while generating permutations. */
Input: [1, 1, 2];
Output: [
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1],
];
const permuteUnique = (arr) => {
  const result = [];
  const count = 0;
  // the output should not contain duplicate permutations
  const hasunique = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] == arr[i + 1] ? true : false;
    }
  };

  const generatepermutations = (currentPerm, remainingNumber) => {
    if (remainingNumber === 0) {
      if (!hasunique(currentPerm)) {
        count++;
        result.push(currentPerm);
      }
      return;
    }
    for (let i = 0; i < remainingNumber.length; i++) {
      const newPerm = currentPerm + remainingNumber[i];
      const newRemainingNumber =
        remainingNumber.slice(0, i) + remainingNumber.slice(i + 1);
    }
    generatepermutations([], str);
  };
};
