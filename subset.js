/* Problem: "Subsets"

Given a set of distinct integers, return all possible subsets (power set).

For example:

lua
Copy code
Input: [1, 2, 3]
Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
Instructions:

Write a function, let's call it subsets, that takes an array of distinct integers as input and returns a list of all possible subsets.
The subsets can be in any order.
The order of elements within each subset does not matter.
The solution should not contain duplicate subsets.
Hints:

You can use recursion to generate all possible subsets. Think about breaking down the problem into subproblems.
Consider that for each element in the array, you have two choices: include it in the subset or exclude it.
Think about how you can combine the subsets generated by including and excluding the current element to form the final result.
Give it a try! If you encounter any issues or need further assistance, feel free to ask. Good luck!
 */

const subsets = (arr) => {
  let result = [];

  const generatePerm = (currentPerm, remainingNumber, startIndex) => {
    result.push(currentPerm.slice());

    for (let i = startIndex; i < remainingNumber.length; i++) {
      const newCurrentPerm = [...currentPerm, remainingNumber[i]];
      generatePerm(newCurrentPerm, remainingNumber, i + 1);
    }
  };

  generatePerm([], arr, 0);
  return result.sort((a, b) => a.length - b.length);
};

console.log(subsets([1, 2, 3]));
