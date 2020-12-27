// 1.09 (**) Pack consecutive duplicates of list elements into sublists.
// If a list contains repeated elements they should be placed in separate sublists.

// Example:
// [a,a,a,a,b,c,c,a,a,d,e,e,e,e]
//  [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]

const List9: Array<any> = [
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
function consecutiveDuplicatesInSublists(input: Array<any>) {
  let temp: Array<any> = [];
  input.filter((e, index) => {
    input.indexOf(e) == index;
    temp.push(e);
  });
  return temp;
}
console.log(consecutiveDuplicatesInSublists(List9));
