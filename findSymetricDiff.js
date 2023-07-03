/* The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates). */

function sym(...args) {
  const uniqueValues = [];

  const isUnique = (arr, element) => {
    for (const el of arr) {
      if (el === element) {
        return false;
      }
    }
    return true;
  };
  const symDiffOfTwoArrays = (arr1, arr2) => {
    for (const element of arr1) {
      if (!arr2.includes(element) && isUnique(uniqueValues, element)) {
        uniqueValues.push(element);
      }
    }
    for (const element of arr2) {
      if (!arr1.includes(element) && isUnique(uniqueValues, element)) {
        uniqueValues.push(element);
      }
    }
  };
  for (let i = 0; i < args.length - 1; i++) {
    symDiffOfTwoArrays(args[i], args[i + 1]);
  }
  return uniqueValues;
}

sym([1, 2, 3], [5, 2, 1, 4]);
