5 / 28 / 2023;
/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. */

const getSum = (a, b) => {
  start = Math.min(a, b);
  end = Math.max(a, b);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

console.log((getSum(0, -1), -1));
console.log((getSum(0, 1), 1));
console.log((getSum(2, 2), 2));
