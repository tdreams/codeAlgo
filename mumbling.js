//05/22/23
/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .map((char, index) => {
      const repeat = char.repeat(index + 1);
      const capital = repeat[0].toUpperCase() + repeat.slice(1);
      return capital;
    })
    .join("-");
}
