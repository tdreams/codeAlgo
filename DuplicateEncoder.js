05 / 29 / 2023;
/* AThe goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */

const duplicateEncode0 = (word) => {
  const words = word.toLowerCase().split("");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    const char = words[i];
    const count = words.filter((c) => c === char).length;
    result += count === 1 ? "(" : ")";
  }
  return result;
};
const duplicateEncode = (word) => {
  const words = word.toLowerCase().split("");
  const result = words
    .map((_, i) => {
      const char = words[i];
      const count = words.filter((c) => c === char).length;
      return count === 1 ? "(" : ")";
    })
    .join("");
  return result;
};

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
