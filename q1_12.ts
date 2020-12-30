// 1.12 (**) Decode a run-length encoded list.
import { flatten } from "./q1_07";
const List12 = [
  [4, "a"],
  [1, "b"],
  [2, "c"],
  [2, "a"],
  [1, "d"],
  [4, "e"],
];

function decodeList<T>(input: T[]) {
  return flatten(
    input.reduce((acc, curr) => {
      acc.push(Array(curr[0]).fill(curr[1]));
      return acc;
    }, [])
  );
}

console.log(decodeList(List12));
