/* Problem: "Combination Sum"

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number can be chosen from candidates an unlimited number of times. However, the combinations should not contain duplicate combinations.

For example:

csharp
Copy code
Input: candidates = [2, 3, 6, 7], target = 7
Output: [
  [2, 2, 3],
  [7]
]
In this example, candidates [2, 3, 6, 7] can be combined to form target 7 in two unique ways: [2, 2, 3] and [7].

Instructions:

Write a function, let's call it combinationSum, that takes an array of distinct integers candidates and a target integer target as input, and returns a list of all unique combinations that sum to the target.
Each combination should be represented as an array of integers.
The input array candidates does not contain any duplicate numbers.
The output combinations should not contain duplicate combinations.
The order of the combinations in the output doesn't matter. */

const combinationSum = (arr, target) => {
  const result = [];

  const generatePerm = (currentPerm, remainingNumbers) => {
    const comSum = currentPerm.reduce((acc, num) => acc + num, 0);
    if (comSum === target) {
      result.push(currentPerm.slice());
    }
    if (comSum > target) {
      return;
    }

    for (let i = 0; i < remainingNumbers.length; i++) {
      const newCurrentPerm = [...currentPerm, remainingNumbers[i]];
      const newRemainingNumbers = [...remainingNumbers.slice(i)];
      generatePerm(newCurrentPerm, newRemainingNumbers);
    }
  };
  generatePerm([], arr);
  return result;
};

const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target));
