/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
  const char = str.toLowerCase().split("");
  const counts = {
    x: 0,
    o: 0,
  };
  char.map((el) => {
    if (el === "x") {
      counts.x++;
    } else if (el === "o") {
      counts.o++;
    }
  });
  return counts.x === counts.o;
}

function XO(str) {
  const char = str.toLowerCase().split("");
  const count = char.reduce(
    (acc, el) => {
      if (el === "x") {
        acc.x++;
      } else if (el === "o") {
        acc.o++;
      }
      return acc;
    },
    { x: 0, o: 0 }
  );
  return count.x === count.o;
}

function XO(str) {
  char = str.toLowerCase().split("");
  return (
    char.filter((x) => x === "x").length ===
    char.filter((o) => o === "o").length
  );
}

console.log(XO("xo"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
