/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that 

humanYearsCatYearsDogYears(10), [10,56,64])*/

var humanYearsCatYearsDogYears = function (humanYears) {
  let dogYears;
  let catYears;
  if (humanYears === 1) {
    dogYears = 15;
    catYears = dogYears;
  }
  if (humanYears === 2) {
    dogYears = 15+9;
    catYears = dogYears;
  }
  for (let i = 3; i<humanYears; i++) {
    if (humanYears >= i){
        dogYears+=3 
  }
  for (let i = 4; i<humanYears; i++) {
    if (humanYears >= i){
        dogYears+=4 
  }
  
  }
  return [0, 0, 0];

};

console.log(humanYearsCatYearsDogYears(1));
