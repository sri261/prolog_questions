// 1.08 (**) Eliminate consecutive duplicates of list elements.
// If a list contains repeated elements they should be replaced with a single copy of the element.
// The order of the elements should not be changed.

// Example:
// ?- compress([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [a,b,c,a,d,e]

const List8: Array<any> = [
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

function eliminateConsecutiveDuplicates(input: Array<any>) {
  return input.filter((e, index) => {
    // return input.indexOf(e) == index ? e : null;
    if (input.indexOf(e) === index) {
      return e;
    }
  });
}

console.log(eliminateConsecutiveDuplicates(List8));
