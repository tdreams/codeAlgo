/* Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */

function SeriesSum(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    const term = 1 / (1 + i * 3);
    result = result + term;
  }
  return result.toFixed(2);
}

const SeriesSum = (n) => {
  return Array.from({ length: n }, (_, index) => 1 / (1 + index * 3))
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);
};

const SeriesSum = (n) => {
  return [...Array(n)]
    .reduce((acc, _, curr) => acc + 1 / (1 + curr * 3), 0)
    .toFixed(2);
};
