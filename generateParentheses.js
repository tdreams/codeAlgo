/* Problem: "Generate Parentheses"

Given an integer n, generate all valid combinations of parentheses pairs. The combinations should be well-formed, meaning that each opening parenthesis must have a corresponding closing parenthesis, and the parentheses pairs should be balanced.

For example:

Input: n = 3
Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
Instructions:

Write a function, let's call it generateParentheses, that takes an integer n as input and returns a list of all valid combinations of parentheses pairs.
The order of the combinations does not matter.
You may assume that n is a positive integer. */

const generateParentheses = (parentheses, n) => {
  const result = [];

  const hasRepeatedParentheses = () => {
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] === result[i + 1]) {
        return true;
      }
    }
    return false;
  };

  const generateCombinations = (parentheses, openCount, closeCount) => {
    if (parentheses.length === 2 * n) {
      if (!hasRepeatedParentheses(parentheses)) {
        result.push(parentheses);
      }
      return;
    }
    if (openCount < n) {
      generateCombinations(parentheses + "(", openCount + 1, closeCount);
    }
    if (closeCount < openCount) {
      generateCombinations(parentheses + ")", openCount, closeCount + 1);
    }
  };
  generateCombinations(parentheses, 0, 0);
  return result;
};
console.log(generateParentheses("", 3));
