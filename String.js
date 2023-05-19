const str = "i loVe jAVaScript So mUCH";
let result = "";
str
  .toLowerCase()
  .split(" ")
  .map((word) => (result += word[0].toUpperCase() + word.slice(1) + " "));
console.log(result);
