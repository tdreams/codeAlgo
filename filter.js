//20/05/2023
/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */

function filter_list(l) {
  return l.filter((elt) => typeof elt === "number");
}
filter_list([1, 2, "a", "b"]) == [1, 2];
filter_list([1, "a", "b", 0, 15]) == [1, 0, 15];
