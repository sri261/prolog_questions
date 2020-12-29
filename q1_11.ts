// 1.11 (*) Modified run-length encoding.
// Modify the result of problem 1.10 in such a way that if an element has no duplicates it
// is simply copied into the result list.
// Only elements with duplicates are transferred as [N,E] terms.

import { lengthEncoding } from "./q1_10";
const List11 = [
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

function modifiedLengthEncoding<T>(input: Array<T>) {
  return lengthEncoding(input).map((e) => (e[1] === 1 ? e[0] : e));
}
console.log(modifiedLengthEncoding(List11));
