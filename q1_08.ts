// 1.08 (**) Eliminate consecutive duplicates of list elements.
// If a list contains repeated elements they should be replaced with a single copy of the element.
// The order of the elements should not be changed.

// Example:
// ?- compress([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [a,b,c,a,d,e]

const List8 = [
  "a",
  "a",
  "a",
  "a",
  "b",
  "c",
  "c",
  "a",
  "a",
  "d",
  "e",
  "e",
  "e",
  "e",
];
const numlist = [1, 1, 1, 1, 2, 3, 1, 2, 1, 1, 5];

function eliminateConsecutiveDuplicates<T>(input: Array<T>) {
  return input.filter((e, index) => {
    if (input.indexOf(e) === index) {
      return e;
    }
  });
}

console.log(eliminateConsecutiveDuplicates(numlist));
