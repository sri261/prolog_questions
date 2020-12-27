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

export const eliminateConsecutiveDuplicates = (
  arr,
  len = 0,
  canDelete = false
) => {
  if (len < arr.length) {
    if (canDelete) {
      arr.splice(len, 1);
      len--;
    }
    return eliminateConsecutiveDuplicates(
      arr,
      len + 1,
      arr[len] === arr[len + 1]
    );
  }
  return;
};
eliminateConsecutiveDuplicates(List8);
console.log(List8);
