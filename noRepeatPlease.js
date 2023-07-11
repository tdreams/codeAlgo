/* Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating. */

function permAlone(str) {
  const result = [];
  let count = 0;
  const hasRepeated = (str) => {
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        return true;
      }
    }
    return false;
  };

  const generatePerm = (permCur, remaingLet) => {
    if (remaingLet.length === 0) {
      if (!hasRepeated(permCur)) {
        count++;
        result.push(permCur);
      }
      return;
    }

    for (let i = 0; i < remaingLet.length; i++) {
      const newPermCur = permCur + remaingLet[i];
      const newRemaingLet = remaingLet.slice(0, i) + remaingLet.slice(i + 1);
      generatePerm(newPermCur, newRemaingLet);
    }
  };

  generatePerm("", str);
  return count;
}

permAlone("aab");
