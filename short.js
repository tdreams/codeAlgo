/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
  const words = s.split(" ");
  const length = words.map((el) => el.length);
  return Math.min(...length);
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
