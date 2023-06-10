//05 / 25 / 23;
/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

const abbrevName = (name) => {
  const words = name.toUpperCase().split(" ");
  const first = words[0][0];
  const second = words[1][0];
  return console.log(`${first}.${second}`);
};

abbrevName("Sam Harris");

const abbrevName1 = (name) => {
  const words = name.toUpperCase().split(" ");
  const initials = words.map((el) => el[0]);
  return console.log(initials.join("."));
};
abbrevName1("David Mendieta");
