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
// function consecutiveDuplicates(input: Array<any>) {
//   let result: Array<any> = [];
//   let counter: number = 1;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === input[i + 1]) {
//       counter++;
//     } else {
//       result.push([input[i], counter]);
//       counter = 1;
//     }
//   }
//   return result;
// }
// console.log(consecutiveDuplicates(List9));
