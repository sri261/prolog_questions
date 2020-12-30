// 1.10 (*) Run-length encoding of a list.
// ?- encode([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [[4,a],[1,b],[2,c],[2,a],[1,d],[4,e]]
import { consecutiveDuplicates } from "./q1_09";
const List10: Array<any> = [
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

export function lengthEncoding<T>(input: Array<T>) {
  return consecutiveDuplicates(input).map((e) => {
    return [e.length, e[0]];
  });
}
console.log(lengthEncoding(List10));
