// 1.09 (**) Pack consecutive duplicates of list elements into sublists.
// If a list contains repeated elements they should be placed in separate sublists.

// Example:
// [a,a,a,a,b,c,c,a,a,d,e,e,e,e]
//  [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]

const List9 = [
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
  "z",
];

export function consecutiveDuplicates<T>(input: Array<T>) {
  let temp = [];
  return input.reduce((acc, curr, index, arr) => {
    if (curr === arr[index + 1]) {
      temp.push(curr);
    } else {
      temp.push(curr);
      acc.push(temp);
      temp = [];
    }
    return acc;
  }, []);
}
console.log(consecutiveDuplicates(List9));
