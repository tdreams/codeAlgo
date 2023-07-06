/* Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating. */

const perAlone = (str) => {
  //first we need to check the number of permutations
  const result = [];
  count = 0;
  const hasRepeatValue = (str) => {
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        return true;
      } else false;
    }
  };
  const generatPermutation = (currentPerm, remainingChars) => {
    if (remainingChars.length === 0) {
      if (!hasRepeatValue(currentPerm)) {
        count++;
        result.push(currentPerm);
      }
      return;
    }
    for (let i = 0; i < remainingChars.length; i++) {
      const newPerm = currentPerm + remainingChars[i];
      const newRemaining =
        remainingChars.slice(0, i) + remainingChars.slice(i + 1);
      generatPermutation(newPerm, newRemaining);
    }
  };
  generatPermutation("", str);

  return count;
};
